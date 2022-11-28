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
import { ObscaSupportData1 } from "./obscasupportdata1";
import { ObRisk1 } from "./obrisk1";
export var ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum;
(function (ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum) {
    ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum["Any"] = "Any";
    ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum["Single"] = "Single";
})(ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum || (ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum = {}));
// ObWriteInternationalStandingOrderConsent6DataAuthorisation
/**
 * The authorisation type request from the TPP.
**/
var ObWriteInternationalStandingOrderConsent6DataAuthorisation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsent6DataAuthorisation, _super);
    function ObWriteInternationalStandingOrderConsent6DataAuthorisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AuthorisationType" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataAuthorisation.prototype, "authorisationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompletionDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderConsent6DataAuthorisation.prototype, "completionDateTime", void 0);
    return ObWriteInternationalStandingOrderConsent6DataAuthorisation;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsent6DataAuthorisation };
// ObWriteInternationalStandingOrderConsent6DataInitiationCreditor
/**
 * Party to which an amount of money is due.
**/
var ObWriteInternationalStandingOrderConsent6DataInitiationCreditor = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsent6DataInitiationCreditor, _super);
    function ObWriteInternationalStandingOrderConsent6DataInitiationCreditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationCreditor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationCreditor.prototype, "postalAddress", void 0);
    return ObWriteInternationalStandingOrderConsent6DataInitiationCreditor;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsent6DataInitiationCreditor };
// ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount
/**
 * Provides the details to identify the beneficiary account.
**/
var ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount, _super);
    function ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount };
// ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent
/**
 * Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
 * This is the servicer of the beneficiary account.
**/
var ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent, _super);
    function ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostalAddress" }),
        __metadata("design:type", ObPostalAddress6)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent.prototype, "postalAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent.prototype, "schemeName", void 0);
    return ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent };
// ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount
/**
 * Provides the details to identify the debtor account.
**/
var ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount, _super);
    function ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount };
// ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount
/**
 * Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
 * Usage: This amount has to be transported unchanged through the transaction chain.
**/
var ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount, _super);
    function ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Amount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount.prototype, "currency", void 0);
    return ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount };
// ObWriteInternationalStandingOrderConsent6DataInitiation
/**
 * The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
**/
var ObWriteInternationalStandingOrderConsent6DataInitiation = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsent6DataInitiation, _super);
    function ObWriteInternationalStandingOrderConsent6DataInitiation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChargeBearer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "chargeBearer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Creditor" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsent6DataInitiationCreditor)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "creditor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAccount" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "creditorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditorAgent" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "creditorAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CurrencyOfTransfer" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "currencyOfTransfer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DestinationCountryCode" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "destinationCountryCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExtendedPurpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "extendedPurpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FinalPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "finalPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstPaymentDateTime" }),
        __metadata("design:type", Date)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "firstPaymentDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Frequency" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstructedAmount" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "instructedAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NumberOfPayments" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "numberOfPayments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Purpose" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Reference" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "reference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SupplementaryData" }),
        __metadata("design:type", Map)
    ], ObWriteInternationalStandingOrderConsent6DataInitiation.prototype, "supplementaryData", void 0);
    return ObWriteInternationalStandingOrderConsent6DataInitiation;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsent6DataInitiation };
export var ObWriteInternationalStandingOrderConsent6DataPermissionEnum;
(function (ObWriteInternationalStandingOrderConsent6DataPermissionEnum) {
    ObWriteInternationalStandingOrderConsent6DataPermissionEnum["Create"] = "Create";
})(ObWriteInternationalStandingOrderConsent6DataPermissionEnum || (ObWriteInternationalStandingOrderConsent6DataPermissionEnum = {}));
export var ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum;
(function (ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum) {
    ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum["No"] = "No";
    ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum["Yes"] = "Yes";
})(ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum || (ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum = {}));
var ObWriteInternationalStandingOrderConsent6Data = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsent6Data, _super);
    function ObWriteInternationalStandingOrderConsent6Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Authorisation" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsent6DataAuthorisation)
    ], ObWriteInternationalStandingOrderConsent6Data.prototype, "authorisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Initiation" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsent6DataInitiation)
    ], ObWriteInternationalStandingOrderConsent6Data.prototype, "initiation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Permission" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6Data.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReadRefundAccount" }),
        __metadata("design:type", String)
    ], ObWriteInternationalStandingOrderConsent6Data.prototype, "readRefundAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SCASupportData" }),
        __metadata("design:type", ObscaSupportData1)
    ], ObWriteInternationalStandingOrderConsent6Data.prototype, "scaSupportData", void 0);
    return ObWriteInternationalStandingOrderConsent6Data;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsent6Data };
var ObWriteInternationalStandingOrderConsent6 = /** @class */ (function (_super) {
    __extends(ObWriteInternationalStandingOrderConsent6, _super);
    function ObWriteInternationalStandingOrderConsent6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObWriteInternationalStandingOrderConsent6Data)
    ], ObWriteInternationalStandingOrderConsent6.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", ObRisk1)
    ], ObWriteInternationalStandingOrderConsent6.prototype, "risk", void 0);
    return ObWriteInternationalStandingOrderConsent6;
}(SpeakeasyBase));
export { ObWriteInternationalStandingOrderConsent6 };
