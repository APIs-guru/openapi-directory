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
import { ObActiveOrHistoricCurrencyAndAmount } from "./obactiveorhistoriccurrencyandamount";
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObCashAccountDebtor4 } from "./obcashaccountdebtor4";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { Links } from "./links";
import { Meta } from "./meta";
// ObWriteDomesticScheduledResponse5DataCharges
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
var ObWriteDomesticScheduledResponse5DataCharges = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledResponse5DataCharges, _super);
    function ObWriteDomesticScheduledResponse5DataCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObWriteDomesticScheduledResponse5DataCharges.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataCharges.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataCharges.prototype, "type", void 0);
    return ObWriteDomesticScheduledResponse5DataCharges;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledResponse5DataCharges };
// ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount, _super);
    function ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount };
// ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount, _super);
    function ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount };
// ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount, _super);
    function ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount };
// ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation, _super);
    function ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation };
// ObWriteDomesticScheduledResponse5DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
**/
var ObWriteDomesticScheduledResponse5DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledResponse5DataInitiation, _super);
    function ObWriteDomesticScheduledResponse5DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount)
    ], ObWriteDomesticScheduledResponse5DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorPostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteDomesticScheduledResponse5DataInitiation.prototype, "creditorPostalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount)
    ], ObWriteDomesticScheduledResponse5DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount)
    ], ObWriteDomesticScheduledResponse5DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation)
    ], ObWriteDomesticScheduledResponse5DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledResponse5DataInitiation.prototype, "requestedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteDomesticScheduledResponse5DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteDomesticScheduledResponse5DataInitiation;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledResponse5DataInitiation };
export var ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum;
(function (ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum) {
    ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum["Authorised"] = "Authorised";
    ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum["AwaitingFurtherAuthorisation"] = "AwaitingFurtherAuthorisation";
    ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum["Rejected"] = "Rejected";
})(ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum || (ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum = {}));
// ObWriteDomesticScheduledResponse5DataMultiAuthorisation
/**
 * The multiple authorisation flow response from the ASPSP.
**/
var ObWriteDomesticScheduledResponse5DataMultiAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledResponse5DataMultiAuthorisation, _super);
    function ObWriteDomesticScheduledResponse5DataMultiAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledResponse5DataMultiAuthorisation.prototype, "expirationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledResponse5DataMultiAuthorisation.prototype, "lastUpdateDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberReceived" }),
        __metadata("design:type", Number)
    ], ObWriteDomesticScheduledResponse5DataMultiAuthorisation.prototype, "numberReceived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberRequired" }),
        __metadata("design:type", Number)
    ], ObWriteDomesticScheduledResponse5DataMultiAuthorisation.prototype, "numberRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataMultiAuthorisation.prototype, "status", void 0);
    return ObWriteDomesticScheduledResponse5DataMultiAuthorisation;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledResponse5DataMultiAuthorisation };
// ObWriteDomesticScheduledResponse5DataRefundAccount
/**
 * Provides the details to identify an account.
**/
var ObWriteDomesticScheduledResponse5DataRefundAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledResponse5DataRefundAccount, _super);
    function ObWriteDomesticScheduledResponse5DataRefundAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataRefundAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataRefundAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataRefundAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5DataRefundAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticScheduledResponse5DataRefundAccount;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledResponse5DataRefundAccount };
// ObWriteDomesticScheduledResponse5DataRefund
/**
 * Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.
**/
var ObWriteDomesticScheduledResponse5DataRefund = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledResponse5DataRefund, _super);
    function ObWriteDomesticScheduledResponse5DataRefund() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Account" }),
        __metadata("design:type", ObWriteDomesticScheduledResponse5DataRefundAccount)
    ], ObWriteDomesticScheduledResponse5DataRefund.prototype, "account", void 0);
    return ObWriteDomesticScheduledResponse5DataRefund;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledResponse5DataRefund };
export var ObWriteDomesticScheduledResponse5DataStatusEnum;
(function (ObWriteDomesticScheduledResponse5DataStatusEnum) {
    ObWriteDomesticScheduledResponse5DataStatusEnum["Cancelled"] = "Cancelled";
    ObWriteDomesticScheduledResponse5DataStatusEnum["InitiationCompleted"] = "InitiationCompleted";
    ObWriteDomesticScheduledResponse5DataStatusEnum["InitiationFailed"] = "InitiationFailed";
    ObWriteDomesticScheduledResponse5DataStatusEnum["InitiationPending"] = "InitiationPending";
})(ObWriteDomesticScheduledResponse5DataStatusEnum || (ObWriteDomesticScheduledResponse5DataStatusEnum = {}));
var ObWriteDomesticScheduledResponse5Data = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledResponse5Data, _super);
    function ObWriteDomesticScheduledResponse5Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteDomesticScheduledResponse5DataCharges }),
        __metadata("design:type", Array)
    ], ObWriteDomesticScheduledResponse5Data.prototype, "charges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledResponse5Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Debtor" }),
        __metadata("design:type", ObCashAccountDebtor4)
    ], ObWriteDomesticScheduledResponse5Data.prototype, "debtor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomesticScheduledPaymentId" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5Data.prototype, "domesticScheduledPaymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledResponse5Data.prototype, "expectedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedSettlementDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledResponse5Data.prototype, "expectedSettlementDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteDomesticScheduledResponse5DataInitiation)
    ], ObWriteDomesticScheduledResponse5Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiAuthorisation" }),
        __metadata("design:type", ObWriteDomesticScheduledResponse5DataMultiAuthorisation)
    ], ObWriteDomesticScheduledResponse5Data.prototype, "multiAuthorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Refund" }),
        __metadata("design:type", ObWriteDomesticScheduledResponse5DataRefund)
    ], ObWriteDomesticScheduledResponse5Data.prototype, "refund", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledResponse5Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledResponse5Data.prototype, "statusUpdateDateTime", void 0);
    return ObWriteDomesticScheduledResponse5Data;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledResponse5Data };
var ObWriteDomesticScheduledResponse5 = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledResponse5, _super);
    function ObWriteDomesticScheduledResponse5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteDomesticScheduledResponse5Data)
    ], ObWriteDomesticScheduledResponse5.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteDomesticScheduledResponse5.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteDomesticScheduledResponse5.prototype, "meta", void 0);
    return ObWriteDomesticScheduledResponse5;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledResponse5 };
