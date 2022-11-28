import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies operators to return facet results for. There will be one FacetResult for every source_name/object_type/operator_name combination.
**/
export declare class FacetOptions extends SpeakeasyBase {
    numFacetBuckets?: number;
    objectType?: string;
    operatorName?: string;
    sourceName?: string;
}
