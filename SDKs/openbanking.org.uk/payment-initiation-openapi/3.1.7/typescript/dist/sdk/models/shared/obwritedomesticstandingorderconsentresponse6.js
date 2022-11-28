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
import { ObscaSupportData1 } from "./obscasupportdata1";
import { Links } from "./links";
import { Meta } from "./meta";
import { ObRisk1 } from "./obrisk1";
export var ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum;
(function (ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum) {
    ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum["Any"] = "Any";
    ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum["Single"] = "Single";
})(ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum || (ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum = {}));
// ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation
/**
 * The authorisation type request from the TPP.
**/
var ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation, _super);
    function ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation.prototype, "completionDateTime", void 0);
    return ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation };
// ObWriteDomesticStandingOrderConsentResponse6DataCharges
/**
 * Set of elements used to provide details of a charge for the payment initiation.
**/
var ObWriteDomesticStandingOrderConsentResponse6DataCharges = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsentResponse6DataCharges, _super);
    function ObWriteDomesticStandingOrderConsentResponse6DataCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", ObActiveOrHistoricCurrencyAndAmount)
    ], ObWriteDomesticStandingOrderConsentResponse6DataCharges.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataCharges.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataCharges.prototype, "type", void 0);
    return ObWriteDomesticStandingOrderConsentResponse6DataCharges;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsentResponse6DataCharges };
// ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount
/**
 * Identification assigned by an institution to identify an account. This identification is known by the account owner.
**/
var ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount, _super);
    function ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount };
// ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
**/
var ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount, _super);
    function ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount };
// ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount
/**
 * The amount of the final Standing Order
**/
var ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount, _super);
    function ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount.prototype, "currency", void 0);
    return ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount };
// ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount
/**
 * The amount of the first Standing Order
**/
var ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount, _super);
    function ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount.prototype, "currency", void 0);
    return ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount };
// ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount
/**
 * The amount of the recurring Standing Order
**/
var ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount, _super);
    function ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount.prototype, "currency", void 0);
    return ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount };
// ObWriteDomesticStandingOrderConsentResponse6DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
**/
var ObWriteDomesticStandingOrderConsentResponse6DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsentResponse6DataInitiation, _super);
    function ObWriteDomesticStandingOrderConsentResponse6DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalPaymentAmount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiation.prototype, "finalPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiation.prototype, "finalPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstPaymentAmount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiation.prototype, "firstPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiation.prototype, "firstPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Frequency" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiation.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfPayments" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiation.prototype, "numberOfPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringPaymentAmount" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiation.prototype, "recurringPaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecurringPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiation.prototype, "recurringPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteDomesticStandingOrderConsentResponse6DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteDomesticStandingOrderConsentResponse6DataInitiation;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsentResponse6DataInitiation };
export var ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum;
(function (ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum) {
    ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum["Create"] = "Create";
})(ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum || (ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum = {}));
export var ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum;
(function (ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum) {
    ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum["No"] = "No";
    ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum["Yes"] = "Yes";
})(ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum || (ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum = {}));
export var ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum;
(function (ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum) {
    ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum["Authorised"] = "Authorised";
    ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum["AwaitingAuthorisation"] = "AwaitingAuthorisation";
    ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum["Consumed"] = "Consumed";
    ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum["Rejected"] = "Rejected";
})(ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum || (ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum = {}));
var ObWriteDomesticStandingOrderConsentResponse6Data = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsentResponse6Data, _super);
    function ObWriteDomesticStandingOrderConsentResponse6Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Authorisation" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation)
    ], ObWriteDomesticStandingOrderConsentResponse6Data.prototype, "authorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Charges", elemType: ObWriteDomesticStandingOrderConsentResponse6DataCharges }),
        __metadata("design:type", Array)
    ], ObWriteDomesticStandingOrderConsentResponse6Data.prototype, "charges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderConsentResponse6Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CutOffDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderConsentResponse6Data.prototype, "cutOffDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Debtor" }),
        __metadata("design:type", ObCashAccountDebtor4)
    ], ObWriteDomesticStandingOrderConsentResponse6Data.prototype, "debtor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsentResponse6DataInitiation)
    ], ObWriteDomesticStandingOrderConsentResponse6Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Permission" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6Data.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6Data.prototype, "readRefundAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SCASupportData" }),
        __metadata("design:type", ObscaSupportData1)
    ], ObWriteDomesticStandingOrderConsentResponse6Data.prototype, "scaSupportData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObWriteDomesticStandingOrderConsentResponse6Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteDomesticStandingOrderConsentResponse6Data.prototype, "statusUpdateDateTime", void 0);
    return ObWriteDomesticStandingOrderConsentResponse6Data;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsentResponse6Data };
var ObWriteDomesticStandingOrderConsentResponse6 = /** @class */ (function (_super) {
    __extends(ObWriteDomesticStandingOrderConsentResponse6, _super);
    function ObWriteDomesticStandingOrderConsentResponse6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteDomesticStandingOrderConsentResponse6Data)
    ], ObWriteDomesticStandingOrderConsentResponse6.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObWriteDomesticStandingOrderConsentResponse6.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObWriteDomesticStandingOrderConsentResponse6.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteDomesticStandingOrderConsentResponse6.prototype, "risk", void 0);
    return ObWriteDomesticStandingOrderConsentResponse6;
}(SpeakeasyBase));
export { ObWriteDomesticStandingOrderConsentResponse6 };
