import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompositeFilter } from "./compositefilter";
import { PropertyFilter } from "./propertyfilter";



// Filter
/** 
 * A holder for any type of filter.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compositeFilter" })
  compositeFilter?: CompositeFilter;

  @SpeakeasyMetadata({ data: "json, name=propertyFilter" })
  propertyFilter?: PropertyFilter;
}
