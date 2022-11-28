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
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { ObRisk1 } from "./obrisk1";
export var ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum;
(function (ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum) {
    ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum["Any"] = "Any";
    ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum["Single"] = "Single";
})(ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum || (ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum = {}));
// ObWriteDomesticScheduledConsent4DataAuthorisation
/**
 * The authorisation type request from the TPP.
**/
var ObWriteDomesticScheduledConsent4DataAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsent4DataAuthorisation, _super);
    function ObWriteDomesticScheduledConsent4DataAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataAuthorisation.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledConsent4DataAuthorisation.prototype, "completionDateTime", void 0);
    return ObWriteDomesticScheduledConsent4DataAuthorisation;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsent4DataAuthorisation };
// ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount, _super);
    function ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount };
// ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount, _super);
    function ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount };
// ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount, _super);
    function ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount };
// ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation, _super);
    function ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation };
// ObWriteDomesticScheduledConsent4DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
**/
var ObWriteDomesticScheduledConsent4DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsent4DataInitiation, _super);
    function ObWriteDomesticScheduledConsent4DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount)
    ], ObWriteDomesticScheduledConsent4DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorPostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteDomesticScheduledConsent4DataInitiation.prototype, "creditorPostalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount)
    ], ObWriteDomesticScheduledConsent4DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount)
    ], ObWriteDomesticScheduledConsent4DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation)
    ], ObWriteDomesticScheduledConsent4DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledConsent4DataInitiation.prototype, "requestedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteDomesticScheduledConsent4DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteDomesticScheduledConsent4DataInitiation;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsent4DataInitiation };
export var ObWriteDomesticScheduledConsent4DataPermissionEnum;
(function (ObWriteDomesticScheduledConsent4DataPermissionEnum) {
    ObWriteDomesticScheduledConsent4DataPermissionEnum["Create"] = "Create";
})(ObWriteDomesticScheduledConsent4DataPermissionEnum || (ObWriteDomesticScheduledConsent4DataPermissionEnum = {}));
export var ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum;
(function (ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum) {
    ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum["No"] = "No";
    ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum["Yes"] = "Yes";
})(ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum || (ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum = {}));
var ObWriteDomesticScheduledConsent4Data = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsent4Data, _super);
    function ObWriteDomesticScheduledConsent4Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Authorisation" }),
        __metadata("design:type", ObWriteDomesticScheduledConsent4DataAuthorisation)
    ], ObWriteDomesticScheduledConsent4Data.prototype, "authorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteDomesticScheduledConsent4DataInitiation)
    ], ObWriteDomesticScheduledConsent4Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Permission" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4Data.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsent4Data.prototype, "readRefundAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SCASupportData" }),
        __metadata("design:type", ObscaSupportData1)
    ], ObWriteDomesticScheduledConsent4Data.prototype, "scaSupportData", void 0);
    return ObWriteDomesticScheduledConsent4Data;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsent4Data };
var ObWriteDomesticScheduledConsent4 = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsent4, _super);
    function ObWriteDomesticScheduledConsent4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteDomesticScheduledConsent4Data)
    ], ObWriteDomesticScheduledConsent4.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteDomesticScheduledConsent4.prototype, "risk", void 0);
    return ObWriteDomesticScheduledConsent4;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsent4 };
