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
import { ObscaSupportData1 } from "./obscasupportdata1";
import { Links } from "./links";
import { Meta } from "./meta";
import { ObRisk1 } from "./obrisk1";
export var ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum;
(function (ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum) {
    ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum["Any"] = "Any";
    ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum["Single"] = "Single";
})(ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum || (ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum = {}));
// ObWriteInternationalConsentResponse6DataAuthorisation
/**
 * The authorisation type request from the TPP.
**/
var ObWriteInternationalConsentResponse6DataAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsentResponse6DataAuthorisation, _super);
    function ObWriteInternationalConsentResponse6DataAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataAuthorisation.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalConsentResponse6DataAuthorisation.prototype, "completionDateTime", void 0);
    return ObWriteInternationalConsentResponse6DataAuthorisation;
}(SpeakeasyBase));
export { ObWriteInternationalConsentResponse6DataAuthorisation };
// ObWriteInternationalConsentResponse6DataCharges
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
var ObWriteInternationalConsentResponse6DataCharges = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsentResponse6DataCharges, _super);
    function ObWriteInternationalConsentResponse6DataCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObWriteInternationalConsentResponse6DataCharges.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataCharges.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataCharges.prototype, "type", void 0);
    return ObWriteInternationalConsentResponse6DataCharges;
}(SpeakeasyBase));
export { ObWriteInternationalConsentResponse6DataCharges };
export var ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum;
(function (ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum) {
    ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum["Actual"] = "Actual";
    ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum["Agreed"] = "Agreed";
    ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum["Indicative"] = "Indicative";
})(ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum || (ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum = {}));
// ObWriteInternationalConsentResponse6DataExchangeRateInformation
/**
 * Further detailed information on the exchange rate that has been used in the payment transaction.
**/
var ObWriteInternationalConsentResponse6DataExchangeRateInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsentResponse6DataExchangeRateInformation, _super);
    function ObWriteInternationalConsentResponse6DataExchangeRateInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataExchangeRateInformation.prototype, "contractIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRate" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalConsentResponse6DataExchangeRateInformation.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalConsentResponse6DataExchangeRateInformation.prototype, "expirationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataExchangeRateInformation.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnitCurrency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataExchangeRateInformation.prototype, "unitCurrency", void 0);
    return ObWriteInternationalConsentResponse6DataExchangeRateInformation;
}(SpeakeasyBase));
export { ObWriteInternationalConsentResponse6DataExchangeRateInformation };
// ObWriteInternationalConsentResponse6DataInitiationCreditor
/**
 * Party to which an amount of money is due.
**/
var ObWriteInternationalConsentResponse6DataInitiationCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsentResponse6DataInitiationCreditor, _super);
    function ObWriteInternationalConsentResponse6DataInitiationCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalConsentResponse6DataInitiationCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternationalConsentResponse6DataInitiationCreditor;
}(SpeakeasyBase));
export { ObWriteInternationalConsentResponse6DataInitiationCreditor };
// ObWriteInternationalConsentResponse6DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteInternationalConsentResponse6DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsentResponse6DataInitiationCreditorAccount, _super);
    function ObWriteInternationalConsentResponse6DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalConsentResponse6DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalConsentResponse6DataInitiationCreditorAccount };
// ObWriteInternationalConsentResponse6DataInitiationCreditorAgent
/**
 * Financial institution servicing an account for the creditor.
**/
var ObWriteInternationalConsentResponse6DataInitiationCreditorAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsentResponse6DataInitiationCreditorAgent, _super);
    function ObWriteInternationalConsentResponse6DataInitiationCreditorAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationCreditorAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationCreditorAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalConsentResponse6DataInitiationCreditorAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationCreditorAgent.prototype, "schemeName", void 0);
    return ObWriteInternationalConsentResponse6DataInitiationCreditorAgent;
}(SpeakeasyBase));
export { ObWriteInternationalConsentResponse6DataInitiationCreditorAgent };
// ObWriteInternationalConsentResponse6DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteInternationalConsentResponse6DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsentResponse6DataInitiationDebtorAccount, _super);
    function ObWriteInternationalConsentResponse6DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalConsentResponse6DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalConsentResponse6DataInitiationDebtorAccount };
export var ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum;
(function (ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum) {
    ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum["Actual"] = "Actual";
    ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum["Agreed"] = "Agreed";
    ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum["Indicative"] = "Indicative";
})(ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum || (ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum = {}));
// ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation
/**
 * Provides details on the currency exchange rate and contract.
**/
var ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation, _super);
    function ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation.prototype, "contractIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRate" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnitCurrency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation.prototype, "unitCurrency", void 0);
    return ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation;
}(SpeakeasyBase));
export { ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation };
// ObWriteInternationalConsentResponse6DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteInternationalConsentResponse6DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsentResponse6DataInitiationInstructedAmount, _super);
    function ObWriteInternationalConsentResponse6DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteInternationalConsentResponse6DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteInternationalConsentResponse6DataInitiationInstructedAmount };
