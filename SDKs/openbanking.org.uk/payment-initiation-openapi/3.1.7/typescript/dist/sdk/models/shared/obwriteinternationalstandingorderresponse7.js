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
// ObWriteInternationalStandingOrderResponse7DataCharges
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
var ObWriteInternationalStandingOrderResponse7DataCharges = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderResponse7DataCharges, _super);
    function ObWriteInternationalStandingOrderResponse7DataCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObWriteInternationalStandingOrderResponse7DataCharges.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataCharges.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataCharges.prototype, "type", void 0);
    return ObWriteInternationalStandingOrderResponse7DataCharges;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderResponse7DataCharges };
// ObWriteInternationalStandingOrderResponse7DataInitiationCreditor
/**
 * Party to which an amount of money is due.
**/
var ObWriteInternationalStandingOrderResponse7DataInitiationCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderResponse7DataInitiationCreditor, _super);
    function ObWriteInternationalStandingOrderResponse7DataInitiationCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternationalStandingOrderResponse7DataInitiationCreditor;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderResponse7DataInitiationCreditor };
// ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount
/**
 * Provides the details to identify the beneficiary account.
**/
var ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount, _super);
    function ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount };
// ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent
/**
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
 * This is the servicer of the beneficiary account.
**/
var ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent, _super);
    function ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent.prototype, "schemeName", void 0);
    return ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent };
// ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount, _super);
    function ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount };
// ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount, _super);
    function ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount };
// ObWriteInternationalStandingOrderResponse7DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
**/
var ObWriteInternationalStandingOrderResponse7DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderResponse7DataInitiation, _super);
    function ObWriteInternationalStandingOrderResponse7DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternationalStandingOrderResponse7DataInitiationCreditor)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "creditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAgent" }),
        __metadata("design:type", ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "currencyOfTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "destinationCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "extendedPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "finalPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "firstPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Frequency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfPayments" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "numberOfPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Purpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteInternationalStandingOrderResponse7DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteInternationalStandingOrderResponse7DataInitiation;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderResponse7DataInitiation };
export var ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum;
(function (ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum) {
    ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum["Authorised"] = "Authorised";
    ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum["AwaitingFurtherAuthorisation"] = "AwaitingFurtherAuthorisation";
    ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum["Rejected"] = "Rejected";
})(ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum || (ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum = {}));
// ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation
/**
 * The multiple authorisation flow response from the ASPSP.
**/
var ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation, _super);
    function ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation.prototype, "expirationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation.prototype, "lastUpdateDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberReceived" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation.prototype, "numberReceived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberRequired" }),
        __metadata("design:type", Number)
    ], ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation.prototype, "numberRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation.prototype, "status", void 0);
    return ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation };
// ObWriteInternationalStandingOrderResponse7DataRefundAccount
/**
 * Provides the details to identify an account.
**/
var ObWriteInternationalStandingOrderResponse7DataRefundAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderResponse7DataRefundAccount, _super);
    function ObWriteInternationalStandingOrderResponse7DataRefundAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataRefundAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataRefundAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataRefundAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataRefundAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalStandingOrderResponse7DataRefundAccount;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderResponse7DataRefundAccount };
// ObWriteInternationalStandingOrderResponse7DataRefundAgent
/**
 * Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
**/
var ObWriteInternationalStandingOrderResponse7DataRefundAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderResponse7DataRefundAgent, _super);
    function ObWriteInternationalStandingOrderResponse7DataRefundAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataRefundAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataRefundAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalStandingOrderResponse7DataRefundAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataRefundAgent.prototype, "schemeName", void 0);
    return ObWriteInternationalStandingOrderResponse7DataRefundAgent;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderResponse7DataRefundAgent };
// ObWriteInternationalStandingOrderResponse7DataRefundCreditor
/**
 * Set of elements used to identify a person or an organisation.
**/
var ObWriteInternationalStandingOrderResponse7DataRefundCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderResponse7DataRefundCreditor, _super);
    function ObWriteInternationalStandingOrderResponse7DataRefundCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7DataRefundCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalStandingOrderResponse7DataRefundCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternationalStandingOrderResponse7DataRefundCreditor;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderResponse7DataRefundCreditor };
var ObWriteInternationalStandingOrderResponse7DataRefund = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderResponse7DataRefund, _super);
    function ObWriteInternationalStandingOrderResponse7DataRefund() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Account" }),
        __metadata("design:type", ObWriteInternationalStandingOrderResponse7DataRefundAccount)
    ], ObWriteInternationalStandingOrderResponse7DataRefund.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Agent" }),
        __metadata("design:type", ObWriteInternationalStandingOrderResponse7DataRefundAgent)
    ], ObWriteInternationalStandingOrderResponse7DataRefund.prototype, "agent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternationalStandingOrderResponse7DataRefundCreditor)
    ], ObWriteInternationalStandingOrderResponse7DataRefund.prototype, "creditor", void 0);
    return ObWriteInternationalStandingOrderResponse7DataRefund;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderResponse7DataRefund };
export var ObWriteInternationalStandingOrderResponse7DataStatusEnum;
(function (ObWriteInternationalStandingOrderResponse7DataStatusEnum) {
    ObWriteInternationalStandingOrderResponse7DataStatusEnum["Cancelled"] = "Cancelled";
    ObWriteInternationalStandingOrderResponse7DataStatusEnum["InitiationCompleted"] = "InitiationCompleted";
    ObWriteInternationalStandingOrderResponse7DataStatusEnum["InitiationFailed"] = "InitiationFailed";
    ObWriteInternationalStandingOrderResponse7DataStatusEnum["InitiationPending"] = "InitiationPending";
})(ObWriteInternationalStandingOrderResponse7DataStatusEnum || (ObWriteInternationalStandingOrderResponse7DataStatusEnum = {}));
var ObWriteInternationalStandingOrderResponse7Data = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderResponse7Data, _super);
    function ObWriteInternationalStandingOrderResponse7Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteInternationalStandingOrderResponse7DataCharges }),
        __metadata("design:type", Array)
    ], ObWriteInternationalStandingOrderResponse7Data.prototype, "charges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderResponse7Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Debtor" }),
        __metadata("design:type", ObCashAccountDebtor4)
    ], ObWriteInternationalStandingOrderResponse7Data.prototype, "debtor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteInternationalStandingOrderResponse7DataInitiation)
    ], ObWriteInternationalStandingOrderResponse7Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InternationalStandingOrderId" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7Data.prototype, "internationalStandingOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiAuthorisation" }),
        __metadata("design:type", ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation)
    ], ObWriteInternationalStandingOrderResponse7Data.prototype, "multiAuthorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Refund" }),
        __metadata("design:type", ObWriteInternationalStandingOrderResponse7DataRefund)
    ], ObWriteInternationalStandingOrderResponse7Data.prototype, "refund", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderResponse7Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderResponse7Data.prototype, "statusUpdateDateTime", void 0);
    return ObWriteInternationalStandingOrderResponse7Data;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderResponse7Data };
var ObWriteInternationalStandingOrderResponse7 = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderResponse7, _super);
    function ObWriteInternationalStandingOrderResponse7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteInternationalStandingOrderResponse7Data)
    ], ObWriteInternationalStandingOrderResponse7.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteInternationalStandingOrderResponse7.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteInternationalStandingOrderResponse7.prototype, "meta", void 0);
    return ObWriteInternationalStandingOrderResponse7;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderResponse7 };
