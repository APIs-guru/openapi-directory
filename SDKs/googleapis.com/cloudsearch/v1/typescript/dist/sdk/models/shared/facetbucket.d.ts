import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * A bucket in a facet is the basic unit of operation. A bucket can comprise either a single value OR a contiguous range of values, depending on the type of the field bucketed. FacetBucket is currently used only for returning the response object.
**/
export declare class FacetBucket extends SpeakeasyBase {
    count?: number;
    percentage?: number;
    value?: Value;
}
