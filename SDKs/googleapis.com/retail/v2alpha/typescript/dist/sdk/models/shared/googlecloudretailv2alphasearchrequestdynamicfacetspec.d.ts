import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * The specifications of dynamically generated facets.
**/
export declare class GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec extends SpeakeasyBase {
    mode?: GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpecModeEnum;
}
