import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Auto = "AUTO",
    Disabled = "DISABLED"
}
/**
 * The specification for personalization.
**/
export declare class GoogleCloudRetailV2SearchRequestPersonalizationSpec extends SpeakeasyBase {
    mode?: GoogleCloudRetailV2SearchRequestPersonalizationSpecModeEnum;
}
