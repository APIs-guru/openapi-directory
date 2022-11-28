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
export var ObReadConsent1DataPermissionsEnum;
(function (ObReadConsent1DataPermissionsEnum) {
    ObReadConsent1DataPermissionsEnum["ReadAccountsBasic"] = "ReadAccountsBasic";
    ObReadConsent1DataPermissionsEnum["ReadAccountsDetail"] = "ReadAccountsDetail";
    ObReadConsent1DataPermissionsEnum["ReadBalances"] = "ReadBalances";
    ObReadConsent1DataPermissionsEnum["ReadBeneficiariesBasic"] = "ReadBeneficiariesBasic";
    ObReadConsent1DataPermissionsEnum["ReadBeneficiariesDetail"] = "ReadBeneficiariesDetail";
    ObReadConsent1DataPermissionsEnum["ReadDirectDebits"] = "ReadDirectDebits";
    ObReadConsent1DataPermissionsEnum["ReadOffers"] = "ReadOffers";
    ObReadConsent1DataPermissionsEnum["ReadPan"] = "ReadPAN";
    ObReadConsent1DataPermissionsEnum["ReadParty"] = "ReadParty";
    ObReadConsent1DataPermissionsEnum["ReadPartyPsu"] = "ReadPartyPSU";
    ObReadConsent1DataPermissionsEnum["ReadProducts"] = "ReadProducts";
    ObReadConsent1DataPermissionsEnum["ReadScheduledPaymentsBasic"] = "ReadScheduledPaymentsBasic";
    ObReadConsent1DataPermissionsEnum["ReadScheduledPaymentsDetail"] = "ReadScheduledPaymentsDetail";
    ObReadConsent1DataPermissionsEnum["ReadStandingOrdersBasic"] = "ReadStandingOrdersBasic";
    ObReadConsent1DataPermissionsEnum["ReadStandingOrdersDetail"] = "ReadStandingOrdersDetail";
    ObReadConsent1DataPermissionsEnum["ReadStatementsBasic"] = "ReadStatementsBasic";
    ObReadConsent1DataPermissionsEnum["ReadStatementsDetail"] = "ReadStatementsDetail";
    ObReadConsent1DataPermissionsEnum["ReadTransactionsBasic"] = "ReadTransactionsBasic";
    ObReadConsent1DataPermissionsEnum["ReadTransactionsCredits"] = "ReadTransactionsCredits";
    ObReadConsent1DataPermissionsEnum["ReadTransactionsDebits"] = "ReadTransactionsDebits";
    ObReadConsent1DataPermissionsEnum["ReadTransactionsDetail"] = "ReadTransactionsDetail";
})(ObReadConsent1DataPermissionsEnum || (ObReadConsent1DataPermissionsEnum = {}));
var ObReadConsent1Data = /** @class */ (function (_super) {
    __extends(ObReadConsent1Data, _super);
    function ObReadConsent1Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObReadConsent1Data.prototype, "expirationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Permissions" }),
        __metadata("design:type", Array)
    ], ObReadConsent1Data.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransactionFromDateTime" }),
        __metadata("design:type", Date)
    ], ObReadConsent1Data.prototype, "transactionFromDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransactionToDateTime" }),
        __metadata("design:type", Date)
    ], ObReadConsent1Data.prototype, "transactionToDateTime", void 0);
    return ObReadConsent1Data;
}(SpeakeasyBase));
export { ObReadConsent1Data };
var ObReadConsent1 = /** @class */ (function (_super) {
    __extends(ObReadConsent1, _super);
    function ObReadConsent1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObReadConsent1Data)
    ], ObReadConsent1.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", Map)
    ], ObReadConsent1.prototype, "risk", void 0);
    return ObReadConsent1;
}(SpeakeasyBase));
export { ObReadConsent1 };
