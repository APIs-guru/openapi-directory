import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Contact } from "./contact";
import { Contact } from "./contact";
import { Contact } from "./contact";

export enum ContactSettingsPrivacyEnum {
    ContactPrivacyUnspecified = "CONTACT_PRIVACY_UNSPECIFIED"
,    PublicContactData = "PUBLIC_CONTACT_DATA"
,    PrivateContactData = "PRIVATE_CONTACT_DATA"
,    RedactedContactData = "REDACTED_CONTACT_DATA"
}


// ContactSettings
/** 
 * Defines the contact information associated with a `Registration`. [ICANN](https://icann.org/) requires all domain names to have associated contact information. The `registrant_contact` is considered the domain's legal owner, and often the other contacts are identical.
**/
export class ContactSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminContact" })
  adminContact?: Contact;

  @Metadata({ data: "json, name=privacy" })
  privacy?: ContactSettingsPrivacyEnum;

  @Metadata({ data: "json, name=registrantContact" })
  registrantContact?: Contact;

  @Metadata({ data: "json, name=technicalContact" })
  technicalContact?: Contact;
}
