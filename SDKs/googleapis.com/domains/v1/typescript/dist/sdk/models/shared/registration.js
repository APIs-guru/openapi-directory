var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactSettings } from "./contactsettings";
import { DnsSettingsInput } from "./dnssettings";
import { ManagementSettingsInput } from "./managementsettings";
import { DnsSettings } from "./dnssettings";
import { ManagementSettings } from "./managementsettings";
export var RegistrationIssuesEnum;
(function (RegistrationIssuesEnum) {
    RegistrationIssuesEnum["IssueUnspecified"] = "ISSUE_UNSPECIFIED";
    RegistrationIssuesEnum["ContactSupport"] = "CONTACT_SUPPORT";
    RegistrationIssuesEnum["UnverifiedEmail"] = "UNVERIFIED_EMAIL";
})(RegistrationIssuesEnum || (RegistrationIssuesEnum = {}));
export var RegistrationRegisterFailureReasonEnum;
(function (RegistrationRegisterFailureReasonEnum) {
    RegistrationRegisterFailureReasonEnum["RegisterFailureReasonUnspecified"] = "REGISTER_FAILURE_REASON_UNSPECIFIED";
    RegistrationRegisterFailureReasonEnum["RegisterFailureReasonUnknown"] = "REGISTER_FAILURE_REASON_UNKNOWN";
    RegistrationRegisterFailureReasonEnum["DomainNotAvailable"] = "DOMAIN_NOT_AVAILABLE";
    RegistrationRegisterFailureReasonEnum["InvalidContacts"] = "INVALID_CONTACTS";
})(RegistrationRegisterFailureReasonEnum || (RegistrationRegisterFailureReasonEnum = {}));
export var RegistrationStateEnum;
(function (RegistrationStateEnum) {
    RegistrationStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    RegistrationStateEnum["RegistrationPending"] = "REGISTRATION_PENDING";
    RegistrationStateEnum["RegistrationFailed"] = "REGISTRATION_FAILED";
    RegistrationStateEnum["TransferPending"] = "TRANSFER_PENDING";
    RegistrationStateEnum["TransferFailed"] = "TRANSFER_FAILED";
    RegistrationStateEnum["ImportPending"] = "IMPORT_PENDING";
    RegistrationStateEnum["Active"] = "ACTIVE";
    RegistrationStateEnum["Suspended"] = "SUSPENDED";
    RegistrationStateEnum["Exported"] = "EXPORTED";
})(RegistrationStateEnum || (RegistrationStateEnum = {}));
export var RegistrationSupportedPrivacyEnum;
(function (RegistrationSupportedPrivacyEnum) {
    RegistrationSupportedPrivacyEnum["ContactPrivacyUnspecified"] = "CONTACT_PRIVACY_UNSPECIFIED";
    RegistrationSupportedPrivacyEnum["PublicContactData"] = "PUBLIC_CONTACT_DATA";
    RegistrationSupportedPrivacyEnum["PrivateContactData"] = "PRIVATE_CONTACT_DATA";
    RegistrationSupportedPrivacyEnum["RedactedContactData"] = "REDACTED_CONTACT_DATA";
})(RegistrationSupportedPrivacyEnum || (RegistrationSupportedPrivacyEnum = {}));
export var RegistrationTransferFailureReasonEnum;
(function (RegistrationTransferFailureReasonEnum) {
    RegistrationTransferFailureReasonEnum["TransferFailureReasonUnspecified"] = "TRANSFER_FAILURE_REASON_UNSPECIFIED";
    RegistrationTransferFailureReasonEnum["TransferFailureReasonUnknown"] = "TRANSFER_FAILURE_REASON_UNKNOWN";
    RegistrationTransferFailureReasonEnum["EmailConfirmationFailure"] = "EMAIL_CONFIRMATION_FAILURE";
    RegistrationTransferFailureReasonEnum["DomainNotRegistered"] = "DOMAIN_NOT_REGISTERED";
    RegistrationTransferFailureReasonEnum["DomainHasTransferLock"] = "DOMAIN_HAS_TRANSFER_LOCK";
    RegistrationTransferFailureReasonEnum["InvalidAuthorizationCode"] = "INVALID_AUTHORIZATION_CODE";
    RegistrationTransferFailureReasonEnum["TransferCancelled"] = "TRANSFER_CANCELLED";
    RegistrationTransferFailureReasonEnum["TransferRejected"] = "TRANSFER_REJECTED";
    RegistrationTransferFailureReasonEnum["InvalidRegistrantEmailAddress"] = "INVALID_REGISTRANT_EMAIL_ADDRESS";
    RegistrationTransferFailureReasonEnum["DomainNotEligibleForTransfer"] = "DOMAIN_NOT_ELIGIBLE_FOR_TRANSFER";
    RegistrationTransferFailureReasonEnum["TransferAlreadyPending"] = "TRANSFER_ALREADY_PENDING";
})(RegistrationTransferFailureReasonEnum || (RegistrationTransferFailureReasonEnum = {}));
// RegistrationInput
/**
 * The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar. First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains.
**/
var RegistrationInput = /** @class */ (function (_super) {
    __extends(RegistrationInput, _super);
    function RegistrationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactSettings" }),
        __metadata("design:type", ContactSettings)
    ], RegistrationInput.prototype, "contactSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsSettings" }),
        __metadata("design:type", DnsSettingsInput)
    ], RegistrationInput.prototype, "dnsSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainName" }),
        __metadata("design:type", String)
    ], RegistrationInput.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], RegistrationInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managementSettings" }),
        __metadata("design:type", ManagementSettingsInput)
    ], RegistrationInput.prototype, "managementSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingContactSettings" }),
        __metadata("design:type", ContactSettings)
    ], RegistrationInput.prototype, "pendingContactSettings", void 0);
    return RegistrationInput;
}(SpeakeasyBase));
export { RegistrationInput };
// Registration
/**
 * The `Registration` resource facilitates managing and configuring domain name registrations. There are several ways to create a new `Registration` resource: To create a new `Registration` resource, find a suitable domain name by calling the `SearchDomains` method with a query to see available domain name options. After choosing a name, call `RetrieveRegisterParameters` to ensure availability and obtain information like pricing, which is needed to build a call to `RegisterDomain`. Another way to create a new `Registration` is to transfer an existing domain from another registrar. First, go to the current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to `TransferDomain`. Finally, you can create a new `Registration` by importing an existing domain managed with [Google Domains](https://domains.google/). First, call `RetrieveImportableDomains` to list domains to which the calling user has sufficient access. Then call `ImportDomain` on any domain names you want to use with Cloud Domains.
**/
var Registration = /** @class */ (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactSettings" }),
        __metadata("design:type", ContactSettings)
    ], Registration.prototype, "contactSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Registration.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dnsSettings" }),
        __metadata("design:type", DnsSettings)
    ], Registration.prototype, "dnsSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainName" }),
        __metadata("design:type", String)
    ], Registration.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expireTime" }),
        __metadata("design:type", String)
    ], Registration.prototype, "expireTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issues" }),
        __metadata("design:type", Array)
    ], Registration.prototype, "issues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Registration.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managementSettings" }),
        __metadata("design:type", ManagementSettings)
    ], Registration.prototype, "managementSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Registration.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pendingContactSettings" }),
        __metadata("design:type", ContactSettings)
    ], Registration.prototype, "pendingContactSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registerFailureReason" }),
        __metadata("design:type", String)
    ], Registration.prototype, "registerFailureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Registration.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportedPrivacy" }),
        __metadata("design:type", Array)
    ], Registration.prototype, "supportedPrivacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferFailureReason" }),
        __metadata("design:type", String)
    ], Registration.prototype, "transferFailureReason", void 0);
    return Registration;
}(SpeakeasyBase));
export { Registration };
