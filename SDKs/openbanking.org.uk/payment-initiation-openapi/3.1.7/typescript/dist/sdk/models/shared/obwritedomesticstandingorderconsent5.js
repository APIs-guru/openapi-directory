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
import { ObscaSupportData1 } from "./obscasupportdata1";
import { ObRisk1 } from "./obrisk1";
export var ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum;
(function (ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum) {
    ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum["Any"] = "Any";
    ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum["Single"] = "Single";
})(ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum || (ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum = {}));
// ObWriteDomesticStandingOrderConsent5DataAuthorisation
/**
 * The authorisation type request from the TPP.
**/
var ObWriteDomesticStandingOrderConsent5DataAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsent5DataAuthorisation, _super);
    function ObWriteDomesticStandingOrderConsent5DataAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataAuthorisation.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderConsent5DataAuthorisation.prototype, "completionDateTime", void 0);
    return ObWriteDomesticStandingOrderConsent5DataAuthorisation;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsent5DataAuthorisation };
// ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount
/**
 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
**/
var ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount, _super);
    function ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount };
// ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount
/**
 * Provides the details to identify the debtor account.
**/
var ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount, _super);
    function ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount };
// ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount
/**
 * The amount of the final Standing Order
**/
var ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount, _super);
    function ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount.prototype, "currency", void 0);
    return ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount };
// ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount
/**
 * The amount of the first Standing Order
**/
var ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount, _super);
    function ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount.prototype, "currency", void 0);
    return ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount };
// ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount
/**
 * The amount of the recurring Standing Order
**/
var ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount, _super);
    function ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount.prototype, "currency", void 0);
    return ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount };
// ObWriteDomesticStandingOrderConsent5DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
var ObWriteDomesticStandingOrderConsent5DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsent5DataInitiation, _super);
    function ObWriteDomesticStandingOrderConsent5DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount)
    ], ObWriteDomesticStandingOrderConsent5DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount)
    ], ObWriteDomesticStandingOrderConsent5DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalPaymentAmount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount)
    ], ObWriteDomesticStandingOrderConsent5DataInitiation.prototype, "finalPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderConsent5DataInitiation.prototype, "finalPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstPaymentAmount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount)
    ], ObWriteDomesticStandingOrderConsent5DataInitiation.prototype, "firstPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderConsent5DataInitiation.prototype, "firstPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Frequency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiation.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfPayments" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiation.prototype, "numberOfPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringPaymentAmount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount)
    ], ObWriteDomesticStandingOrderConsent5DataInitiation.prototype, "recurringPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderConsent5DataInitiation.prototype, "recurringPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5DataInitiation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteDomesticStandingOrderConsent5DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteDomesticStandingOrderConsent5DataInitiation;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsent5DataInitiation };
export var ObWriteDomesticStandingOrderConsent5DataPermissionEnum;
(function (ObWriteDomesticStandingOrderConsent5DataPermissionEnum) {
    ObWriteDomesticStandingOrderConsent5DataPermissionEnum["Create"] = "Create";
})(ObWriteDomesticStandingOrderConsent5DataPermissionEnum || (ObWriteDomesticStandingOrderConsent5DataPermissionEnum = {}));
export var ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum;
(function (ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum) {
    ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum["No"] = "No";
    ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum["Yes"] = "Yes";
})(ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum || (ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum = {}));
var ObWriteDomesticStandingOrderConsent5Data = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsent5Data, _super);
    function ObWriteDomesticStandingOrderConsent5Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Authorisation" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsent5DataAuthorisation)
    ], ObWriteDomesticStandingOrderConsent5Data.prototype, "authorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsent5DataInitiation)
    ], ObWriteDomesticStandingOrderConsent5Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Permission" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5Data.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsent5Data.prototype, "readRefundAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SCASupportData" }),
        __metadata("design:type", ObscaSupportData1)
    ], ObWriteDomesticStandingOrderConsent5Data.prototype, "scaSupportData", void 0);
    return ObWriteDomesticStandingOrderConsent5Data;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsent5Data };
var ObWriteDomesticStandingOrderConsent5 = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsent5, _super);
    function ObWriteDomesticStandingOrderConsent5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsent5Data)
    ], ObWriteDomesticStandingOrderConsent5.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteDomesticStandingOrderConsent5.prototype, "risk", void 0);
    return ObWriteDomesticStandingOrderConsent5;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsent5 };
