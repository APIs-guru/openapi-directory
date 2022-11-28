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
// ObWriteInternationalResponse5DataCharges
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
var ObWriteInternationalResponse5DataCharges = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataCharges, _super);
    function ObWriteInternationalResponse5DataCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObWriteInternationalResponse5DataCharges.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataCharges.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataCharges.prototype, "type", void 0);
    return ObWriteInternationalResponse5DataCharges;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataCharges };
export var ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum;
(function (ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum) {
    ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum["Actual"] = "Actual";
    ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum["Agreed"] = "Agreed";
    ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum["Indicative"] = "Indicative";
})(ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum || (ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum = {}));
// ObWriteInternationalResponse5DataExchangeRateInformation
/**
 * Further detailed information on the exchange rate that has been used in the payment transaction.
**/
var ObWriteInternationalResponse5DataExchangeRateInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataExchangeRateInformation, _super);
    function ObWriteInternationalResponse5DataExchangeRateInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataExchangeRateInformation.prototype, "contractIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRate" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalResponse5DataExchangeRateInformation.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalResponse5DataExchangeRateInformation.prototype, "expirationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataExchangeRateInformation.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnitCurrency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataExchangeRateInformation.prototype, "unitCurrency", void 0);
    return ObWriteInternationalResponse5DataExchangeRateInformation;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataExchangeRateInformation };
// ObWriteInternationalResponse5DataInitiationCreditor
/**
 * Party to which an amount of money is due.
**/
var ObWriteInternationalResponse5DataInitiationCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataInitiationCreditor, _super);
    function ObWriteInternationalResponse5DataInitiationCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalResponse5DataInitiationCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternationalResponse5DataInitiationCreditor;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataInitiationCreditor };
// ObWriteInternationalResponse5DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteInternationalResponse5DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataInitiationCreditorAccount, _super);
    function ObWriteInternationalResponse5DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalResponse5DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataInitiationCreditorAccount };
// ObWriteInternationalResponse5DataInitiationCreditorAgent
/**
 * Financial institution servicing an account for the creditor.
**/
var ObWriteInternationalResponse5DataInitiationCreditorAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataInitiationCreditorAgent, _super);
    function ObWriteInternationalResponse5DataInitiationCreditorAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationCreditorAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationCreditorAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalResponse5DataInitiationCreditorAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationCreditorAgent.prototype, "schemeName", void 0);
    return ObWriteInternationalResponse5DataInitiationCreditorAgent;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataInitiationCreditorAgent };
// ObWriteInternationalResponse5DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteInternationalResponse5DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataInitiationDebtorAccount, _super);
    function ObWriteInternationalResponse5DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalResponse5DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataInitiationDebtorAccount };
export var ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum;
(function (ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum) {
    ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum["Actual"] = "Actual";
    ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum["Agreed"] = "Agreed";
    ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum["Indicative"] = "Indicative";
})(ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum || (ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum = {}));
// ObWriteInternationalResponse5DataInitiationExchangeRateInformation
/**
 * Provides details on the currency exchange rate and contract.
**/
var ObWriteInternationalResponse5DataInitiationExchangeRateInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataInitiationExchangeRateInformation, _super);
    function ObWriteInternationalResponse5DataInitiationExchangeRateInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationExchangeRateInformation.prototype, "contractIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRate" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalResponse5DataInitiationExchangeRateInformation.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationExchangeRateInformation.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnitCurrency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationExchangeRateInformation.prototype, "unitCurrency", void 0);
    return ObWriteInternationalResponse5DataInitiationExchangeRateInformation;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataInitiationExchangeRateInformation };
// ObWriteInternationalResponse5DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteInternationalResponse5DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataInitiationInstructedAmount, _super);
    function ObWriteInternationalResponse5DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteInternationalResponse5DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataInitiationInstructedAmount };
export var ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum;
(function (ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum) {
    ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum["Normal"] = "Normal";
    ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum["Urgent"] = "Urgent";
})(ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum || (ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum = {}));
// ObWriteInternationalResponse5DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteInternationalResponse5DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataInitiationRemittanceInformation, _super);
    function ObWriteInternationalResponse5DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteInternationalResponse5DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataInitiationRemittanceInformation };
// ObWriteInternationalResponse5DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
var ObWriteInternationalResponse5DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataInitiation, _super);
    function ObWriteInternationalResponse5DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternationalResponse5DataInitiationCreditor)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "creditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteInternationalResponse5DataInitiationCreditorAccount)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAgent" }),
        __metadata("design:type", ObWriteInternationalResponse5DataInitiationCreditorAgent)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "currencyOfTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteInternationalResponse5DataInitiationDebtorAccount)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "destinationCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" }),
        __metadata("design:type", ObWriteInternationalResponse5DataInitiationExchangeRateInformation)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "exchangeRateInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "extendedPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteInternationalResponse5DataInitiationInstructedAmount)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionPriority" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "instructionPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Purpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteInternationalResponse5DataInitiationRemittanceInformation)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteInternationalResponse5DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteInternationalResponse5DataInitiation;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataInitiation };
