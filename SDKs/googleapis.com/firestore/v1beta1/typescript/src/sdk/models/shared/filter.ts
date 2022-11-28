import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompositeFilter } from "./compositefilter";
import { FieldFilter } from "./fieldfilter";
import { UnaryFilter } from "./unaryfilter";



// Filter
/** 
 * A filter.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compositeFilter" })
  compositeFilter?: CompositeFilter;

  @SpeakeasyMetadata({ data: "json, name=fieldFilter" })
  fieldFilter?: FieldFilter;

  @SpeakeasyMetadata({ data: "json, name=unaryFilter" })
  unaryFilter?: UnaryFilter;
}
