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
import { AccountReference16Ch } from "./accountreference16ch";
import { AdditionalInformationAccess } from "./additionalinformationaccess";
export var AccountAccessAllPsd2Enum;
(function (AccountAccessAllPsd2Enum) {
    AccountAccessAllPsd2Enum["AllAccounts"] = "allAccounts";
    AccountAccessAllPsd2Enum["AllAccountsWithOwnerName"] = "allAccountsWithOwnerName";
})(AccountAccessAllPsd2Enum || (AccountAccessAllPsd2Enum = {}));
export var AccountAccessAvailableAccountsEnum;
(function (AccountAccessAvailableAccountsEnum) {
    AccountAccessAvailableAccountsEnum["AllAccounts"] = "allAccounts";
    AccountAccessAvailableAccountsEnum["AllAccountsWithOwnerName"] = "allAccountsWithOwnerName";
})(AccountAccessAvailableAccountsEnum || (AccountAccessAvailableAccountsEnum = {}));
export var AccountAccessAvailableAccountsWithBalanceEnum;
(function (AccountAccessAvailableAccountsWithBalanceEnum) {
    AccountAccessAvailableAccountsWithBalanceEnum["AllAccounts"] = "allAccounts";
    AccountAccessAvailableAccountsWithBalanceEnum["AllAccountsWithOwnerName"] = "allAccountsWithOwnerName";
})(AccountAccessAvailableAccountsWithBalanceEnum || (AccountAccessAvailableAccountsWithBalanceEnum = {}));
// AccountAccess
/**
 * Requested access services for a consent.
 *
**/
var AccountAccess = /** @class */ (function (_super) {
    __extends(AccountAccess, _super);
    function AccountAccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts", elemType: AccountReference16Ch }),
        __metadata("design:type", Array)
    ], AccountAccess.prototype, "accounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalInformation" }),
        __metadata("design:type", AdditionalInformationAccess)
    ], AccountAccess.prototype, "additionalInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allPsd2" }),
        __metadata("design:type", String)
    ], AccountAccess.prototype, "allPsd2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableAccounts" }),
        __metadata("design:type", String)
    ], AccountAccess.prototype, "availableAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availableAccountsWithBalance" }),
        __metadata("design:type", String)
    ], AccountAccess.prototype, "availableAccountsWithBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balances", elemType: AccountReference16Ch }),
        __metadata("design:type", Array)
    ], AccountAccess.prototype, "balances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictedTo" }),
        __metadata("design:type", Array)
    ], AccountAccess.prototype, "restrictedTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transactions", elemType: AccountReference16Ch }),
        __metadata("design:type", Array)
    ], AccountAccess.prototype, "transactions", void 0);
    return AccountAccess;
}(SpeakeasyBase));
export { AccountAccess };
