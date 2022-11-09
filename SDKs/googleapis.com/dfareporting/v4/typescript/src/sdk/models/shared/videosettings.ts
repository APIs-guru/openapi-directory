import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompanionSetting } from "./companionsetting";
import { ObaIcon } from "./obaicon";
import { SkippableSetting } from "./skippablesetting";
import { TranscodeSetting } from "./transcodesetting";

export enum VideoSettingsOrientationEnum {
    Any = "ANY"
,    Landscape = "LANDSCAPE"
,    Portrait = "PORTRAIT"
}


// VideoSettings
/** 
 * Video Settings
**/
export class VideoSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=companionSettings" })
  companionSettings?: CompanionSetting;

  @Metadata({ data: "json, name=durationSeconds" })
  durationSeconds?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=obaEnabled" })
  obaEnabled?: boolean;

  @Metadata({ data: "json, name=obaSettings" })
  obaSettings?: ObaIcon;

  @Metadata({ data: "json, name=orientation" })
  orientation?: VideoSettingsOrientationEnum;

  @Metadata({ data: "json, name=publisherSpecificationId" })
  publisherSpecificationId?: string;

  @Metadata({ data: "json, name=skippableSettings" })
  skippableSettings?: SkippableSetting;

  @Metadata({ data: "json, name=transcodeSettings" })
  transcodeSettings?: TranscodeSetting;
}
