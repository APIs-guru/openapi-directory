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
export var ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum;
(function (ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum) {
    ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum["Any"] = "Any";
    ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum["Single"] = "Single";
})(ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum || (ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum = {}));
// ObWriteInternationalScheduledConsent5DataAuthorisation
/**
 * The authorisation type request from the TPP.
**/
var ObWriteInternationalScheduledConsent5DataAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsent5DataAuthorisation, _super);
    function ObWriteInternationalScheduledConsent5DataAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataAuthorisation.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledConsent5DataAuthorisation.prototype, "completionDateTime", void 0);
    return ObWriteInternationalScheduledConsent5DataAuthorisation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsent5DataAuthorisation };
// ObWriteInternationalScheduledConsent5DataInitiationCreditor
/**
 * Party to which an amount of money is due.
**/
var ObWriteInternationalScheduledConsent5DataInitiationCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsent5DataInitiationCreditor, _super);
    function ObWriteInternationalScheduledConsent5DataInitiationCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalScheduledConsent5DataInitiationCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternationalScheduledConsent5DataInitiationCreditor;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsent5DataInitiationCreditor };
// ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount, _super);
    function ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount };
// ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent
/**
 * Financial institution servicing an account for the creditor.
**/
var ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent, _super);
    function ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent.prototype, "schemeName", void 0);
    return ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent };
// ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount, _super);
    function ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount };
export var ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum;
(function (ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum) {
    ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum["Actual"] = "Actual";
    ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum["Agreed"] = "Agreed";
    ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum["Indicative"] = "Indicative";
})(ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum || (ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum = {}));
// ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation
/**
 * Provides details on the currency exchange rate and contract.
**/
var ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation, _super);
    function ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation.prototype, "contractIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRate" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnitCurrency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation.prototype, "unitCurrency", void 0);
    return ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation };
// ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount, _super);
    function ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount };
export var ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum;
(function (ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum) {
    ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum["Normal"] = "Normal";
    ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum["Urgent"] = "Urgent";
})(ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum || (ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum = {}));
// ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation, _super);
    function ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation };
// ObWriteInternationalScheduledConsent5DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
**/
var ObWriteInternationalScheduledConsent5DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsent5DataInitiation, _super);
    function ObWriteInternationalScheduledConsent5DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternationalScheduledConsent5DataInitiationCreditor)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "creditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAgent" }),
        __metadata("design:type", ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "currencyOfTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "destinationCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" }),
        __metadata("design:type", ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "exchangeRateInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "extendedPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionPriority" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "instructionPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Purpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "requestedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteInternationalScheduledConsent5DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteInternationalScheduledConsent5DataInitiation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsent5DataInitiation };
export var ObWriteInternationalScheduledConsent5DataPermissionEnum;
(function (ObWriteInternationalScheduledConsent5DataPermissionEnum) {
    ObWriteInternationalScheduledConsent5DataPermissionEnum["Create"] = "Create";
})(ObWriteInternationalScheduledConsent5DataPermissionEnum || (ObWriteInternationalScheduledConsent5DataPermissionEnum = {}));
export var ObWriteInternationalScheduledConsent5DataReadRefundAccountEnum;
(function (ObWriteInternationalScheduledConsent5DataReadRefundAccountEnum) {
    ObWriteInternationalScheduledConsent5DataReadRefundAccountEnum["No"] = "No";
    ObWriteInternationalScheduledConsent5DataReadRefundAccountEnum["Yes"] = "Yes";
})(ObWriteInternationalScheduledConsent5DataReadRefundAccountEnum || (ObWriteInternationalScheduledConsent5DataReadRefundAccountEnum = {}));
var ObWriteInternationalScheduledConsent5Data = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsent5Data, _super);
    function ObWriteInternationalScheduledConsent5Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Authorisation" }),
        __metadata("design:type", ObWriteInternationalScheduledConsent5DataAuthorisation)
    ], ObWriteInternationalScheduledConsent5Data.prototype, "authorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteInternationalScheduledConsent5DataInitiation)
    ], ObWriteInternationalScheduledConsent5Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Permission" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5Data.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsent5Data.prototype, "readRefundAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SCASupportData" }),
        __metadata("design:type", ObscaSupportData1)
    ], ObWriteInternationalScheduledConsent5Data.prototype, "scaSupportData", void 0);
    return ObWriteInternationalScheduledConsent5Data;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsent5Data };
var ObWriteInternationalScheduledConsent5 = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsent5, _super);
    function ObWriteInternationalScheduledConsent5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteInternationalScheduledConsent5Data)
    ], ObWriteInternationalScheduledConsent5.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteInternationalScheduledConsent5.prototype, "risk", void 0);
    return ObWriteInternationalScheduledConsent5;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsent5 };
