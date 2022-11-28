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
import { ObChargeBearerType1CodeEnum } from "./obchargebearertype1codeenum";
import { ObPostalAddress6 } from "./obpostaladdress6";
import { ObscaSupportData1 } from "./obscasupportdata1";
import { ObRisk1 } from "./obrisk1";
export var ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum;
(function (ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum) {
    ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum["Any"] = "Any";
    ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum["Single"] = "Single";
})(ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum || (ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum = {}));
// ObWriteInternationalConsent5DataAuthorisation
/**
 * The authorisation type request from the TPP.
**/
var ObWriteInternationalConsent5DataAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsent5DataAuthorisation, _super);
    function ObWriteInternationalConsent5DataAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataAuthorisation.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalConsent5DataAuthorisation.prototype, "completionDateTime", void 0);
    return ObWriteInternationalConsent5DataAuthorisation;
}(SpeakeasyBase));
export { ObWriteInternationalConsent5DataAuthorisation };
// ObWriteInternationalConsent5DataInitiationCreditor
/**
 * Party to which an amount of money is due.
**/
var ObWriteInternationalConsent5DataInitiationCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsent5DataInitiationCreditor, _super);
    function ObWriteInternationalConsent5DataInitiationCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalConsent5DataInitiationCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternationalConsent5DataInitiationCreditor;
}(SpeakeasyBase));
export { ObWriteInternationalConsent5DataInitiationCreditor };
// ObWriteInternationalConsent5DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteInternationalConsent5DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsent5DataInitiationCreditorAccount, _super);
    function ObWriteInternationalConsent5DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalConsent5DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalConsent5DataInitiationCreditorAccount };
// ObWriteInternationalConsent5DataInitiationCreditorAgent
/**
 * Financial institution servicing an account for the creditor.
**/
var ObWriteInternationalConsent5DataInitiationCreditorAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsent5DataInitiationCreditorAgent, _super);
    function ObWriteInternationalConsent5DataInitiationCreditorAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationCreditorAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationCreditorAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalConsent5DataInitiationCreditorAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationCreditorAgent.prototype, "schemeName", void 0);
    return ObWriteInternationalConsent5DataInitiationCreditorAgent;
}(SpeakeasyBase));
export { ObWriteInternationalConsent5DataInitiationCreditorAgent };
// ObWriteInternationalConsent5DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteInternationalConsent5DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsent5DataInitiationDebtorAccount, _super);
    function ObWriteInternationalConsent5DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalConsent5DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalConsent5DataInitiationDebtorAccount };
export var ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum;
(function (ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum) {
    ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum["Actual"] = "Actual";
    ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum["Agreed"] = "Agreed";
    ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum["Indicative"] = "Indicative";
})(ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum || (ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum = {}));
// ObWriteInternationalConsent5DataInitiationExchangeRateInformation
/**
 * Provides details on the currency exchange rate and contract.
**/
var ObWriteInternationalConsent5DataInitiationExchangeRateInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsent5DataInitiationExchangeRateInformation, _super);
    function ObWriteInternationalConsent5DataInitiationExchangeRateInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationExchangeRateInformation.prototype, "contractIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRate" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalConsent5DataInitiationExchangeRateInformation.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationExchangeRateInformation.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnitCurrency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationExchangeRateInformation.prototype, "unitCurrency", void 0);
    return ObWriteInternationalConsent5DataInitiationExchangeRateInformation;
}(SpeakeasyBase));
export { ObWriteInternationalConsent5DataInitiationExchangeRateInformation };
// ObWriteInternationalConsent5DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteInternationalConsent5DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsent5DataInitiationInstructedAmount, _super);
    function ObWriteInternationalConsent5DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteInternationalConsent5DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteInternationalConsent5DataInitiationInstructedAmount };
export var ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum;
(function (ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum) {
    ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum["Normal"] = "Normal";
    ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum["Urgent"] = "Urgent";
})(ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum || (ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum = {}));
// ObWriteInternationalConsent5DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteInternationalConsent5DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsent5DataInitiationRemittanceInformation, _super);
    function ObWriteInternationalConsent5DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteInternationalConsent5DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteInternationalConsent5DataInitiationRemittanceInformation };
// ObWriteInternationalConsent5DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
var ObWriteInternationalConsent5DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsent5DataInitiation, _super);
    function ObWriteInternationalConsent5DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternationalConsent5DataInitiationCreditor)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "creditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteInternationalConsent5DataInitiationCreditorAccount)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAgent" }),
        __metadata("design:type", ObWriteInternationalConsent5DataInitiationCreditorAgent)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "currencyOfTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteInternationalConsent5DataInitiationDebtorAccount)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "destinationCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" }),
        __metadata("design:type", ObWriteInternationalConsent5DataInitiationExchangeRateInformation)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "exchangeRateInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "extendedPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteInternationalConsent5DataInitiationInstructedAmount)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionPriority" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "instructionPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Purpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteInternationalConsent5DataInitiationRemittanceInformation)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteInternationalConsent5DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteInternationalConsent5DataInitiation;
}(SpeakeasyBase));
export { ObWriteInternationalConsent5DataInitiation };
export var ObWriteInternationalConsent5DataReadRefundAccountEnum;
(function (ObWriteInternationalConsent5DataReadRefundAccountEnum) {
    ObWriteInternationalConsent5DataReadRefundAccountEnum["No"] = "No";
    ObWriteInternationalConsent5DataReadRefundAccountEnum["Yes"] = "Yes";
})(ObWriteInternationalConsent5DataReadRefundAccountEnum || (ObWriteInternationalConsent5DataReadRefundAccountEnum = {}));
var ObWriteInternationalConsent5Data = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsent5Data, _super);
    function ObWriteInternationalConsent5Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Authorisation" }),
        __metadata("design:type", ObWriteInternationalConsent5DataAuthorisation)
    ], ObWriteInternationalConsent5Data.prototype, "authorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteInternationalConsent5DataInitiation)
    ], ObWriteInternationalConsent5Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalConsent5Data.prototype, "readRefundAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SCASupportData" }),
        __metadata("design:type", ObscaSupportData1)
    ], ObWriteInternationalConsent5Data.prototype, "scaSupportData", void 0);
    return ObWriteInternationalConsent5Data;
}(SpeakeasyBase));
export { ObWriteInternationalConsent5Data };
var ObWriteInternationalConsent5 = /** @class */ (function (_super) {
    __extends(ObWriteInternationalConsent5, _super);
    function ObWriteInternationalConsent5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteInternationalConsent5Data)
    ], ObWriteInternationalConsent5.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteInternationalConsent5.prototype, "risk", void 0);
    return ObWriteInternationalConsent5;
}(SpeakeasyBase));
export { ObWriteInternationalConsent5 };
