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
// ObWriteInternationalScheduledResponse6DataCharges
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
var ObWriteInternationalScheduledResponse6DataCharges = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataCharges, _super);
    function ObWriteInternationalScheduledResponse6DataCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObWriteInternationalScheduledResponse6DataCharges.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataCharges.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataCharges.prototype, "type", void 0);
    return ObWriteInternationalScheduledResponse6DataCharges;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataCharges };
export var ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum;
(function (ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum) {
    ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum["Actual"] = "Actual";
    ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum["Agreed"] = "Agreed";
    ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum["Indicative"] = "Indicative";
})(ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum || (ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum = {}));
// ObWriteInternationalScheduledResponse6DataExchangeRateInformation
/**
 * Further detailed information on the exchange rate that has been used in the payment transaction.
**/
var ObWriteInternationalScheduledResponse6DataExchangeRateInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataExchangeRateInformation, _super);
    function ObWriteInternationalScheduledResponse6DataExchangeRateInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataExchangeRateInformation.prototype, "contractIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRate" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalScheduledResponse6DataExchangeRateInformation.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledResponse6DataExchangeRateInformation.prototype, "expirationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataExchangeRateInformation.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnitCurrency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataExchangeRateInformation.prototype, "unitCurrency", void 0);
    return ObWriteInternationalScheduledResponse6DataExchangeRateInformation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataExchangeRateInformation };
// ObWriteInternationalScheduledResponse6DataInitiationCreditor
/**
 * Party to which an amount of money is due.
**/
var ObWriteInternationalScheduledResponse6DataInitiationCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataInitiationCreditor, _super);
    function ObWriteInternationalScheduledResponse6DataInitiationCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalScheduledResponse6DataInitiationCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternationalScheduledResponse6DataInitiationCreditor;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataInitiationCreditor };
// ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount, _super);
    function ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount };
// ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent
/**
 * Financial institution servicing an account for the creditor.
**/
var ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent, _super);
    function ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent.prototype, "schemeName", void 0);
    return ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent };
// ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount, _super);
    function ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount };
export var ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum;
(function (ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum) {
    ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum["Actual"] = "Actual";
    ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum["Agreed"] = "Agreed";
    ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum["Indicative"] = "Indicative";
})(ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum || (ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum = {}));
// ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation
/**
 * Provides details on the currency exchange rate and contract.
**/
var ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation, _super);
    function ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation.prototype, "contractIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRate" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnitCurrency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation.prototype, "unitCurrency", void 0);
    return ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation };
// ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount, _super);
    function ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount };
export var ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum;
(function (ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum) {
    ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum["Normal"] = "Normal";
    ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum["Urgent"] = "Urgent";
})(ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum || (ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum = {}));
// ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation, _super);
    function ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation };
// ObWriteInternationalScheduledResponse6DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
**/
var ObWriteInternationalScheduledResponse6DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataInitiation, _super);
    function ObWriteInternationalScheduledResponse6DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6DataInitiationCreditor)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "creditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAgent" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "currencyOfTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "destinationCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "exchangeRateInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "extendedPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionPriority" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "instructionPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Purpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "requestedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteInternationalScheduledResponse6DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteInternationalScheduledResponse6DataInitiation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataInitiation };
export var ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum;
(function (ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum) {
    ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum["Authorised"] = "Authorised";
    ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum["AwaitingFurtherAuthorisation"] = "AwaitingFurtherAuthorisation";
    ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum["Rejected"] = "Rejected";
})(ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum || (ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum = {}));
// ObWriteInternationalScheduledResponse6DataMultiAuthorisation
/**
 * The multiple authorisation flow response from the ASPSP.
**/
var ObWriteInternationalScheduledResponse6DataMultiAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataMultiAuthorisation, _super);
    function ObWriteInternationalScheduledResponse6DataMultiAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledResponse6DataMultiAuthorisation.prototype, "expirationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledResponse6DataMultiAuthorisation.prototype, "lastUpdateDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberReceived" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalScheduledResponse6DataMultiAuthorisation.prototype, "numberReceived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberRequired" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalScheduledResponse6DataMultiAuthorisation.prototype, "numberRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataMultiAuthorisation.prototype, "status", void 0);
    return ObWriteInternationalScheduledResponse6DataMultiAuthorisation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataMultiAuthorisation };
