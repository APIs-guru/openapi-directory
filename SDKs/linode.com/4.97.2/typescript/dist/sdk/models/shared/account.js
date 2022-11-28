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
import { Promotion } from "./promotion";
// AccountCreditCard
/**
 * Credit Card information associated with this Account.
**/
var AccountCreditCard = /** @class */ (function (_super) {
    __extends(AccountCreditCard, _super);
    function AccountCreditCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiry" }),
        __metadata("design:type", String)
    ], AccountCreditCard.prototype, "expiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_four" }),
        __metadata("design:type", String)
    ], AccountCreditCard.prototype, "lastFour", void 0);
    return AccountCreditCard;
}(SpeakeasyBase));
export { AccountCreditCard };
// AccountInput
/**
 * Account object
**/
var AccountInput = /** @class */ (function (_super) {
    __extends(AccountInput, _super);
    function AccountInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active_promotions", elemType: Promotion }),
        __metadata("design:type", Array)
    ], AccountInput.prototype, "activePromotions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_1" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_2" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_id" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "taxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "zip", void 0);
    return AccountInput;
}(SpeakeasyBase));
export { AccountInput };
// Account
/**
 * Account object
**/
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active_promotions", elemType: Promotion }),
        __metadata("design:type", Array)
    ], Account.prototype, "activePromotions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active_since" }),
        __metadata("design:type", Date)
    ], Account.prototype, "activeSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_1" }),
        __metadata("design:type", String)
    ], Account.prototype, "address1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address_2" }),
        __metadata("design:type", String)
    ], Account.prototype, "address2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance" }),
        __metadata("design:type", Number)
    ], Account.prototype, "balance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=balance_uninvoiced" }),
        __metadata("design:type", Number)
    ], Account.prototype, "balanceUninvoiced", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilities" }),
        __metadata("design:type", Array)
    ], Account.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], Account.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", String)
    ], Account.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], Account.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credit_card" }),
        __metadata("design:type", AccountCreditCard)
    ], Account.prototype, "creditCard", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], Account.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=euuid" }),
        __metadata("design:type", String)
    ], Account.prototype, "euuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], Account.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], Account.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], Account.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Account.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tax_id" }),
        __metadata("design:type", String)
    ], Account.prototype, "taxId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zip" }),
        __metadata("design:type", String)
    ], Account.prototype, "zip", void 0);
    return Account;
}(SpeakeasyBase));
export { Account };
