import { SpeakeasyBase } from "../../../internal/utils";
import { SiteCompanionSetting } from "./sitecompanionsetting";
import { ObaIcon } from "./obaicon";
import { SiteSkippableSetting } from "./siteskippablesetting";
import { SiteTranscodeSetting } from "./sitetranscodesetting";
export declare enum SiteVideoSettingsOrientationEnum {
    Any = "ANY",
    Landscape = "LANDSCAPE",
    Portrait = "PORTRAIT"
}
/**
 * Video Settings
**/
export declare class SiteVideoSettings extends SpeakeasyBase {
    companionSettings?: SiteCompanionSetting;
    kind?: string;
    obaEnabled?: boolean;
    obaSettings?: ObaIcon;
    orientation?: SiteVideoSettingsOrientationEnum;
    skippableSettings?: SiteSkippableSetting;
    transcodeSettings?: SiteTranscodeSetting;
}
