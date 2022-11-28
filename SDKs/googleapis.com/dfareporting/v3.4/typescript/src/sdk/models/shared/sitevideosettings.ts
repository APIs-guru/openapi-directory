import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SiteCompanionSetting } from "./sitecompanionsetting";
import { ObaIcon } from "./obaicon";
import { SiteSkippableSetting } from "./siteskippablesetting";
import { SiteTranscodeSetting } from "./sitetranscodesetting";


export enum SiteVideoSettingsOrientationEnum {
    Any = "ANY",
    Landscape = "LANDSCAPE",
    Portrait = "PORTRAIT"
}


// SiteVideoSettings
/** 
 * Video Settings
**/
export class SiteVideoSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companionSettings" })
  companionSettings?: SiteCompanionSetting;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=obaEnabled" })
  obaEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=obaSettings" })
  obaSettings?: ObaIcon;

  @SpeakeasyMetadata({ data: "json, name=orientation" })
  orientation?: SiteVideoSettingsOrientationEnum;

  @SpeakeasyMetadata({ data: "json, name=skippableSettings" })
  skippableSettings?: SiteSkippableSetting;

  @SpeakeasyMetadata({ data: "json, name=transcodeSettings" })
  transcodeSettings?: SiteTranscodeSetting;
}
