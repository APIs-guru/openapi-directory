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
// ObFundsConfirmationConsent1DataDebtorAccount
/**
 * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
**/
var ObFundsConfirmationConsent1DataDebtorAccount = /** @class */ (function (_super) {
    __extends(ObFundsConfirmationConsent1DataDebtorAccount, _super);
    function ObFundsConfirmationConsent1DataDebtorAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationConsent1DataDebtorAccount.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationConsent1DataDebtorAccount.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationConsent1DataDebtorAccount.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObFundsConfirmationConsent1DataDebtorAccount.prototype, "secondaryIdentification", void 0);
    return ObFundsConfirmationConsent1DataDebtorAccount;
}(SpeakeasyBase));
export { ObFundsConfirmationConsent1DataDebtorAccount };
var ObFundsConfirmationConsent1Data = /** @class */ (function (_super) {
    __extends(ObFundsConfirmationConsent1Data, _super);
    function ObFundsConfirmationConsent1Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DebtorAccount" }),
        __metadata("design:type", ObFundsConfirmationConsent1DataDebtorAccount)
    ], ObFundsConfirmationConsent1Data.prototype, "debtorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObFundsConfirmationConsent1Data.prototype, "expirationDateTime", void 0);
    return ObFundsConfirmationConsent1Data;
}(SpeakeasyBase));
export { ObFundsConfirmationConsent1Data };
var ObFundsConfirmationConsent1 = /** @class */ (function (_super) {
    __extends(ObFundsConfirmationConsent1, _super);
    function ObFundsConfirmationConsent1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObFundsConfirmationConsent1Data)
    ], ObFundsConfirmationConsent1.prototype, "data", void 0);
    return ObFundsConfirmationConsent1;
}(SpeakeasyBase));
export { ObFundsConfirmationConsent1 };