// ObWriteInternationalScheduledResponse6DataRefundAccount
/**
 * Provides the details to identify an account.
**/
var ObWriteInternationalScheduledResponse6DataRefundAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataRefundAccount, _super);
    function ObWriteInternationalScheduledResponse6DataRefundAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataRefundAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataRefundAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataRefundAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataRefundAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalScheduledResponse6DataRefundAccount;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataRefundAccount };
// ObWriteInternationalScheduledResponse6DataRefundAgent
/**
 * Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
**/
var ObWriteInternationalScheduledResponse6DataRefundAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataRefundAgent, _super);
    function ObWriteInternationalScheduledResponse6DataRefundAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataRefundAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataRefundAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalScheduledResponse6DataRefundAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataRefundAgent.prototype, "schemeName", void 0);
    return ObWriteInternationalScheduledResponse6DataRefundAgent;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataRefundAgent };
// ObWriteInternationalScheduledResponse6DataRefundCreditor
/**
 * Set of elements used to identify a person or an organisation.
**/
var ObWriteInternationalScheduledResponse6DataRefundCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataRefundCreditor, _super);
    function ObWriteInternationalScheduledResponse6DataRefundCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6DataRefundCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalScheduledResponse6DataRefundCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternationalScheduledResponse6DataRefundCreditor;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataRefundCreditor };
var ObWriteInternationalScheduledResponse6DataRefund = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6DataRefund, _super);
    function ObWriteInternationalScheduledResponse6DataRefund() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Account" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6DataRefundAccount)
    ], ObWriteInternationalScheduledResponse6DataRefund.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Agent" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6DataRefundAgent)
    ], ObWriteInternationalScheduledResponse6DataRefund.prototype, "agent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6DataRefundCreditor)
    ], ObWriteInternationalScheduledResponse6DataRefund.prototype, "creditor", void 0);
    return ObWriteInternationalScheduledResponse6DataRefund;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6DataRefund };
export var ObWriteInternationalScheduledResponse6DataStatusEnum;
(function (ObWriteInternationalScheduledResponse6DataStatusEnum) {
    ObWriteInternationalScheduledResponse6DataStatusEnum["Cancelled"] = "Cancelled";
    ObWriteInternationalScheduledResponse6DataStatusEnum["InitiationCompleted"] = "InitiationCompleted";
    ObWriteInternationalScheduledResponse6DataStatusEnum["InitiationFailed"] = "InitiationFailed";
    ObWriteInternationalScheduledResponse6DataStatusEnum["InitiationPending"] = "InitiationPending";
})(ObWriteInternationalScheduledResponse6DataStatusEnum || (ObWriteInternationalScheduledResponse6DataStatusEnum = {}));
var ObWriteInternationalScheduledResponse6Data = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6Data, _super);
    function ObWriteInternationalScheduledResponse6Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteInternationalScheduledResponse6DataCharges }),
        __metadata("design:type", Array)
    ], ObWriteInternationalScheduledResponse6Data.prototype, "charges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledResponse6Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Debtor" }),
        __metadata("design:type", ObCashAccountDebtor4)
    ], ObWriteInternationalScheduledResponse6Data.prototype, "debtor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6DataExchangeRateInformation)
    ], ObWriteInternationalScheduledResponse6Data.prototype, "exchangeRateInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledResponse6Data.prototype, "expectedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedSettlementDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledResponse6Data.prototype, "expectedSettlementDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6DataInitiation)
    ], ObWriteInternationalScheduledResponse6Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InternationalScheduledPaymentId" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6Data.prototype, "internationalScheduledPaymentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiAuthorisation" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6DataMultiAuthorisation)
    ], ObWriteInternationalScheduledResponse6Data.prototype, "multiAuthorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Refund" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6DataRefund)
    ], ObWriteInternationalScheduledResponse6Data.prototype, "refund", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledResponse6Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledResponse6Data.prototype, "statusUpdateDateTime", void 0);
    return ObWriteInternationalScheduledResponse6Data;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6Data };
var ObWriteInternationalScheduledResponse6 = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledResponse6, _super);
    function ObWriteInternationalScheduledResponse6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteInternationalScheduledResponse6Data)
    ], ObWriteInternationalScheduledResponse6.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteInternationalScheduledResponse6.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteInternationalScheduledResponse6.prototype, "meta", void 0);
    return ObWriteInternationalScheduledResponse6;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledResponse6 };
