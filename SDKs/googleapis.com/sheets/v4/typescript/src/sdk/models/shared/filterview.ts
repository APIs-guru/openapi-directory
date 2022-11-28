import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterCriteria } from "./filtercriteria";
import { FilterSpec } from "./filterspec";
import { GridRange } from "./gridrange";
import { SortSpec } from "./sortspec";



// FilterView
/** 
 * A filter view.
**/
export class FilterView extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criteria", elemType: FilterCriteria })
  criteria?: Map<string, FilterCriteria>;

  @SpeakeasyMetadata({ data: "json, name=filterSpecs", elemType: FilterSpec })
  filterSpecs?: FilterSpec[];

  @SpeakeasyMetadata({ data: "json, name=filterViewId" })
  filterViewId?: number;

  @SpeakeasyMetadata({ data: "json, name=namedRangeId" })
  namedRangeId?: string;

  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;

  @SpeakeasyMetadata({ data: "json, name=sortSpecs", elemType: SortSpec })
  sortSpecs?: SortSpec[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
