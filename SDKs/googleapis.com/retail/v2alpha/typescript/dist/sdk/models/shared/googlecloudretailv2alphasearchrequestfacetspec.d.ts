import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey } from "./googlecloudretailv2alphasearchrequestfacetspecfacetkey";
/**
 * A facet specification to perform faceted search.
**/
export declare class GoogleCloudRetailV2alphaSearchRequestFacetSpec extends SpeakeasyBase {
    enableDynamicPosition?: boolean;
    excludedFilterKeys?: string[];
    facetKey?: GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey;
    limit?: number;
}
