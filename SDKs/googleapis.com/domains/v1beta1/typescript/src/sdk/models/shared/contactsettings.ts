import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";


export enum ContactSettingsPrivacyEnum {
    ContactPrivacyUnspecified = "CONTACT_PRIVACY_UNSPECIFIED",
    PublicContactData = "PUBLIC_CONTACT_DATA",
    PrivateContactData = "PRIVATE_CONTACT_DATA",
    RedactedContactData = "REDACTED_CONTACT_DATA"
}


// ContactSettings
/** 
 * Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.
**/
export class ContactSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminContact" })
  adminContact?: Contact;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: ContactSettingsPrivacyEnum;

  @SpeakeasyMetadata({ data: "json, name=registrantContact" })
  registrantContact?: Contact;

  @SpeakeasyMetadata({ data: "json, name=technicalContact" })
  technicalContact?: Contact;
}
