import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactSettings } from "./contactsettings";
import { DnsSettings } from "./dnssettings";
import { ManagementSettings } from "./managementsettings";
import { ContactSettings } from "./contactsettings";

export enum RegistrationIssuesEnum {
    IssueUnspecified = "ISSUE_UNSPECIFIED"
,    ContactSupport = "CONTACT_SUPPORT"
,    UnverifiedEmail = "UNVERIFIED_EMAIL"
}

export enum RegistrationRegisterFailureReasonEnum {
    RegisterFailureReasonUnspecified = "REGISTER_FAILURE_REASON_UNSPECIFIED"
,    RegisterFailureReasonUnknown = "REGISTER_FAILURE_REASON_UNKNOWN"
,    DomainNotAvailable = "DOMAIN_NOT_AVAILABLE"
,    InvalidContacts = "INVALID_CONTACTS"
}

export enum RegistrationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    RegistrationPending = "REGISTRATION_PENDING"
,    RegistrationFailed = "REGISTRATION_FAILED"
,    TransferPending = "TRANSFER_PENDING"
,    TransferFailed = "TRANSFER_FAILED"
,    ImportPending = "IMPORT_PENDING"
,    Active = "ACTIVE"
,    Suspended = "SUSPENDED"
,    Exported = "EXPORTED"
}

export enum RegistrationSupportedPrivacyEnum {
    ContactPrivacyUnspecified = "CONTACT_PRIVACY_UNSPECIFIED"
,    PublicContactData = "PUBLIC_CONTACT_DATA"
,    PrivateContactData = "PRIVATE_CONTACT_DATA"
,    RedactedContactData = "REDACTED_CONTACT_DATA"
}

export enum RegistrationTransferFailureReasonEnum {
    TransferFailureReasonUnspecified = "TRANSFER_FAILURE_REASON_UNSPECIFIED"
,    TransferFailureReasonUnknown = "TRANSFER_FAILURE_REASON_UNKNOWN"
,    EmailConfirmationFailure = "EMAIL_CONFIRMATION_FAILURE"
,    DomainNotRegistered = "DOMAIN_NOT_REGISTERED"
,    DomainHasTransferLock = "DOMAIN_HAS_TRANSFER_LOCK"
,    InvalidAuthorizationCode = "INVALID_AUTHORIZATION_CODE"
,    TransferCancelled = "TRANSFER_CANCELLED"
,    TransferRejected = "TRANSFER_REJECTED"
,    InvalidRegistrantEmailAddress = "INVALID_REGISTRANT_EMAIL_ADDRESS"
,    DomainNotEligibleForTransfer = "DOMAIN_NOT_ELIGIBLE_FOR_TRANSFER"
,    TransferAlreadyPending = "TRANSFER_ALREADY_PENDING"
}


// Registration
/** 
 * The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar. First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains.
**/
export class Registration extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactSettings" })
  contactSettings?: ContactSettings;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=dnsSettings" })
  dnsSettings?: DnsSettings;

  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=issues" })
  issues?: RegistrationIssuesEnum[];

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=managementSettings" })
  managementSettings?: ManagementSettings;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pendingContactSettings" })
  pendingContactSettings?: ContactSettings;

  @Metadata({ data: "json, name=registerFailureReason" })
  registerFailureReason?: RegistrationRegisterFailureReasonEnum;

  @Metadata({ data: "json, name=state" })
  state?: RegistrationStateEnum;

  @Metadata({ data: "json, name=supportedPrivacy" })
  supportedPrivacy?: RegistrationSupportedPrivacyEnum[];

  @Metadata({ data: "json, name=transferFailureReason" })
  transferFailureReason?: RegistrationTransferFailureReasonEnum;
}