export var ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum;
(function (ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum) {
    ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum["Authorised"] = "Authorised";
    ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum["AwaitingFurtherAuthorisation"] = "AwaitingFurtherAuthorisation";
    ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum["Rejected"] = "Rejected";
})(ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum || (ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum = {}));
// ObWriteInternationalResponse5DataMultiAuthorisation
/**
 * The multiple authorisation flow response from the ASPSP.
**/
var ObWriteInternationalResponse5DataMultiAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataMultiAuthorisation, _super);
    function ObWriteInternationalResponse5DataMultiAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalResponse5DataMultiAuthorisation.prototype, "expirationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalResponse5DataMultiAuthorisation.prototype, "lastUpdateDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberReceived" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalResponse5DataMultiAuthorisation.prototype, "numberReceived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberRequired" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalResponse5DataMultiAuthorisation.prototype, "numberRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataMultiAuthorisation.prototype, "status", void 0);
    return ObWriteInternationalResponse5DataMultiAuthorisation;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataMultiAuthorisation };
// ObWriteInternationalResponse5DataRefundAccount
/**
 * Provides the details to identify an account.
**/
var ObWriteInternationalResponse5DataRefundAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataRefundAccount, _super);
    function ObWriteInternationalResponse5DataRefundAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataRefundAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataRefundAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataRefundAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataRefundAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalResponse5DataRefundAccount;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataRefundAccount };
// ObWriteInternationalResponse5DataRefundAgent
/**
 * Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
**/
var ObWriteInternationalResponse5DataRefundAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataRefundAgent, _super);
    function ObWriteInternationalResponse5DataRefundAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataRefundAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataRefundAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalResponse5DataRefundAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataRefundAgent.prototype, "schemeName", void 0);
    return ObWriteInternationalResponse5DataRefundAgent;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataRefundAgent };
// ObWriteInternationalResponse5DataRefundCreditor
/**
 * Set of elements used to identify a person or an organisation.
**/
var ObWriteInternationalResponse5DataRefundCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataRefundCreditor, _super);
    function ObWriteInternationalResponse5DataRefundCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5DataRefundCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalResponse5DataRefundCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternationalResponse5DataRefundCreditor;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataRefundCreditor };
var ObWriteInternationalResponse5DataRefund = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5DataRefund, _super);
    function ObWriteInternationalResponse5DataRefund() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Account" }),
        __metadata("design:type", ObWriteInternationalResponse5DataRefundAccount)
    ], ObWriteInternationalResponse5DataRefund.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Agent" }),
        __metadata("design:type", ObWriteInternationalResponse5DataRefundAgent)
    ], ObWriteInternationalResponse5DataRefund.prototype, "agent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternationalResponse5DataRefundCreditor)
    ], ObWriteInternationalResponse5DataRefund.prototype, "creditor", void 0);
    return ObWriteInternationalResponse5DataRefund;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5DataRefund };
export var ObWriteInternationalResponse5DataStatusEnum;
(function (ObWriteInternationalResponse5DataStatusEnum) {
    ObWriteInternationalResponse5DataStatusEnum["AcceptedCreditSettlementCompleted"] = "AcceptedCreditSettlementCompleted";
    ObWriteInternationalResponse5DataStatusEnum["AcceptedSettlementCompleted"] = "AcceptedSettlementCompleted";
    ObWriteInternationalResponse5DataStatusEnum["AcceptedSettlementInProcess"] = "AcceptedSettlementInProcess";
    ObWriteInternationalResponse5DataStatusEnum["AcceptedWithoutPosting"] = "AcceptedWithoutPosting";
    ObWriteInternationalResponse5DataStatusEnum["Pending"] = "Pending";
    ObWriteInternationalResponse5DataStatusEnum["Rejected"] = "Rejected";
})(ObWriteInternationalResponse5DataStatusEnum || (ObWriteInternationalResponse5DataStatusEnum = {}));
var ObWriteInternationalResponse5Data = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5Data, _super);
    function ObWriteInternationalResponse5Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteInternationalResponse5DataCharges }),
        __metadata("design:type", Array)
    ], ObWriteInternationalResponse5Data.prototype, "charges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalResponse5Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Debtor" }),
        __metadata("design:type", ObCashAccountDebtor4)
    ], ObWriteInternationalResponse5Data.prototype, "debtor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" }),
        __metadata("design:type", ObWriteInternationalResponse5DataExchangeRateInformation)
    ], ObWriteInternationalResponse5Data.prototype, "exchangeRateInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalResponse5Data.prototype, "expectedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedSettlementDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalResponse5Data.prototype, "expectedSettlementDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteInternationalResponse5DataInitiation)
    ], ObWriteInternationalResponse5Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InternationalPaymentId" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5Data.prototype, "internationalPaymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiAuthorisation" }),
        __metadata("design:type", ObWriteInternationalResponse5DataMultiAuthorisation)
    ], ObWriteInternationalResponse5Data.prototype, "multiAuthorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Refund" }),
        __metadata("design:type", ObWriteInternationalResponse5DataRefund)
    ], ObWriteInternationalResponse5Data.prototype, "refund", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteInternationalResponse5Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalResponse5Data.prototype, "statusUpdateDateTime", void 0);
    return ObWriteInternationalResponse5Data;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5Data };
var ObWriteInternationalResponse5 = /** @class */ (function (_super) {
    __extends(ObWriteInternationalResponse5, _super);
    function ObWriteInternationalResponse5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteInternationalResponse5Data)
    ], ObWriteInternationalResponse5.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteInternationalResponse5.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteInternationalResponse5.prototype, "meta", void 0);
    return ObWriteInternationalResponse5;
}(SpeakeasyBase));
export { ObWriteInternationalResponse5 };
