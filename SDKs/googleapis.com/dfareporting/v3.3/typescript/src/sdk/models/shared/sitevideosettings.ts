import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SiteCompanionSetting } from "./sitecompanionsetting";
import { SiteSkippableSetting } from "./siteskippablesetting";
import { SiteTranscodeSetting } from "./sitetranscodesetting";

export enum SiteVideoSettingsOrientationEnum {
    Any = "ANY"
,    Landscape = "LANDSCAPE"
,    Portrait = "PORTRAIT"
}


// SiteVideoSettings
/** 
 * Video Settings
**/
export class SiteVideoSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=companionSettings" })
  companionSettings?: SiteCompanionSetting;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=orientation" })
  orientation?: SiteVideoSettingsOrientationEnum;

  @Metadata({ data: "json, name=skippableSettings" })
  skippableSettings?: SiteSkippableSetting;

  @Metadata({ data: "json, name=transcodeSettings" })
  transcodeSettings?: SiteTranscodeSetting;
}
