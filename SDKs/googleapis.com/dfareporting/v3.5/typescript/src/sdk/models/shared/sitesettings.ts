import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TagSetting } from "./tagsetting";

export enum SiteSettingsVpaidAdapterChoiceTemplateEnum {
    Default = "DEFAULT"
,    Flash = "FLASH"
,    Html5 = "HTML5"
,    Both = "BOTH"
}


// SiteSettings
/** 
 * Site Settings
**/
export class SiteSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeViewOptOut" })
  activeViewOptOut?: boolean;

  @Metadata({ data: "json, name=adBlockingOptOut" })
  adBlockingOptOut?: boolean;

  @Metadata({ data: "json, name=disableNewCookie" })
  disableNewCookie?: boolean;

  @Metadata({ data: "json, name=tagSetting" })
  tagSetting?: TagSetting;

  @Metadata({ data: "json, name=videoActiveViewOptOutTemplate" })
  videoActiveViewOptOutTemplate?: boolean;

  @Metadata({ data: "json, name=vpaidAdapterChoiceTemplate" })
  vpaidAdapterChoiceTemplate?: SiteSettingsVpaidAdapterChoiceTemplateEnum;
}
