import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompanionSetting } from "./companionsetting";
import { ObaIcon } from "./obaicon";
import { SkippableSetting } from "./skippablesetting";
import { TranscodeSetting } from "./transcodesetting";


export enum VideoSettingsOrientationEnum {
    Any = "ANY",
    Landscape = "LANDSCAPE",
    Portrait = "PORTRAIT"
}


// VideoSettings
/** 
 * Video Settings
**/
export class VideoSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companionSettings" })
  companionSettings?: CompanionSetting;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=obaEnabled" })
  obaEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=obaSettings" })
  obaSettings?: ObaIcon;

  @SpeakeasyMetadata({ data: "json, name=orientation" })
  orientation?: VideoSettingsOrientationEnum;

  @SpeakeasyMetadata({ data: "json, name=skippableSettings" })
  skippableSettings?: SkippableSetting;

  @SpeakeasyMetadata({ data: "json, name=transcodeSettings" })
  transcodeSettings?: TranscodeSetting;
}
