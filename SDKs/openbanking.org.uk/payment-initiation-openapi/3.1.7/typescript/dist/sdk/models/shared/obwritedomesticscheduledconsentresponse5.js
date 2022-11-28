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
export var ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum;
(function (ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum) {
    ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum["Any"] = "Any";
    ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum["Single"] = "Single";
})(ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum || (ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum = {}));
// ObWriteDomesticScheduledConsentResponse5DataAuthorisation
/**
 * The authorisation type request from the TPP.
**/
var ObWriteDomesticScheduledConsentResponse5DataAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsentResponse5DataAuthorisation, _super);
    function ObWriteDomesticScheduledConsentResponse5DataAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataAuthorisation.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledConsentResponse5DataAuthorisation.prototype, "completionDateTime", void 0);
    return ObWriteDomesticScheduledConsentResponse5DataAuthorisation;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsentResponse5DataAuthorisation };
// ObWriteDomesticScheduledConsentResponse5DataCharges
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
var ObWriteDomesticScheduledConsentResponse5DataCharges = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsentResponse5DataCharges, _super);
    function ObWriteDomesticScheduledConsentResponse5DataCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObWriteDomesticScheduledConsentResponse5DataCharges.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataCharges.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataCharges.prototype, "type", void 0);
    return ObWriteDomesticScheduledConsentResponse5DataCharges;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsentResponse5DataCharges };
// ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount
/**
 * Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
**/
var ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount, _super);
    function ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount };
// ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount, _super);
    function ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount };
// ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount, _super);
    function ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount };
// ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation
/**
 * Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
**/
var ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation, _super);
    function ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unstructured" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation.prototype, "unstructured", void 0);
    return ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation };
// ObWriteDomesticScheduledConsentResponse5DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
**/
var ObWriteDomesticScheduledConsentResponse5DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsentResponse5DataInitiation, _super);
    function ObWriteDomesticScheduledConsentResponse5DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorPostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiation.prototype, "creditorPostalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndToEndIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiation.prototype, "endToEndIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructionIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiation.prototype, "instructionIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LocalInstrument" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiation.prototype, "localInstrument", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RemittanceInformation" }),
        __metadata("design:type", ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiation.prototype, "remittanceInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RequestedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiation.prototype, "requestedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteDomesticScheduledConsentResponse5DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteDomesticScheduledConsentResponse5DataInitiation;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsentResponse5DataInitiation };
export var ObWriteDomesticScheduledConsentResponse5DataPermissionEnum;
(function (ObWriteDomesticScheduledConsentResponse5DataPermissionEnum) {
    ObWriteDomesticScheduledConsentResponse5DataPermissionEnum["Create"] = "Create";
})(ObWriteDomesticScheduledConsentResponse5DataPermissionEnum || (ObWriteDomesticScheduledConsentResponse5DataPermissionEnum = {}));
export var ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnum;
(function (ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnum) {
    ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnum["No"] = "No";
    ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnum["Yes"] = "Yes";
})(ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnum || (ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnum = {}));
export var ObWriteDomesticScheduledConsentResponse5DataStatusEnum;
(function (ObWriteDomesticScheduledConsentResponse5DataStatusEnum) {
    ObWriteDomesticScheduledConsentResponse5DataStatusEnum["Authorised"] = "Authorised";
    ObWriteDomesticScheduledConsentResponse5DataStatusEnum["AwaitingAuthorisation"] = "AwaitingAuthorisation";
    ObWriteDomesticScheduledConsentResponse5DataStatusEnum["Consumed"] = "Consumed";
    ObWriteDomesticScheduledConsentResponse5DataStatusEnum["Rejected"] = "Rejected";
})(ObWriteDomesticScheduledConsentResponse5DataStatusEnum || (ObWriteDomesticScheduledConsentResponse5DataStatusEnum = {}));
var ObWriteDomesticScheduledConsentResponse5Data = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsentResponse5Data, _super);
    function ObWriteDomesticScheduledConsentResponse5Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Authorisation" }),
        __metadata("design:type", ObWriteDomesticScheduledConsentResponse5DataAuthorisation)
    ], ObWriteDomesticScheduledConsentResponse5Data.prototype, "authorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteDomesticScheduledConsentResponse5DataCharges }),
        __metadata("design:type", Array)
    ], ObWriteDomesticScheduledConsentResponse5Data.prototype, "charges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledConsentResponse5Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CutOffDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledConsentResponse5Data.prototype, "cutOffDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Debtor" }),
        __metadata("design:type", ObCashAccountDebtor4)
    ], ObWriteDomesticScheduledConsentResponse5Data.prototype, "debtor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedExecutionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledConsentResponse5Data.prototype, "expectedExecutionDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpectedSettlementDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledConsentResponse5Data.prototype, "expectedSettlementDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteDomesticScheduledConsentResponse5DataInitiation)
    ], ObWriteDomesticScheduledConsentResponse5Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Permission" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5Data.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5Data.prototype, "readRefundAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SCASupportData" }),
        __metadata("design:type", ObscaSupportData1)
    ], ObWriteDomesticScheduledConsentResponse5Data.prototype, "scaSupportData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteDomesticScheduledConsentResponse5Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticScheduledConsentResponse5Data.prototype, "statusUpdateDateTime", void 0);
    return ObWriteDomesticScheduledConsentResponse5Data;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsentResponse5Data };
var ObWriteDomesticScheduledConsentResponse5 = /** @class */ (function (_super) {
    __extends(ObWriteDomesticScheduledConsentResponse5, _super);
    function ObWriteDomesticScheduledConsentResponse5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteDomesticScheduledConsentResponse5Data)
    ], ObWriteDomesticScheduledConsentResponse5.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteDomesticScheduledConsentResponse5.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteDomesticScheduledConsentResponse5.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteDomesticScheduledConsentResponse5.prototype, "risk", void 0);
    return ObWriteDomesticScheduledConsentResponse5;
}(SpeakeasyBase));
export { ObWriteDomesticScheduledConsentResponse5 };
