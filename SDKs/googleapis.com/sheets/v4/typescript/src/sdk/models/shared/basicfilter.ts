import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterCriteria } from "./filtercriteria";
import { FilterSpec } from "./filterspec";
import { GridRange } from "./gridrange";
import { SortSpec } from "./sortspec";



// BasicFilter
/** 
 * The default filter associated with a sheet.
**/
export class BasicFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criteria", elemType: FilterCriteria })
  criteria?: Map<string, FilterCriteria>;

  @SpeakeasyMetadata({ data: "json, name=filterSpecs", elemType: FilterSpec })
  filterSpecs?: FilterSpec[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;

  @SpeakeasyMetadata({ data: "json, name=sortSpecs", elemType: SortSpec })
  sortSpecs?: SortSpec[];
}
