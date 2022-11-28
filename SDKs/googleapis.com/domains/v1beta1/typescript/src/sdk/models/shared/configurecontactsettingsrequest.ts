import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactSettings } from "./contactsettings";


export enum ConfigureContactSettingsRequestContactNoticesEnum {
    ContactNoticeUnspecified = "CONTACT_NOTICE_UNSPECIFIED",
    PublicContactDataAcknowledgement = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
}


// ConfigureContactSettingsRequest
/** 
 * Request for the `ConfigureContactSettings` method.
**/
export class ConfigureContactSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactNotices" })
  contactNotices?: ConfigureContactSettingsRequestContactNoticesEnum[];

  @SpeakeasyMetadata({ data: "json, name=contactSettings" })
  contactSettings?: ContactSettings;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
