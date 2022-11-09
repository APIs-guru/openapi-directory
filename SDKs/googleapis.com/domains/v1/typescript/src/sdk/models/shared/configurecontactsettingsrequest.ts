import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactSettings } from "./contactsettings";

export enum ConfigureContactSettingsRequestContactNoticesEnum {
    ContactNoticeUnspecified = "CONTACT_NOTICE_UNSPECIFIED"
,    PublicContactDataAcknowledgement = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
}


// ConfigureContactSettingsRequest
/** 
 * Request for the `ConfigureContactSettings` method.
**/
export class ConfigureContactSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactNotices" })
  contactNotices?: ConfigureContactSettingsRequestContactNoticesEnum[];

  @Metadata({ data: "json, name=contactSettings" })
  contactSettings?: ContactSettings;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
