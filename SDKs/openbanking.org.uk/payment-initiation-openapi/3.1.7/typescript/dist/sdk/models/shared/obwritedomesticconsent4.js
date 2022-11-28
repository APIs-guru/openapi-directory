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
export var ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum;
(function (ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum) {
    ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum["Any"] = "Any";
    ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum["Single"] = "Single";
})(ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum || (ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum = {}));
// ObWriteDomesticConsent4DataAuthorisation
/**
 * The authorisation type request from the TPP.
**/
var ObWriteDomesticConsent4DataAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsent4DataAuthorisation, _super);
    function ObWriteDomesticConsent4DataAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataAuthorisation.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticConsent4DataAuthorisation.prototype, "completionDateTime", void 0);
    return ObWriteDomesticConsent4DataAuthorisation;
}(SpeakeasyBase));
export { ObWriteDomesticConsent4DataAuthorisation };
// ObWriteDomesticConsent4DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteDomesticConsent4DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsent4DataInitiationCreditorAccount, _super);
    function ObWriteDomesticConsent4DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticConsent4DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticConsent4DataInitiationCreditorAccount };
// ObWriteDomesticConsent4DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteDomesticConsent4DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsent4DataInitiationDebtorAccount, _super);
    function ObWriteDomesticConsent4DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticConsent4DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticConsent4DataInitiationDebtorAccount };
// ObWriteDomesticConsent4DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteDomesticConsent4DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsent4DataInitiationInstructedAmount, _super);
    function ObWriteDomesticConsent4DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteDomesticConsent4DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteDomesticConsent4DataInitiationInstructedAmount };
// ObWriteDomesticConsent4DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteDomesticConsent4DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsent4DataInitiationRemittanceInformation, _super);
    function ObWriteDomesticConsent4DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteDomesticConsent4DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteDomesticConsent4DataInitiationRemittanceInformation };
// ObWriteDomesticConsent4DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
**/
var ObWriteDomesticConsent4DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsent4DataInitiation, _super);
    function ObWriteDomesticConsent4DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteDomesticConsent4DataInitiationCreditorAccount)
    ], ObWriteDomesticConsent4DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorPostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteDomesticConsent4DataInitiation.prototype, "creditorPostalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteDomesticConsent4DataInitiationDebtorAccount)
    ], ObWriteDomesticConsent4DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteDomesticConsent4DataInitiationInstructedAmount)
    ], ObWriteDomesticConsent4DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteDomesticConsent4DataInitiationRemittanceInformation)
    ], ObWriteDomesticConsent4DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteDomesticConsent4DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteDomesticConsent4DataInitiation;
}(SpeakeasyBase));
export { ObWriteDomesticConsent4DataInitiation };
export var ObWriteDomesticConsent4DataReadRefundAccountEnum;
(function (ObWriteDomesticConsent4DataReadRefundAccountEnum) {
    ObWriteDomesticConsent4DataReadRefundAccountEnum["No"] = "No";
    ObWriteDomesticConsent4DataReadRefundAccountEnum["Yes"] = "Yes";
})(ObWriteDomesticConsent4DataReadRefundAccountEnum || (ObWriteDomesticConsent4DataReadRefundAccountEnum = {}));
var ObWriteDomesticConsent4Data = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsent4Data, _super);
    function ObWriteDomesticConsent4Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Authorisation" }),
        __metadata("design:type", ObWriteDomesticConsent4DataAuthorisation)
    ], ObWriteDomesticConsent4Data.prototype, "authorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteDomesticConsent4DataInitiation)
    ], ObWriteDomesticConsent4Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsent4Data.prototype, "readRefundAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SCASupportData" }),
        __metadata("design:type", ObscaSupportData1)
    ], ObWriteDomesticConsent4Data.prototype, "scaSupportData", void 0);
    return ObWriteDomesticConsent4Data;
}(SpeakeasyBase));
export { ObWriteDomesticConsent4Data };
var ObWriteDomesticConsent4 = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsent4, _super);
    function ObWriteDomesticConsent4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteDomesticConsent4Data)
    ], ObWriteDomesticConsent4.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteDomesticConsent4.prototype, "risk", void 0);
    return ObWriteDomesticConsent4;
}(SpeakeasyBase));
export { ObWriteDomesticConsent4 };
