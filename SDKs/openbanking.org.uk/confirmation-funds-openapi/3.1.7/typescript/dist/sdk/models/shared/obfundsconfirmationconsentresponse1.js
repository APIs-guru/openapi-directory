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
import { Links } from "./links";
import { Meta } from "./meta";
// ObFundsConfirmationConsentResponse1DataDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
**/
var ObFundsConfirmationConsentResponse1DataDebtorAccount = /** @class */ (function (_super) {
    __extends(ObFundsConfirmationConsentResponse1DataDebtorAccount, _super);
    function ObFundsConfirmationConsentResponse1DataDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationConsentResponse1DataDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationConsentResponse1DataDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationConsentResponse1DataDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationConsentResponse1DataDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObFundsConfirmationConsentResponse1DataDebtorAccount;
}(SpeakeasyBase));
export { ObFundsConfirmationConsentResponse1DataDebtorAccount };
export var ObFundsConfirmationConsentResponse1DataStatusEnum;
(function (ObFundsConfirmationConsentResponse1DataStatusEnum) {
    ObFundsConfirmationConsentResponse1DataStatusEnum["Authorised"] = "Authorised";
    ObFundsConfirmationConsentResponse1DataStatusEnum["AwaitingAuthorisation"] = "AwaitingAuthorisation";
    ObFundsConfirmationConsentResponse1DataStatusEnum["Rejected"] = "Rejected";
    ObFundsConfirmationConsentResponse1DataStatusEnum["Revoked"] = "Revoked";
})(ObFundsConfirmationConsentResponse1DataStatusEnum || (ObFundsConfirmationConsentResponse1DataStatusEnum = {}));
var ObFundsConfirmationConsentResponse1Data = /** @class */ (function (_super) {
    __extends(ObFundsConfirmationConsentResponse1Data, _super);
    function ObFundsConfirmationConsentResponse1Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationConsentResponse1Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObFundsConfirmationConsentResponse1Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObFundsConfirmationConsentResponse1DataDebtorAccount)
    ], ObFundsConfirmationConsentResponse1Data.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObFundsConfirmationConsentResponse1Data.prototype, "expirationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationConsentResponse1Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObFundsConfirmationConsentResponse1Data.prototype, "statusUpdateDateTime", void 0);
    return ObFundsConfirmationConsentResponse1Data;
}(SpeakeasyBase));
export { ObFundsConfirmationConsentResponse1Data };
var ObFundsConfirmationConsentResponse1 = /** @class */ (function (_super) {
    __extends(ObFundsConfirmationConsentResponse1, _super);
    function ObFundsConfirmationConsentResponse1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObFundsConfirmationConsentResponse1Data)
    ], ObFundsConfirmationConsentResponse1.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObFundsConfirmationConsentResponse1.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObFundsConfirmationConsentResponse1.prototype, "meta", void 0);
    return ObFundsConfirmationConsentResponse1;
}(SpeakeasyBase));
export { ObFundsConfirmationConsentResponse1 };