export var ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum;
(function (ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum) {
    ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum["Normal"] = "Normal";
    ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum["Urgent"] = "Urgent";
})(ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum || (ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum = {}));
// ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation, _super);
    function ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation };
// ObWriteInternationalConsentResponse6DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
var ObWriteInternationalConsentResponse6DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsentResponse6DataInitiation, _super);
    function ObWriteInternationalConsentResponse6DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternationalConsentResponse6DataInitiationCreditor)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "creditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteInternationalConsentResponse6DataInitiationCreditorAccount)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAgent" }),
        __metadata("design:type", ObWriteInternationalConsentResponse6DataInitiationCreditorAgent)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "currencyOfTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteInternationalConsentResponse6DataInitiationDebtorAccount)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "destinationCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" }),
        __metadata("design:type", ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "exchangeRateInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "extendedPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteInternationalConsentResponse6DataInitiationInstructedAmount)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionPriority" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "instructionPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Purpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteInternationalConsentResponse6DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteInternationalConsentResponse6DataInitiation;
}(SpeakeasyBase));
export { ObWriteInternationalConsentResponse6DataInitiation };
export var ObWriteInternationalConsentResponse6DataReadRefundAccountEnum;
(function (ObWriteInternationalConsentResponse6DataReadRefundAccountEnum) {
    ObWriteInternationalConsentResponse6DataReadRefundAccountEnum["No"] = "No";
    ObWriteInternationalConsentResponse6DataReadRefundAccountEnum["Yes"] = "Yes";
})(ObWriteInternationalConsentResponse6DataReadRefundAccountEnum || (ObWriteInternationalConsentResponse6DataReadRefundAccountEnum = {}));
export var ObWriteInternationalConsentResponse6DataStatusEnum;
(function (ObWriteInternationalConsentResponse6DataStatusEnum) {
    ObWriteInternationalConsentResponse6DataStatusEnum["Authorised"] = "Authorised";
    ObWriteInternationalConsentResponse6DataStatusEnum["AwaitingAuthorisation"] = "AwaitingAuthorisation";
    ObWriteInternationalConsentResponse6DataStatusEnum["Consumed"] = "Consumed";
    ObWriteInternationalConsentResponse6DataStatusEnum["Rejected"] = "Rejected";
})(ObWriteInternationalConsentResponse6DataStatusEnum || (ObWriteInternationalConsentResponse6DataStatusEnum = {}));
var ObWriteInternationalConsentResponse6Data = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsentResponse6Data, _super);
    function ObWriteInternationalConsentResponse6Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Authorisation" }),
        __metadata("design:type", ObWriteInternationalConsentResponse6DataAuthorisation)
    ], ObWriteInternationalConsentResponse6Data.prototype, "authorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteInternationalConsentResponse6DataCharges }),
        __metadata("design:type", Array)
    ], ObWriteInternationalConsentResponse6Data.prototype, "charges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalConsentResponse6Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CutOffDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalConsentResponse6Data.prototype, "cutOffDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Debtor" }),
        __metadata("design:type", ObCashAccountDebtor4)
    ], ObWriteInternationalConsentResponse6Data.prototype, "debtor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" }),
        __metadata("design:type", ObWriteInternationalConsentResponse6DataExchangeRateInformation)
    ], ObWriteInternationalConsentResponse6Data.prototype, "exchangeRateInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalConsentResponse6Data.prototype, "expectedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedSettlementDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalConsentResponse6Data.prototype, "expectedSettlementDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteInternationalConsentResponse6DataInitiation)
    ], ObWriteInternationalConsentResponse6Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6Data.prototype, "readRefundAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SCASupportData" }),
        __metadata("design:type", ObscaSupportData1)
    ], ObWriteInternationalConsentResponse6Data.prototype, "scaSupportData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsentResponse6Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalConsentResponse6Data.prototype, "statusUpdateDateTime", void 0);
    return ObWriteInternationalConsentResponse6Data;
}(SpeakeasyBase));
export { ObWriteInternationalConsentResponse6Data };
var ObWriteInternationalConsentResponse6 = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsentResponse6, _super);
    function ObWriteInternationalConsentResponse6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteInternationalConsentResponse6Data)
    ], ObWriteInternationalConsentResponse6.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteInternationalConsentResponse6.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteInternationalConsentResponse6.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteInternationalConsentResponse6.prototype, "risk", void 0);
    return ObWriteInternationalConsentResponse6;
}(SpeakeasyBase));
export { ObWriteInternationalConsentResponse6 };
