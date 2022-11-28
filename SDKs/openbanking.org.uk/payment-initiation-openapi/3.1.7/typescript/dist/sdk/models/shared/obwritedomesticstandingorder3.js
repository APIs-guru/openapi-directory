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
import { ObRisk1 } from "./obrisk1";
// ObWriteDomesticStandingOrder3DataInitiationCreditorAccount
/**
 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
**/
var ObWriteDomesticStandingOrder3DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrder3DataInitiationCreditorAccount, _super);
    function ObWriteDomesticStandingOrder3DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticStandingOrder3DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrder3DataInitiationCreditorAccount };
// ObWriteDomesticStandingOrder3DataInitiationDebtorAccount
/**
 * Provides the details to identify the debtor account.
**/
var ObWriteDomesticStandingOrder3DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrder3DataInitiationDebtorAccount, _super);
    function ObWriteDomesticStandingOrder3DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticStandingOrder3DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrder3DataInitiationDebtorAccount };
// ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount
/**
 * The amount of the final Standing Order
**/
var ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount, _super);
    function ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount.prototype, "currency", void 0);
    return ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount };
// ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount
/**
 * The amount of the first Standing Order
**/
var ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount, _super);
    function ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount.prototype, "currency", void 0);
    return ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount };
// ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount
/**
 * The amount of the recurring Standing Order
**/
var ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount, _super);
    function ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount.prototype, "currency", void 0);
    return ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount };
// ObWriteDomesticStandingOrder3DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
var ObWriteDomesticStandingOrder3DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrder3DataInitiation, _super);
    function ObWriteDomesticStandingOrder3DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteDomesticStandingOrder3DataInitiationCreditorAccount)
    ], ObWriteDomesticStandingOrder3DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteDomesticStandingOrder3DataInitiationDebtorAccount)
    ], ObWriteDomesticStandingOrder3DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalPaymentAmount" }),
        __metadata("design:type", ObWriteDomesticStandingOrder3DataInitiationFinalPaymentAmount)
    ], ObWriteDomesticStandingOrder3DataInitiation.prototype, "finalPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrder3DataInitiation.prototype, "finalPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstPaymentAmount" }),
        __metadata("design:type", ObWriteDomesticStandingOrder3DataInitiationFirstPaymentAmount)
    ], ObWriteDomesticStandingOrder3DataInitiation.prototype, "firstPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrder3DataInitiation.prototype, "firstPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Frequency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiation.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfPayments" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiation.prototype, "numberOfPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringPaymentAmount" }),
        __metadata("design:type", ObWriteDomesticStandingOrder3DataInitiationRecurringPaymentAmount)
    ], ObWriteDomesticStandingOrder3DataInitiation.prototype, "recurringPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrder3DataInitiation.prototype, "recurringPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3DataInitiation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteDomesticStandingOrder3DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteDomesticStandingOrder3DataInitiation;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrder3DataInitiation };
var ObWriteDomesticStandingOrder3Data = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrder3Data, _super);
    function ObWriteDomesticStandingOrder3Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrder3Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteDomesticStandingOrder3DataInitiation)
    ], ObWriteDomesticStandingOrder3Data.prototype, "initiation", void 0);
    return ObWriteDomesticStandingOrder3Data;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrder3Data };
var ObWriteDomesticStandingOrder3 = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrder3, _super);
    function ObWriteDomesticStandingOrder3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteDomesticStandingOrder3Data)
    ], ObWriteDomesticStandingOrder3.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteDomesticStandingOrder3.prototype, "risk", void 0);
    return ObWriteDomesticStandingOrder3;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrder3 };
