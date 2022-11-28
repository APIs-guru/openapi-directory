import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * The specifications of dynamically generated facets.
**/
export declare class GoogleCloudRetailV2SearchRequestDynamicFacetSpec extends SpeakeasyBase {
    mode?: GoogleCloudRetailV2SearchRequestDynamicFacetSpecModeEnum;
}
