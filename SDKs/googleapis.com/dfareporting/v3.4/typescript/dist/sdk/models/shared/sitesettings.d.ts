import { SpeakeasyBase } from "../../../internal/utils";
import { TagSetting } from "./tagsetting";
export declare enum SiteSettingsVpaidAdapterChoiceTemplateEnum {
    Default = "DEFAULT",
    Flash = "FLASH",
    Html5 = "HTML5",
    Both = "BOTH"
}
/**
 * Site Settings
**/
export declare class SiteSettings extends SpeakeasyBase {
    activeViewOptOut?: boolean;
    adBlockingOptOut?: boolean;
    disableNewCookie?: boolean;
    tagSetting?: TagSetting;
    videoActiveViewOptOutTemplate?: boolean;
    vpaidAdapterChoiceTemplate?: SiteSettingsVpaidAdapterChoiceTemplateEnum;
}
