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
// ObWriteDomesticResponse5DataCharges
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
var ObWriteDomesticResponse5DataCharges = /** @class */ (function (_super) {
    __extends(ObWriteDomesticResponse5DataCharges, _super);
    function ObWriteDomesticResponse5DataCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObWriteDomesticResponse5DataCharges.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataCharges.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataCharges.prototype, "type", void 0);
    return ObWriteDomesticResponse5DataCharges;
}(SpeakeasyBase));
export { ObWriteDomesticResponse5DataCharges };
// ObWriteDomesticResponse5DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteDomesticResponse5DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticResponse5DataInitiationCreditorAccount, _super);
    function ObWriteDomesticResponse5DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticResponse5DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticResponse5DataInitiationCreditorAccount };
// ObWriteDomesticResponse5DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteDomesticResponse5DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticResponse5DataInitiationDebtorAccount, _super);
    function ObWriteDomesticResponse5DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticResponse5DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticResponse5DataInitiationDebtorAccount };
// ObWriteDomesticResponse5DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteDomesticResponse5DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticResponse5DataInitiationInstructedAmount, _super);
    function ObWriteDomesticResponse5DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteDomesticResponse5DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteDomesticResponse5DataInitiationInstructedAmount };
// ObWriteDomesticResponse5DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteDomesticResponse5DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticResponse5DataInitiationRemittanceInformation, _super);
    function ObWriteDomesticResponse5DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteDomesticResponse5DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteDomesticResponse5DataInitiationRemittanceInformation };
// ObWriteDomesticResponse5DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
**/
var ObWriteDomesticResponse5DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticResponse5DataInitiation, _super);
    function ObWriteDomesticResponse5DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteDomesticResponse5DataInitiationCreditorAccount)
    ], ObWriteDomesticResponse5DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorPostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteDomesticResponse5DataInitiation.prototype, "creditorPostalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteDomesticResponse5DataInitiationDebtorAccount)
    ], ObWriteDomesticResponse5DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteDomesticResponse5DataInitiationInstructedAmount)
    ], ObWriteDomesticResponse5DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteDomesticResponse5DataInitiationRemittanceInformation)
    ], ObWriteDomesticResponse5DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteDomesticResponse5DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteDomesticResponse5DataInitiation;
}(SpeakeasyBase));
export { ObWriteDomesticResponse5DataInitiation };
export var ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum;
(function (ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum) {
    ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum["Authorised"] = "Authorised";
    ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum["AwaitingFurtherAuthorisation"] = "AwaitingFurtherAuthorisation";
    ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum["Rejected"] = "Rejected";
})(ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum || (ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum = {}));
// ObWriteDomesticResponse5DataMultiAuthorisation
/**
 * The multiple authorisation flow response from the ASPSP.
**/
var ObWriteDomesticResponse5DataMultiAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticResponse5DataMultiAuthorisation, _super);
    function ObWriteDomesticResponse5DataMultiAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticResponse5DataMultiAuthorisation.prototype, "expirationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticResponse5DataMultiAuthorisation.prototype, "lastUpdateDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberReceived" }),
        __metadata("design:type", Number)
    ], ObWriteDomesticResponse5DataMultiAuthorisation.prototype, "numberReceived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberRequired" }),
        __metadata("design:type", Number)
    ], ObWriteDomesticResponse5DataMultiAuthorisation.prototype, "numberRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataMultiAuthorisation.prototype, "status", void 0);
    return ObWriteDomesticResponse5DataMultiAuthorisation;
}(SpeakeasyBase));
export { ObWriteDomesticResponse5DataMultiAuthorisation };
// ObWriteDomesticResponse5DataRefundAccount
/**
 * Provides the details to identify an account.
**/
var ObWriteDomesticResponse5DataRefundAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticResponse5DataRefundAccount, _super);
    function ObWriteDomesticResponse5DataRefundAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataRefundAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataRefundAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataRefundAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5DataRefundAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticResponse5DataRefundAccount;
}(SpeakeasyBase));
export { ObWriteDomesticResponse5DataRefundAccount };
// ObWriteDomesticResponse5DataRefund
/**
 * Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.
**/
var ObWriteDomesticResponse5DataRefund = /** @class */ (function (_super) {
    __extends(ObWriteDomesticResponse5DataRefund, _super);
    function ObWriteDomesticResponse5DataRefund() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Account" }),
        __metadata("design:type", ObWriteDomesticResponse5DataRefundAccount)
    ], ObWriteDomesticResponse5DataRefund.prototype, "account", void 0);
    return ObWriteDomesticResponse5DataRefund;
}(SpeakeasyBase));
export { ObWriteDomesticResponse5DataRefund };
export var ObWriteDomesticResponse5DataStatusEnum;
(function (ObWriteDomesticResponse5DataStatusEnum) {
    ObWriteDomesticResponse5DataStatusEnum["AcceptedCreditSettlementCompleted"] = "AcceptedCreditSettlementCompleted";
    ObWriteDomesticResponse5DataStatusEnum["AcceptedSettlementCompleted"] = "AcceptedSettlementCompleted";
    ObWriteDomesticResponse5DataStatusEnum["AcceptedSettlementInProcess"] = "AcceptedSettlementInProcess";
    ObWriteDomesticResponse5DataStatusEnum["AcceptedWithoutPosting"] = "AcceptedWithoutPosting";
    ObWriteDomesticResponse5DataStatusEnum["Pending"] = "Pending";
    ObWriteDomesticResponse5DataStatusEnum["Rejected"] = "Rejected";
})(ObWriteDomesticResponse5DataStatusEnum || (ObWriteDomesticResponse5DataStatusEnum = {}));
var ObWriteDomesticResponse5Data = /** @class */ (function (_super) {
    __extends(ObWriteDomesticResponse5Data, _super);
    function ObWriteDomesticResponse5Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteDomesticResponse5DataCharges }),
        __metadata("design:type", Array)
    ], ObWriteDomesticResponse5Data.prototype, "charges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticResponse5Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Debtor" }),
        __metadata("design:type", ObCashAccountDebtor4)
    ], ObWriteDomesticResponse5Data.prototype, "debtor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomesticPaymentId" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5Data.prototype, "domesticPaymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticResponse5Data.prototype, "expectedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedSettlementDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticResponse5Data.prototype, "expectedSettlementDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteDomesticResponse5DataInitiation)
    ], ObWriteDomesticResponse5Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiAuthorisation" }),
        __metadata("design:type", ObWriteDomesticResponse5DataMultiAuthorisation)
    ], ObWriteDomesticResponse5Data.prototype, "multiAuthorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Refund" }),
        __metadata("design:type", ObWriteDomesticResponse5DataRefund)
    ], ObWriteDomesticResponse5Data.prototype, "refund", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteDomesticResponse5Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticResponse5Data.prototype, "statusUpdateDateTime", void 0);
    return ObWriteDomesticResponse5Data;
}(SpeakeasyBase));
export { ObWriteDomesticResponse5Data };
var ObWriteDomesticResponse5 = /** @class */ (function (_super) {
    __extends(ObWriteDomesticResponse5, _super);
    function ObWriteDomesticResponse5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteDomesticResponse5Data)
    ], ObWriteDomesticResponse5.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteDomesticResponse5.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteDomesticResponse5.prototype, "meta", void 0);
    return ObWriteDomesticResponse5;
}(SpeakeasyBase));
export { ObWriteDomesticResponse5 };
