import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompositeFilter } from "./compositefilter";
import { FieldFilter } from "./fieldfilter";
import { UnaryFilter } from "./unaryfilter";


// Filter
/** 
 * A filter.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=compositeFilter" })
  compositeFilter?: CompositeFilter;

  @Metadata({ data: "json, name=fieldFilter" })
  fieldFilter?: FieldFilter;

  @Metadata({ data: "json, name=unaryFilter" })
  unaryFilter?: UnaryFilter;
}
