import { SpeakeasyBase } from "../../../internal/utils";
import { CompanionSetting } from "./companionsetting";
import { ObaIcon } from "./obaicon";
import { SkippableSetting } from "./skippablesetting";
import { TranscodeSetting } from "./transcodesetting";
export declare enum VideoSettingsOrientationEnum {
    Any = "ANY",
    Landscape = "LANDSCAPE",
    Portrait = "PORTRAIT"
}
/**
 * Video Settings
**/
export declare class VideoSettings extends SpeakeasyBase {
    companionSettings?: CompanionSetting;
    durationSeconds?: number;
    kind?: string;
    obaEnabled?: boolean;
    obaSettings?: ObaIcon;
    orientation?: VideoSettingsOrientationEnum;
    skippableSettings?: SkippableSetting;
    transcodeSettings?: TranscodeSetting;
}
