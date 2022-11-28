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
export var ObWriteInternationalScheduledConsentResponse6DataAuthorisationAuthorisationTypeEnum;
(function (ObWriteInternationalScheduledConsentResponse6DataAuthorisationAuthorisationTypeEnum) {
    ObWriteInternationalScheduledConsentResponse6DataAuthorisationAuthorisationTypeEnum["Any"] = "Any";
    ObWriteInternationalScheduledConsentResponse6DataAuthorisationAuthorisationTypeEnum["Single"] = "Single";
})(ObWriteInternationalScheduledConsentResponse6DataAuthorisationAuthorisationTypeEnum || (ObWriteInternationalScheduledConsentResponse6DataAuthorisationAuthorisationTypeEnum = {}));
// ObWriteInternationalScheduledConsentResponse6DataAuthorisation
/**
 * The authorisation type request from the TPP.
**/
var ObWriteInternationalScheduledConsentResponse6DataAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsentResponse6DataAuthorisation, _super);
    function ObWriteInternationalScheduledConsentResponse6DataAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataAuthorisation.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledConsentResponse6DataAuthorisation.prototype, "completionDateTime", void 0);
    return ObWriteInternationalScheduledConsentResponse6DataAuthorisation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsentResponse6DataAuthorisation };
// ObWriteInternationalScheduledConsentResponse6DataCharges
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
var ObWriteInternationalScheduledConsentResponse6DataCharges = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsentResponse6DataCharges, _super);
    function ObWriteInternationalScheduledConsentResponse6DataCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObWriteInternationalScheduledConsentResponse6DataCharges.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataCharges.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataCharges.prototype, "type", void 0);
    return ObWriteInternationalScheduledConsentResponse6DataCharges;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsentResponse6DataCharges };
export var ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnum;
(function (ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnum) {
    ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnum["Actual"] = "Actual";
    ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnum["Agreed"] = "Agreed";
    ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnum["Indicative"] = "Indicative";
})(ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnum || (ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformationRateTypeEnum = {}));
// ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation
/**
 * Further detailed information on the exchange rate that has been used in the payment transaction.
**/
var ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation, _super);
    function ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation.prototype, "contractIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRate" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation.prototype, "expirationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnitCurrency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation.prototype, "unitCurrency", void 0);
    return ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation };
// ObWriteInternationalScheduledConsentResponse6DataInitiationCreditor
/**
 * Party to which an amount of money is due.
**/
var ObWriteInternationalScheduledConsentResponse6DataInitiationCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsentResponse6DataInitiationCreditor, _super);
    function ObWriteInternationalScheduledConsentResponse6DataInitiationCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternationalScheduledConsentResponse6DataInitiationCreditor;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsentResponse6DataInitiationCreditor };
// ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount, _super);
    function ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount };
// ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent
/**
 * Financial institution servicing an account for the creditor.
**/
var ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent, _super);
    function ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent.prototype, "schemeName", void 0);
    return ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent };
// ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount, _super);
    function ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount };
export var ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum;
(function (ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum) {
    ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum["Actual"] = "Actual";
    ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum["Agreed"] = "Agreed";
    ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum["Indicative"] = "Indicative";
})(ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum || (ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum = {}));
// ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation
/**
 * Provides details on the currency exchange rate and contract.
**/
var ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation, _super);
    function ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContractIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation.prototype, "contractIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRate" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation.prototype, "exchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation.prototype, "rateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnitCurrency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation.prototype, "unitCurrency", void 0);
    return ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation };
// ObWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount, _super);
    function ObWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount };
export var ObWriteInternationalScheduledConsentResponse6DataInitiationInstructionPriorityEnum;
(function (ObWriteInternationalScheduledConsentResponse6DataInitiationInstructionPriorityEnum) {
    ObWriteInternationalScheduledConsentResponse6DataInitiationInstructionPriorityEnum["Normal"] = "Normal";
    ObWriteInternationalScheduledConsentResponse6DataInitiationInstructionPriorityEnum["Urgent"] = "Urgent";
})(ObWriteInternationalScheduledConsentResponse6DataInitiationInstructionPriorityEnum || (ObWriteInternationalScheduledConsentResponse6DataInitiationInstructionPriorityEnum = {}));
// ObWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation, _super);
    function ObWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation };
