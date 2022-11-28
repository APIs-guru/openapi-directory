import { SpeakeasyBase } from "../../../internal/utils";
import { FacetBucket } from "./facetbucket";
/**
 * Source specific facet response
**/
export declare class FacetResult extends SpeakeasyBase {
    buckets?: FacetBucket[];
    objectType?: string;
    operatorName?: string;
    sourceName?: string;
}
