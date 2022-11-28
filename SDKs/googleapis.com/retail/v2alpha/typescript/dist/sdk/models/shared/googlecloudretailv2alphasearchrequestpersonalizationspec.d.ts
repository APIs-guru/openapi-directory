import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Auto = "AUTO",
    Disabled = "DISABLED"
}
/**
 * The specification for personalization.
**/
export declare class GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec extends SpeakeasyBase {
    mode?: GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum;
}
