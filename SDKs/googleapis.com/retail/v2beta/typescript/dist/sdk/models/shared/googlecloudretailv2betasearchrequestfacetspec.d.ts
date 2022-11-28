import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey } from "./googlecloudretailv2betasearchrequestfacetspecfacetkey";
/**
 * A facet specification to perform faceted search.
**/
export declare class GoogleCloudRetailV2betaSearchRequestFacetSpec extends SpeakeasyBase {
    enableDynamicPosition?: boolean;
    excludedFilterKeys?: string[];
    facetKey?: GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey;
    limit?: number;
}
