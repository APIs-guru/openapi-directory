import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilterCriteria } from "./filtercriteria";
import { FilterSpec } from "./filterspec";
import { GridRange } from "./gridrange";
import { SortSpec } from "./sortspec";


// BasicFilter
/** 
 * The default filter associated with a sheet.
**/
export class BasicFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=criteria", elemType: shared.FilterCriteria })
  criteria?: Map<string, FilterCriteria>;

  @Metadata({ data: "json, name=filterSpecs", elemType: shared.FilterSpec })
  filterSpecs?: FilterSpec[];

  @Metadata({ data: "json, name=range" })
  range?: GridRange;

  @Metadata({ data: "json, name=sortSpecs", elemType: shared.SortSpec })
  sortSpecs?: SortSpec[];
}
