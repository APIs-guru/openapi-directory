import { SpeakeasyBase } from "../../../internal/utils";
import { CompositeFilter } from "./compositefilter";
import { PropertyFilter } from "./propertyfilter";
/**
 * A holder for any type of filter.
**/
export declare class Filter extends SpeakeasyBase {
    compositeFilter?: CompositeFilter;
    propertyFilter?: PropertyFilter;
}
