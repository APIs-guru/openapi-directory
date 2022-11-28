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
import { ObRisk1 } from "./obrisk1";
// ObWriteInternationalScheduled3DataInitiationCreditor
/**
 * Party to which an amount of money is due.
**/
var ObWriteInternationalScheduled3DataInitiationCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduled3DataInitiationCreditor, _super);
    function ObWriteInternationalScheduled3DataInitiationCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalScheduled3DataInitiationCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternationalScheduled3DataInitiationCreditor;
}(SpeakeasyBase));
export { ObWriteInternationalScheduled3DataInitiationCreditor };
// ObWriteInternationalScheduled3DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteInternationalScheduled3DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduled3DataInitiationCreditorAccount, _super);
    function ObWriteInternationalScheduled3DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalScheduled3DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalScheduled3DataInitiationCreditorAccount };
// ObWriteInternationalScheduled3DataInitiationCreditorAgent
/**
 * Financial institution servicing an account for the creditor.
**/
var ObWriteInternationalScheduled3DataInitiationCreditorAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduled3DataInitiationCreditorAgent, _super);
    function ObWriteInternationalScheduled3DataInitiationCreditorAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationCreditorAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationCreditorAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalScheduled3DataInitiationCreditorAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationCreditorAgent.prototype, "schemeName", void 0);
    return ObWriteInternationalScheduled3DataInitiationCreditorAgent;
}(SpeakeasyBase));
export { ObWriteInternationalScheduled3DataInitiationCreditorAgent };
// ObWriteInternationalScheduled3DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteInternationalScheduled3DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduled3DataInitiationDebtorAccount, _super);
    function ObWriteInternationalScheduled3DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalScheduled3DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalScheduled3DataInitiationDebtorAccount };
export var ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum;
(function (ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum) {
    ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum["Actual"] = "Actual";
    ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum["Agreed"] = "Agreed";
    ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum["Indicative"] = "Indicative";
})(ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum || (ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum = {}));
// ObWriteInternationalScheduled3DataInitiationExchangeRateInformation
/**
 * Provides details on the currency exchange rate and contract.
**/
var ObWriteInternationalScheduled3DataInitiationExchangeRateInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduled3DataInitiationExchangeRateInformation, _super);
    function ObWriteInternationalScheduled3DataInitiationExchangeRateInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationExchangeRateInformation.prototype, "contractIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRate" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalScheduled3DataInitiationExchangeRateInformation.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationExchangeRateInformation.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnitCurrency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationExchangeRateInformation.prototype, "unitCurrency", void 0);
    return ObWriteInternationalScheduled3DataInitiationExchangeRateInformation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduled3DataInitiationExchangeRateInformation };
// ObWriteInternationalScheduled3DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteInternationalScheduled3DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduled3DataInitiationInstructedAmount, _super);
    function ObWriteInternationalScheduled3DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteInternationalScheduled3DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteInternationalScheduled3DataInitiationInstructedAmount };
export var ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum;
(function (ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum) {
    ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum["Normal"] = "Normal";
    ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum["Urgent"] = "Urgent";
})(ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum || (ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum = {}));
// ObWriteInternationalScheduled3DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteInternationalScheduled3DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduled3DataInitiationRemittanceInformation, _super);
    function ObWriteInternationalScheduled3DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteInternationalScheduled3DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduled3DataInitiationRemittanceInformation };
// ObWriteInternationalScheduled3DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
**/
var ObWriteInternationalScheduled3DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduled3DataInitiation, _super);
    function ObWriteInternationalScheduled3DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternationalScheduled3DataInitiationCreditor)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "creditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteInternationalScheduled3DataInitiationCreditorAccount)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAgent" }),
        __metadata("design:type", ObWriteInternationalScheduled3DataInitiationCreditorAgent)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "currencyOfTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteInternationalScheduled3DataInitiationDebtorAccount)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "destinationCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" }),
        __metadata("design:type", ObWriteInternationalScheduled3DataInitiationExchangeRateInformation)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "exchangeRateInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "extendedPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteInternationalScheduled3DataInitiationInstructedAmount)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionPriority" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "instructionPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Purpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteInternationalScheduled3DataInitiationRemittanceInformation)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "requestedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteInternationalScheduled3DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteInternationalScheduled3DataInitiation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduled3DataInitiation };
var ObWriteInternationalScheduled3Data = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduled3Data, _super);
    function ObWriteInternationalScheduled3Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduled3Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteInternationalScheduled3DataInitiation)
    ], ObWriteInternationalScheduled3Data.prototype, "initiation", void 0);
    return ObWriteInternationalScheduled3Data;
}(SpeakeasyBase));
export { ObWriteInternationalScheduled3Data };
var ObWriteInternationalScheduled3 = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduled3, _super);
    function ObWriteInternationalScheduled3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteInternationalScheduled3Data)
    ], ObWriteInternationalScheduled3.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteInternationalScheduled3.prototype, "risk", void 0);
    return ObWriteInternationalScheduled3;
}(SpeakeasyBase));
export { ObWriteInternationalScheduled3 };
