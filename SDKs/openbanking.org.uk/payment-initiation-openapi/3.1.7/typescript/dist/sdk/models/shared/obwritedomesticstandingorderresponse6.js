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
import { Links } from "./links";
import { Meta } from "./meta";
// ObWriteDomesticStandingOrderResponse6DataCharges
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
var ObWriteDomesticStandingOrderResponse6DataCharges = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderResponse6DataCharges, _super);
    function ObWriteDomesticStandingOrderResponse6DataCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObWriteDomesticStandingOrderResponse6DataCharges.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataCharges.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataCharges.prototype, "type", void 0);
    return ObWriteDomesticStandingOrderResponse6DataCharges;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderResponse6DataCharges };
// ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount
/**
 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
**/
var ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount, _super);
    function ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount };
// ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount, _super);
    function ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount };
// ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount
/**
 * The amount of the final Standing Order
**/
var ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount, _super);
    function ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount.prototype, "currency", void 0);
    return ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount };
// ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount
/**
 * The amount of the first Standing Order
**/
var ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount, _super);
    function ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount.prototype, "currency", void 0);
    return ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount };
// ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount
/**
 * The amount of the recurring Standing Order
**/
var ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount, _super);
    function ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount.prototype, "currency", void 0);
    return ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount };
// ObWriteDomesticStandingOrderResponse6DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
var ObWriteDomesticStandingOrderResponse6DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderResponse6DataInitiation, _super);
    function ObWriteDomesticStandingOrderResponse6DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderResponse6DataInitiationCreditorAccount)
    ], ObWriteDomesticStandingOrderResponse6DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderResponse6DataInitiationDebtorAccount)
    ], ObWriteDomesticStandingOrderResponse6DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalPaymentAmount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderResponse6DataInitiationFinalPaymentAmount)
    ], ObWriteDomesticStandingOrderResponse6DataInitiation.prototype, "finalPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderResponse6DataInitiation.prototype, "finalPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstPaymentAmount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderResponse6DataInitiationFirstPaymentAmount)
    ], ObWriteDomesticStandingOrderResponse6DataInitiation.prototype, "firstPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderResponse6DataInitiation.prototype, "firstPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Frequency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiation.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfPayments" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiation.prototype, "numberOfPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringPaymentAmount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderResponse6DataInitiationRecurringPaymentAmount)
    ], ObWriteDomesticStandingOrderResponse6DataInitiation.prototype, "recurringPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderResponse6DataInitiation.prototype, "recurringPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataInitiation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteDomesticStandingOrderResponse6DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteDomesticStandingOrderResponse6DataInitiation;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderResponse6DataInitiation };
export var ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum;
(function (ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum) {
    ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum["Authorised"] = "Authorised";
    ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum["AwaitingFurtherAuthorisation"] = "AwaitingFurtherAuthorisation";
    ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum["Rejected"] = "Rejected";
})(ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum || (ObWriteDomesticStandingOrderResponse6DataMultiAuthorisationStatusEnum = {}));
// ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation
/**
 * The multiple authorisation flow response from the ASPSP.
**/
var ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation, _super);
    function ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation.prototype, "expirationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation.prototype, "lastUpdateDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberReceived" }),
        __metadata("design:type", Number)
    ], ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation.prototype, "numberReceived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberRequired" }),
        __metadata("design:type", Number)
    ], ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation.prototype, "numberRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation.prototype, "status", void 0);
    return ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation };
// ObWriteDomesticStandingOrderResponse6DataRefundAccount
/**
 * Provides the details to identify an account.
**/
var ObWriteDomesticStandingOrderResponse6DataRefundAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderResponse6DataRefundAccount, _super);
    function ObWriteDomesticStandingOrderResponse6DataRefundAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataRefundAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataRefundAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataRefundAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6DataRefundAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticStandingOrderResponse6DataRefundAccount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderResponse6DataRefundAccount };
// ObWriteDomesticStandingOrderResponse6DataRefund
/**
 * Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.
**/
var ObWriteDomesticStandingOrderResponse6DataRefund = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderResponse6DataRefund, _super);
    function ObWriteDomesticStandingOrderResponse6DataRefund() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Account" }),
        __metadata("design:type", ObWriteDomesticStandingOrderResponse6DataRefundAccount)
    ], ObWriteDomesticStandingOrderResponse6DataRefund.prototype, "account", void 0);
    return ObWriteDomesticStandingOrderResponse6DataRefund;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderResponse6DataRefund };
export var ObWriteDomesticStandingOrderResponse6DataStatusEnum;
(function (ObWriteDomesticStandingOrderResponse6DataStatusEnum) {
    ObWriteDomesticStandingOrderResponse6DataStatusEnum["Cancelled"] = "Cancelled";
    ObWriteDomesticStandingOrderResponse6DataStatusEnum["InitiationCompleted"] = "InitiationCompleted";
    ObWriteDomesticStandingOrderResponse6DataStatusEnum["InitiationFailed"] = "InitiationFailed";
    ObWriteDomesticStandingOrderResponse6DataStatusEnum["InitiationPending"] = "InitiationPending";
})(ObWriteDomesticStandingOrderResponse6DataStatusEnum || (ObWriteDomesticStandingOrderResponse6DataStatusEnum = {}));
var ObWriteDomesticStandingOrderResponse6Data = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderResponse6Data, _super);
    function ObWriteDomesticStandingOrderResponse6Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteDomesticStandingOrderResponse6DataCharges }),
        __metadata("design:type", Array)
    ], ObWriteDomesticStandingOrderResponse6Data.prototype, "charges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderResponse6Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Debtor" }),
        __metadata("design:type", ObCashAccountDebtor4)
    ], ObWriteDomesticStandingOrderResponse6Data.prototype, "debtor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DomesticStandingOrderId" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6Data.prototype, "domesticStandingOrderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteDomesticStandingOrderResponse6DataInitiation)
    ], ObWriteDomesticStandingOrderResponse6Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MultiAuthorisation" }),
        __metadata("design:type", ObWriteDomesticStandingOrderResponse6DataMultiAuthorisation)
    ], ObWriteDomesticStandingOrderResponse6Data.prototype, "multiAuthorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Refund" }),
        __metadata("design:type", ObWriteDomesticStandingOrderResponse6DataRefund)
    ], ObWriteDomesticStandingOrderResponse6Data.prototype, "refund", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderResponse6Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderResponse6Data.prototype, "statusUpdateDateTime", void 0);
    return ObWriteDomesticStandingOrderResponse6Data;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderResponse6Data };
var ObWriteDomesticStandingOrderResponse6 = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderResponse6, _super);
    function ObWriteDomesticStandingOrderResponse6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteDomesticStandingOrderResponse6Data)
    ], ObWriteDomesticStandingOrderResponse6.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteDomesticStandingOrderResponse6.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteDomesticStandingOrderResponse6.prototype, "meta", void 0);
    return ObWriteDomesticStandingOrderResponse6;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderResponse6 };
