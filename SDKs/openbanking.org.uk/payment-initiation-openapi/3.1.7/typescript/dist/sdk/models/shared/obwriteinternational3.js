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
// ObWriteInternational3DataInitiationCreditor
/**
 * Party to which an amount of money is due.
**/
var ObWriteInternational3DataInitiationCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternational3DataInitiationCreditor, _super);
    function ObWriteInternational3DataInitiationCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternational3DataInitiationCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternational3DataInitiationCreditor;
}(SpeakeasyBase));
export { ObWriteInternational3DataInitiationCreditor };
// ObWriteInternational3DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteInternational3DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternational3DataInitiationCreditorAccount, _super);
    function ObWriteInternational3DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternational3DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteInternational3DataInitiationCreditorAccount };
// ObWriteInternational3DataInitiationCreditorAgent
/**
 * Financial institution servicing an account for the creditor.
**/
var ObWriteInternational3DataInitiationCreditorAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternational3DataInitiationCreditorAgent, _super);
    function ObWriteInternational3DataInitiationCreditorAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationCreditorAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationCreditorAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternational3DataInitiationCreditorAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationCreditorAgent.prototype, "schemeName", void 0);
    return ObWriteInternational3DataInitiationCreditorAgent;
}(SpeakeasyBase));
export { ObWriteInternational3DataInitiationCreditorAgent };
// ObWriteInternational3DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteInternational3DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternational3DataInitiationDebtorAccount, _super);
    function ObWriteInternational3DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternational3DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteInternational3DataInitiationDebtorAccount };
export var ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum;
(function (ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum) {
    ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum["Actual"] = "Actual";
    ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum["Agreed"] = "Agreed";
    ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum["Indicative"] = "Indicative";
})(ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum || (ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum = {}));
// ObWriteInternational3DataInitiationExchangeRateInformation
/**
 * Provides details on the currency exchange rate and contract.
**/
var ObWriteInternational3DataInitiationExchangeRateInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternational3DataInitiationExchangeRateInformation, _super);
    function ObWriteInternational3DataInitiationExchangeRateInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationExchangeRateInformation.prototype, "contractIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRate" }),
        __metadata("design:type", Number)
    ], ObWriteInternational3DataInitiationExchangeRateInformation.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationExchangeRateInformation.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnitCurrency" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationExchangeRateInformation.prototype, "unitCurrency", void 0);
    return ObWriteInternational3DataInitiationExchangeRateInformation;
}(SpeakeasyBase));
export { ObWriteInternational3DataInitiationExchangeRateInformation };
// ObWriteInternational3DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteInternational3DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteInternational3DataInitiationInstructedAmount, _super);
    function ObWriteInternational3DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteInternational3DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteInternational3DataInitiationInstructedAmount };
export var ObWriteInternational3DataInitiationInstructionPriorityEnum;
(function (ObWriteInternational3DataInitiationInstructionPriorityEnum) {
    ObWriteInternational3DataInitiationInstructionPriorityEnum["Normal"] = "Normal";
    ObWriteInternational3DataInitiationInstructionPriorityEnum["Urgent"] = "Urgent";
})(ObWriteInternational3DataInitiationInstructionPriorityEnum || (ObWriteInternational3DataInitiationInstructionPriorityEnum = {}));
// ObWriteInternational3DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteInternational3DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternational3DataInitiationRemittanceInformation, _super);
    function ObWriteInternational3DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteInternational3DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteInternational3DataInitiationRemittanceInformation };
// ObWriteInternational3DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
**/
var ObWriteInternational3DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteInternational3DataInitiation, _super);
    function ObWriteInternational3DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiation.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternational3DataInitiationCreditor)
    ], ObWriteInternational3DataInitiation.prototype, "creditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteInternational3DataInitiationCreditorAccount)
    ], ObWriteInternational3DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAgent" }),
        __metadata("design:type", ObWriteInternational3DataInitiationCreditorAgent)
    ], ObWriteInternational3DataInitiation.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiation.prototype, "currencyOfTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteInternational3DataInitiationDebtorAccount)
    ], ObWriteInternational3DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiation.prototype, "destinationCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" }),
        __metadata("design:type", ObWriteInternational3DataInitiationExchangeRateInformation)
    ], ObWriteInternational3DataInitiation.prototype, "exchangeRateInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiation.prototype, "extendedPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteInternational3DataInitiationInstructedAmount)
    ], ObWriteInternational3DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionPriority" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiation.prototype, "instructionPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Purpose" }),
        __metadata("design:type", String)
    ], ObWriteInternational3DataInitiation.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteInternational3DataInitiationRemittanceInformation)
    ], ObWriteInternational3DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteInternational3DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteInternational3DataInitiation;
}(SpeakeasyBase));
export { ObWriteInternational3DataInitiation };
var ObWriteInternational3Data = /** @class */ (function (_super) {
    __extends(ObWriteInternational3Data, _super);
    function ObWriteInternational3Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteInternational3Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteInternational3DataInitiation)
    ], ObWriteInternational3Data.prototype, "initiation", void 0);
    return ObWriteInternational3Data;
}(SpeakeasyBase));
export { ObWriteInternational3Data };
var ObWriteInternational3 = /** @class */ (function (_super) {
    __extends(ObWriteInternational3, _super);
    function ObWriteInternational3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteInternational3Data)
    ], ObWriteInternational3.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteInternational3.prototype, "risk", void 0);
    return ObWriteInternational3;
}(SpeakeasyBase));
export { ObWriteInternational3 };
