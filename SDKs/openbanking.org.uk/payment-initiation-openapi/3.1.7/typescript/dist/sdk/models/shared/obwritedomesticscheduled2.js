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
import { ObRisk1 } from "./obrisk1";
// ObWriteDomesticScheduled2DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteDomesticScheduled2DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduled2DataInitiationCreditorAccount, _super);
    function ObWriteDomesticScheduled2DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticScheduled2DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticScheduled2DataInitiationCreditorAccount };
// ObWriteDomesticScheduled2DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteDomesticScheduled2DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduled2DataInitiationDebtorAccount, _super);
    function ObWriteDomesticScheduled2DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticScheduled2DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticScheduled2DataInitiationDebtorAccount };
// ObWriteDomesticScheduled2DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteDomesticScheduled2DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduled2DataInitiationInstructedAmount, _super);
    function ObWriteDomesticScheduled2DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteDomesticScheduled2DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteDomesticScheduled2DataInitiationInstructedAmount };
// ObWriteDomesticScheduled2DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteDomesticScheduled2DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduled2DataInitiationRemittanceInformation, _super);
    function ObWriteDomesticScheduled2DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteDomesticScheduled2DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteDomesticScheduled2DataInitiationRemittanceInformation };
// ObWriteDomesticScheduled2DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
**/
var ObWriteDomesticScheduled2DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduled2DataInitiation, _super);
    function ObWriteDomesticScheduled2DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteDomesticScheduled2DataInitiationCreditorAccount)
    ], ObWriteDomesticScheduled2DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorPostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteDomesticScheduled2DataInitiation.prototype, "creditorPostalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteDomesticScheduled2DataInitiationDebtorAccount)
    ], ObWriteDomesticScheduled2DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteDomesticScheduled2DataInitiationInstructedAmount)
    ], ObWriteDomesticScheduled2DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteDomesticScheduled2DataInitiationRemittanceInformation)
    ], ObWriteDomesticScheduled2DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduled2DataInitiation.prototype, "requestedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteDomesticScheduled2DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteDomesticScheduled2DataInitiation;
}(SpeakeasyBase));
export { ObWriteDomesticScheduled2DataInitiation };
var ObWriteDomesticScheduled2Data = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduled2Data, _super);
    function ObWriteDomesticScheduled2Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduled2Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteDomesticScheduled2DataInitiation)
    ], ObWriteDomesticScheduled2Data.prototype, "initiation", void 0);
    return ObWriteDomesticScheduled2Data;
}(SpeakeasyBase));
export { ObWriteDomesticScheduled2Data };
var ObWriteDomesticScheduled2 = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduled2, _super);
    function ObWriteDomesticScheduled2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteDomesticScheduled2Data)
    ], ObWriteDomesticScheduled2.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteDomesticScheduled2.prototype, "risk", void 0);
    return ObWriteDomesticScheduled2;
}(SpeakeasyBase));
export { ObWriteDomesticScheduled2 };
