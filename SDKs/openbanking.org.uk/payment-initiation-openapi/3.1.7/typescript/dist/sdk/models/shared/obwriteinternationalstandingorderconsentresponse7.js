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
export var ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum;
(function (ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum) {
    ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum["Any"] = "Any";
    ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum["Single"] = "Single";
})(ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum || (ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum = {}));
// ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation
/**
 * The authorisation type request from the TPP.
**/
var ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation, _super);
    function ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation.prototype, "completionDateTime", void 0);
    return ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation };
// ObWriteInternationalStandingOrderConsentResponse7DataCharges
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
var ObWriteInternationalStandingOrderConsentResponse7DataCharges = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsentResponse7DataCharges, _super);
    function ObWriteInternationalStandingOrderConsentResponse7DataCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObWriteInternationalStandingOrderConsentResponse7DataCharges.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataCharges.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataCharges.prototype, "type", void 0);
    return ObWriteInternationalStandingOrderConsentResponse7DataCharges;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsentResponse7DataCharges };
// ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor
/**
 * Party to which an amount of money is due.
**/
var ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor, _super);
    function ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor };
// ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount
/**
 * Provides the details to identify the beneficiary account.
**/
var ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount, _super);
    function ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount };
// ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent
/**
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
 * This is the servicer of the beneficiary account.
**/
var ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent, _super);
    function ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent.prototype, "schemeName", void 0);
    return ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent };
// ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount, _super);
    function ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount };
// ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount, _super);
    function ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount };
// ObWriteInternationalStandingOrderConsentResponse7DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
**/
var ObWriteInternationalStandingOrderConsentResponse7DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsentResponse7DataInitiation, _super);
    function ObWriteInternationalStandingOrderConsentResponse7DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "creditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAgent" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "currencyOfTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "destinationCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "extendedPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "finalPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "firstPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Frequency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfPayments" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "numberOfPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Purpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteInternationalStandingOrderConsentResponse7DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteInternationalStandingOrderConsentResponse7DataInitiation;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsentResponse7DataInitiation };
export var ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum;
(function (ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum) {
    ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum["Create"] = "Create";
})(ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum || (ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum = {}));
export var ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum;
(function (ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum) {
    ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum["No"] = "No";
    ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum["Yes"] = "Yes";
})(ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum || (ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum = {}));
export var ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum;
(function (ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum) {
    ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum["Authorised"] = "Authorised";
    ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum["AwaitingAuthorisation"] = "AwaitingAuthorisation";
    ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum["Consumed"] = "Consumed";
    ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum["Rejected"] = "Rejected";
})(ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum || (ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum = {}));
var ObWriteInternationalStandingOrderConsentResponse7Data = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsentResponse7Data, _super);
    function ObWriteInternationalStandingOrderConsentResponse7Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Authorisation" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation)
    ], ObWriteInternationalStandingOrderConsentResponse7Data.prototype, "authorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteInternationalStandingOrderConsentResponse7DataCharges }),
        __metadata("design:type", Array)
    ], ObWriteInternationalStandingOrderConsentResponse7Data.prototype, "charges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderConsentResponse7Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CutOffDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderConsentResponse7Data.prototype, "cutOffDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Debtor" }),
        __metadata("design:type", ObCashAccountDebtor4)
    ], ObWriteInternationalStandingOrderConsentResponse7Data.prototype, "debtor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsentResponse7DataInitiation)
    ], ObWriteInternationalStandingOrderConsentResponse7Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Permission" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7Data.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7Data.prototype, "readRefundAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SCASupportData" }),
        __metadata("design:type", ObscaSupportData1)
    ], ObWriteInternationalStandingOrderConsentResponse7Data.prototype, "scaSupportData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsentResponse7Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderConsentResponse7Data.prototype, "statusUpdateDateTime", void 0);
    return ObWriteInternationalStandingOrderConsentResponse7Data;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsentResponse7Data };
var ObWriteInternationalStandingOrderConsentResponse7 = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsentResponse7, _super);
    function ObWriteInternationalStandingOrderConsentResponse7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsentResponse7Data)
    ], ObWriteInternationalStandingOrderConsentResponse7.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteInternationalStandingOrderConsentResponse7.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteInternationalStandingOrderConsentResponse7.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteInternationalStandingOrderConsentResponse7.prototype, "risk", void 0);
    return ObWriteInternationalStandingOrderConsentResponse7;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsentResponse7 };