// ObWriteInternationalScheduledConsentResponse6DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
**/
var ObWriteInternationalScheduledConsentResponse6DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsentResponse6DataInitiation, _super);
    function ObWriteInternationalScheduledConsentResponse6DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternationalScheduledConsentResponse6DataInitiationCreditor)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "creditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAccount)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAgent" }),
        __metadata("design:type", ObWriteInternationalScheduledConsentResponse6DataInitiationCreditorAgent)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "currencyOfTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteInternationalScheduledConsentResponse6DataInitiationDebtorAccount)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "destinationCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" }),
        __metadata("design:type", ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "exchangeRateInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "extendedPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteInternationalScheduledConsentResponse6DataInitiationInstructedAmount)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionPriority" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "instructionPriority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Purpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteInternationalScheduledConsentResponse6DataInitiationRemittanceInformation)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "requestedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteInternationalScheduledConsentResponse6DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteInternationalScheduledConsentResponse6DataInitiation;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsentResponse6DataInitiation };
export var ObWriteInternationalScheduledConsentResponse6DataPermissionEnum;
(function (ObWriteInternationalScheduledConsentResponse6DataPermissionEnum) {
    ObWriteInternationalScheduledConsentResponse6DataPermissionEnum["Create"] = "Create";
})(ObWriteInternationalScheduledConsentResponse6DataPermissionEnum || (ObWriteInternationalScheduledConsentResponse6DataPermissionEnum = {}));
export var ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnum;
(function (ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnum) {
    ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnum["No"] = "No";
    ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnum["Yes"] = "Yes";
})(ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnum || (ObWriteInternationalScheduledConsentResponse6DataReadRefundAccountEnum = {}));
export var ObWriteInternationalScheduledConsentResponse6DataStatusEnum;
(function (ObWriteInternationalScheduledConsentResponse6DataStatusEnum) {
    ObWriteInternationalScheduledConsentResponse6DataStatusEnum["Authorised"] = "Authorised";
    ObWriteInternationalScheduledConsentResponse6DataStatusEnum["AwaitingAuthorisation"] = "AwaitingAuthorisation";
    ObWriteInternationalScheduledConsentResponse6DataStatusEnum["Consumed"] = "Consumed";
    ObWriteInternationalScheduledConsentResponse6DataStatusEnum["Rejected"] = "Rejected";
})(ObWriteInternationalScheduledConsentResponse6DataStatusEnum || (ObWriteInternationalScheduledConsentResponse6DataStatusEnum = {}));
var ObWriteInternationalScheduledConsentResponse6Data = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsentResponse6Data, _super);
    function ObWriteInternationalScheduledConsentResponse6Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Authorisation" }),
        __metadata("design:type", ObWriteInternationalScheduledConsentResponse6DataAuthorisation)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "authorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteInternationalScheduledConsentResponse6DataCharges }),
        __metadata("design:type", Array)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "charges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CutOffDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "cutOffDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Debtor" }),
        __metadata("design:type", ObCashAccountDebtor4)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "debtor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateInformation" }),
        __metadata("design:type", ObWriteInternationalScheduledConsentResponse6DataExchangeRateInformation)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "exchangeRateInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "expectedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedSettlementDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "expectedSettlementDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteInternationalScheduledConsentResponse6DataInitiation)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Permission" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "readRefundAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SCASupportData" }),
        __metadata("design:type", ObscaSupportData1)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "scaSupportData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalScheduledConsentResponse6Data.prototype, "statusUpdateDateTime", void 0);
    return ObWriteInternationalScheduledConsentResponse6Data;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsentResponse6Data };
var ObWriteInternationalScheduledConsentResponse6 = /** @class */ (function (_super) {
    __extends(ObWriteInternationalScheduledConsentResponse6, _super);
    function ObWriteInternationalScheduledConsentResponse6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteInternationalScheduledConsentResponse6Data)
    ], ObWriteInternationalScheduledConsentResponse6.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteInternationalScheduledConsentResponse6.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteInternationalScheduledConsentResponse6.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteInternationalScheduledConsentResponse6.prototype, "risk", void 0);
    return ObWriteInternationalScheduledConsentResponse6;
}(SpeakeasyBase));
export { ObWriteInternationalScheduledConsentResponse6 };
