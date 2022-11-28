import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagSetting } from "./tagsetting";


export enum SiteSettingsVpaidAdapterChoiceTemplateEnum {
    Default = "DEFAULT",
    Flash = "FLASH",
    Html5 = "HTML5",
    Both = "BOTH"
}


// SiteSettings
/** 
 * Site Settings
**/
export class SiteSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeViewOptOut" })
  activeViewOptOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=adBlockingOptOut" })
  adBlockingOptOut?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableNewCookie" })
  disableNewCookie?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tagSetting" })
  tagSetting?: TagSetting;

  @SpeakeasyMetadata({ data: "json, name=videoActiveViewOptOutTemplate" })
  videoActiveViewOptOutTemplate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=vpaidAdapterChoiceTemplate" })
  vpaidAdapterChoiceTemplate?: SiteSettingsVpaidAdapterChoiceTemplateEnum;
}
