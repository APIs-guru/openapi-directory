import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilterCriteria } from "./filtercriteria";
import { FilterSpec } from "./filterspec";
import { GridRange } from "./gridrange";
import { SortSpec } from "./sortspec";


// FilterView
/** 
 * A filter view.
**/
export class FilterView extends SpeakeasyBase {
  @Metadata({ data: "json, name=criteria", elemType: shared.FilterCriteria })
  criteria?: Map<string, FilterCriteria>;

  @Metadata({ data: "json, name=filterSpecs", elemType: shared.FilterSpec })
  filterSpecs?: FilterSpec[];

  @Metadata({ data: "json, name=filterViewId" })
  filterViewId?: number;

  @Metadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;

  @Metadata({ data: "json, name=range" })
  range?: GridRange;

  @Metadata({ data: "json, name=sortSpecs", elemType: shared.SortSpec })
  sortSpecs?: SortSpec[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}
