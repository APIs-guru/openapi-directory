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
import { ObExternalAccountSubType1CodeEnum } from "./obexternalaccountsubtype1codeenum";
import { ObExternalAccountType1CodeEnum } from "./obexternalaccounttype1codeenum";
import { ObBranchAndFinancialInstitutionIdentification50 } from "./obbranchandfinancialinstitutionidentification50";
import { ObAccountStatus1CodeEnum } from "./obaccountstatus1codeenum";
// ObAccount6Account
/**
 * Provides the details to identify an account.
**/
var ObAccount6Account = /** @class */ (function (_super) {
    __extends(ObAccount6Account, _super);
    function ObAccount6Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Identification" }),
        __metadata("design:type", String)
    ], ObAccount6Account.prototype, "identification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObAccount6Account.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemeName" }),
        __metadata("design:type", String)
    ], ObAccount6Account.prototype, "schemeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" }),
        __metadata("design:type", String)
    ], ObAccount6Account.prototype, "secondaryIdentification", void 0);
    return ObAccount6Account;
}(SpeakeasyBase));
export { ObAccount6Account };
// ObAccount6
/**
 * Unambiguous identification of the account to which credit and debit entries are made. The following fields are optional only for accounts that are switched:
 *
 *   * Data.Currency
 *   * Data.AccountType
 *   * Data.AccountSubType
 *
 * For all other accounts, the fields must be populated by the ASPSP.
**/
var ObAccount6 = /** @class */ (function (_super) {
    __extends(ObAccount6, _super);
    function ObAccount6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Account", elemType: ObAccount6Account }),
        __metadata("design:type", Array)
    ], ObAccount6.prototype, "account", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountId" }),
        __metadata("design:type", String)
    ], ObAccount6.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountSubType" }),
        __metadata("design:type", String)
    ], ObAccount6.prototype, "accountSubType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountType" }),
        __metadata("design:type", String)
    ], ObAccount6.prototype, "accountType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", String)
    ], ObAccount6.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ObAccount6.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaturityDate" }),
        __metadata("design:type", Date)
    ], ObAccount6.prototype, "maturityDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Nickname" }),
        __metadata("design:type", String)
    ], ObAccount6.prototype, "nickname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDate" }),
        __metadata("design:type", Date)
    ], ObAccount6.prototype, "openingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Servicer" }),
        __metadata("design:type", ObBranchAndFinancialInstitutionIdentification50)
    ], ObAccount6.prototype, "servicer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], ObAccount6.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" }),
        __metadata("design:type", Date)
    ], ObAccount6.prototype, "statusUpdateDateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SwitchStatus" }),
        __metadata("design:type", String)
    ], ObAccount6.prototype, "switchStatus", void 0);
    return ObAccount6;
}(SpeakeasyBase));
export { ObAccount6 };
