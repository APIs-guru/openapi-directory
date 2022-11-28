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
export var ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum;
(function (ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum) {
    ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum["Any"] = "Any";
    ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum["Single"] = "Single";
})(ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum || (ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum = {}));
// ObWriteDomesticConsentResponse5DataAuthorisation
/**
 * The authorisation type request from the TPP.
**/
var ObWriteDomesticConsentResponse5DataAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsentResponse5DataAuthorisation, _super);
    function ObWriteDomesticConsentResponse5DataAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataAuthorisation.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticConsentResponse5DataAuthorisation.prototype, "completionDateTime", void 0);
    return ObWriteDomesticConsentResponse5DataAuthorisation;
}(SpeakeasyBase));
export { ObWriteDomesticConsentResponse5DataAuthorisation };
// ObWriteDomesticConsentResponse5DataCharges
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
var ObWriteDomesticConsentResponse5DataCharges = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsentResponse5DataCharges, _super);
    function ObWriteDomesticConsentResponse5DataCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObWriteDomesticConsentResponse5DataCharges.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataCharges.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataCharges.prototype, "type", void 0);
    return ObWriteDomesticConsentResponse5DataCharges;
}(SpeakeasyBase));
export { ObWriteDomesticConsentResponse5DataCharges };
// ObWriteDomesticConsentResponse5DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteDomesticConsentResponse5DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsentResponse5DataInitiationCreditorAccount, _super);
    function ObWriteDomesticConsentResponse5DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticConsentResponse5DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticConsentResponse5DataInitiationCreditorAccount };
// ObWriteDomesticConsentResponse5DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteDomesticConsentResponse5DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsentResponse5DataInitiationDebtorAccount, _super);
    function ObWriteDomesticConsentResponse5DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticConsentResponse5DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticConsentResponse5DataInitiationDebtorAccount };
// ObWriteDomesticConsentResponse5DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteDomesticConsentResponse5DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsentResponse5DataInitiationInstructedAmount, _super);
    function ObWriteDomesticConsentResponse5DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteDomesticConsentResponse5DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteDomesticConsentResponse5DataInitiationInstructedAmount };
// ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation, _super);
    function ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation };
// ObWriteDomesticConsentResponse5DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
**/
var ObWriteDomesticConsentResponse5DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsentResponse5DataInitiation, _super);
    function ObWriteDomesticConsentResponse5DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteDomesticConsentResponse5DataInitiationCreditorAccount)
    ], ObWriteDomesticConsentResponse5DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorPostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteDomesticConsentResponse5DataInitiation.prototype, "creditorPostalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteDomesticConsentResponse5DataInitiationDebtorAccount)
    ], ObWriteDomesticConsentResponse5DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteDomesticConsentResponse5DataInitiationInstructedAmount)
    ], ObWriteDomesticConsentResponse5DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation)
    ], ObWriteDomesticConsentResponse5DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteDomesticConsentResponse5DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteDomesticConsentResponse5DataInitiation;
}(SpeakeasyBase));
export { ObWriteDomesticConsentResponse5DataInitiation };
export var ObWriteDomesticConsentResponse5DataReadRefundAccountEnum;
(function (ObWriteDomesticConsentResponse5DataReadRefundAccountEnum) {
    ObWriteDomesticConsentResponse5DataReadRefundAccountEnum["No"] = "No";
    ObWriteDomesticConsentResponse5DataReadRefundAccountEnum["Yes"] = "Yes";
})(ObWriteDomesticConsentResponse5DataReadRefundAccountEnum || (ObWriteDomesticConsentResponse5DataReadRefundAccountEnum = {}));
export var ObWriteDomesticConsentResponse5DataStatusEnum;
(function (ObWriteDomesticConsentResponse5DataStatusEnum) {
    ObWriteDomesticConsentResponse5DataStatusEnum["Authorised"] = "Authorised";
    ObWriteDomesticConsentResponse5DataStatusEnum["AwaitingAuthorisation"] = "AwaitingAuthorisation";
    ObWriteDomesticConsentResponse5DataStatusEnum["Consumed"] = "Consumed";
    ObWriteDomesticConsentResponse5DataStatusEnum["Rejected"] = "Rejected";
})(ObWriteDomesticConsentResponse5DataStatusEnum || (ObWriteDomesticConsentResponse5DataStatusEnum = {}));
var ObWriteDomesticConsentResponse5Data = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsentResponse5Data, _super);
    function ObWriteDomesticConsentResponse5Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Authorisation" }),
        __metadata("design:type", ObWriteDomesticConsentResponse5DataAuthorisation)
    ], ObWriteDomesticConsentResponse5Data.prototype, "authorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteDomesticConsentResponse5DataCharges }),
        __metadata("design:type", Array)
    ], ObWriteDomesticConsentResponse5Data.prototype, "charges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticConsentResponse5Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CutOffDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticConsentResponse5Data.prototype, "cutOffDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Debtor" }),
        __metadata("design:type", ObCashAccountDebtor4)
    ], ObWriteDomesticConsentResponse5Data.prototype, "debtor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticConsentResponse5Data.prototype, "expectedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedSettlementDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticConsentResponse5Data.prototype, "expectedSettlementDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteDomesticConsentResponse5DataInitiation)
    ], ObWriteDomesticConsentResponse5Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5Data.prototype, "readRefundAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SCASupportData" }),
        __metadata("design:type", ObscaSupportData1)
    ], ObWriteDomesticConsentResponse5Data.prototype, "scaSupportData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteDomesticConsentResponse5Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticConsentResponse5Data.prototype, "statusUpdateDateTime", void 0);
    return ObWriteDomesticConsentResponse5Data;
}(SpeakeasyBase));
export { ObWriteDomesticConsentResponse5Data };
var ObWriteDomesticConsentResponse5 = /** @class */ (function (_super) {
    __extends(ObWriteDomesticConsentResponse5, _super);
    function ObWriteDomesticConsentResponse5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteDomesticConsentResponse5Data)
    ], ObWriteDomesticConsentResponse5.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteDomesticConsentResponse5.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteDomesticConsentResponse5.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteDomesticConsentResponse5.prototype, "risk", void 0);
    return ObWriteDomesticConsentResponse5;
}(SpeakeasyBase));
export { ObWriteDomesticConsentResponse5 };
