import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompositeFilter } from "./compositefilter";
import { PropertyFilter } from "./propertyfilter";


// Filter
/** 
 * A holder for any type of filter.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=compositeFilter" })
  compositeFilter?: CompositeFilter;

  @Metadata({ data: "json, name=propertyFilter" })
  propertyFilter?: PropertyFilter;
}
