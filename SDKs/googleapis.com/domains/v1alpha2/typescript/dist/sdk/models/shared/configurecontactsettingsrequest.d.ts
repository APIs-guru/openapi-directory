import { SpeakeasyBase } from "../../../internal/utils";
import { ContactSettings } from "./contactsettings";
export declare enum ConfigureContactSettingsRequestContactNoticesEnum {
    ContactNoticeUnspecified = "CONTACT_NOTICE_UNSPECIFIED",
    PublicContactDataAcknowledgement = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
}
/**
 * Request for the `ConfigureContactSettings` method.
**/
export declare class ConfigureContactSettingsRequest extends SpeakeasyBase {
    contactNotices?: ConfigureContactSettingsRequestContactNoticesEnum[];
    contactSettings?: ContactSettings;
    updateMask?: string;
    validateOnly?: boolean;
}
