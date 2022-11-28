import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * The specifications of dynamically generated facets.
**/
export declare class GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec extends SpeakeasyBase {
    mode?: GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecModeEnum;
}
