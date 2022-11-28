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
export var ObReadConsentResponse1DataPermissionsEnum;
(function (ObReadConsentResponse1DataPermissionsEnum) {
    ObReadConsentResponse1DataPermissionsEnum["ReadAccountsBasic"] = "ReadAccountsBasic";
    ObReadConsentResponse1DataPermissionsEnum["ReadAccountsDetail"] = "ReadAccountsDetail";
    ObReadConsentResponse1DataPermissionsEnum["ReadBalances"] = "ReadBalances";
    ObReadConsentResponse1DataPermissionsEnum["ReadBeneficiariesBasic"] = "ReadBeneficiariesBasic";
    ObReadConsentResponse1DataPermissionsEnum["ReadBeneficiariesDetail"] = "ReadBeneficiariesDetail";
    ObReadConsentResponse1DataPermissionsEnum["ReadDirectDebits"] = "ReadDirectDebits";
    ObReadConsentResponse1DataPermissionsEnum["ReadOffers"] = "ReadOffers";
    ObReadConsentResponse1DataPermissionsEnum["ReadPan"] = "ReadPAN";
    ObReadConsentResponse1DataPermissionsEnum["ReadParty"] = "ReadParty";
    ObReadConsentResponse1DataPermissionsEnum["ReadPartyPsu"] = "ReadPartyPSU";
    ObReadConsentResponse1DataPermissionsEnum["ReadProducts"] = "ReadProducts";
    ObReadConsentResponse1DataPermissionsEnum["ReadScheduledPaymentsBasic"] = "ReadScheduledPaymentsBasic";
    ObReadConsentResponse1DataPermissionsEnum["ReadScheduledPaymentsDetail"] = "ReadScheduledPaymentsDetail";
    ObReadConsentResponse1DataPermissionsEnum["ReadStandingOrdersBasic"] = "ReadStandingOrdersBasic";
    ObReadConsentResponse1DataPermissionsEnum["ReadStandingOrdersDetail"] = "ReadStandingOrdersDetail";
    ObReadConsentResponse1DataPermissionsEnum["ReadStatementsBasic"] = "ReadStatementsBasic";
    ObReadConsentResponse1DataPermissionsEnum["ReadStatementsDetail"] = "ReadStatementsDetail";
    ObReadConsentResponse1DataPermissionsEnum["ReadTransactionsBasic"] = "ReadTransactionsBasic";
    ObReadConsentResponse1DataPermissionsEnum["ReadTransactionsCredits"] = "ReadTransactionsCredits";
    ObReadConsentResponse1DataPermissionsEnum["ReadTransactionsDebits"] = "ReadTransactionsDebits";
    ObReadConsentResponse1DataPermissionsEnum["ReadTransactionsDetail"] = "ReadTransactionsDetail";
})(ObReadConsentResponse1DataPermissionsEnum || (ObReadConsentResponse1DataPermissionsEnum = {}));
export var ObReadConsentResponse1DataStatusEnum;
(function (ObReadConsentResponse1DataStatusEnum) {
    ObReadConsentResponse1DataStatusEnum["Authorised"] = "Authorised";
    ObReadConsentResponse1DataStatusEnum["AwaitingAuthorisation"] = "AwaitingAuthorisation";
    ObReadConsentResponse1DataStatusEnum["Rejected"] = "Rejected";
    ObReadConsentResponse1DataStatusEnum["Revoked"] = "Revoked";
})(ObReadConsentResponse1DataStatusEnum || (ObReadConsentResponse1DataStatusEnum = {}));
var ObReadConsentResponse1Data = /** @class */ (function (_super) {
    __extends(ObReadConsentResponse1Data, _super);
    function ObReadConsentResponse1Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConsentId" }),
        __metadata("design:type", String)
    ], ObReadConsentResponse1Data.prototype, "consentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDateTime" }),
        __metadata("design:type", Date)
    ], ObReadConsentResponse1Data.prototype, "creationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" }),
        __metadata("design:type", Date)
    ], ObReadConsentResponse1Data.prototype, "expirationDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Permissions" }),
        __metadata("design:type", Array)
    ], ObReadConsentResponse1Data.prototype, "permissions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObReadConsentResponse1Data.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObReadConsentResponse1Data.prototype, "statusUpdateDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransactionFromDateTime" }),
        __metadata("design:type", Date)
    ], ObReadConsentResponse1Data.prototype, "transactionFromDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TransactionToDateTime" }),
        __metadata("design:type", Date)
    ], ObReadConsentResponse1Data.prototype, "transactionToDateTime", void 0);
    return ObReadConsentResponse1Data;
}(SpeakeasyBase));
export { ObReadConsentResponse1Data };
var ObReadConsentResponse1 = /** @class */ (function (_super) {
    __extends(ObReadConsentResponse1, _super);
    function ObReadConsentResponse1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Data" }),
        __metadata("design:type", ObReadConsentResponse1Data)
    ], ObReadConsentResponse1.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Links" }),
        __metadata("design:type", Links)
    ], ObReadConsentResponse1.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Meta" }),
        __metadata("design:type", Meta)
    ], ObReadConsentResponse1.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Risk" }),
        __metadata("design:type", Map)
    ], ObReadConsentResponse1.prototype, "risk", void 0);
    return ObReadConsentResponse1;
}(SpeakeasyBase));
export { ObReadConsentResponse1 };
