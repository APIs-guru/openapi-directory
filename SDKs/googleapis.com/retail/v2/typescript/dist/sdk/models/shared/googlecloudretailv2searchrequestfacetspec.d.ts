import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2SearchRequestFacetSpecFacetKey } from "./googlecloudretailv2searchrequestfacetspecfacetkey";
/**
 * A facet specification to perform faceted search.
**/
export declare class GoogleCloudRetailV2SearchRequestFacetSpec extends SpeakeasyBase {
    enableDynamicPosition?: boolean;
    excludedFilterKeys?: string[];
    facetKey?: GoogleCloudRetailV2SearchRequestFacetSpecFacetKey;
    limit?: number;
}
