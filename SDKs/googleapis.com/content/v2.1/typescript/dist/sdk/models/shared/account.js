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
import { AccountAdsLink } from "./accountadslink";
import { AccountAutomaticImprovementsInput } from "./accountautomaticimprovements";
import { AccountBusinessInformation } from "./accountbusinessinformation";
import { AccountGoogleMyBusinessLink } from "./accountgooglemybusinesslink";
import { AccountUser } from "./accountuser";
import { AccountYouTubeChannelLink } from "./accountyoutubechannellink";
import { AccountAutomaticImprovements } from "./accountautomaticimprovements";
// AccountInput
/**
 * Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
**/
var AccountInput = /** @class */ (function (_super) {
    __extends(AccountInput, _super);
    function AccountInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adsLinks", elemType: AccountAdsLink }),
        __metadata("design:type", Array)
    ], AccountInput.prototype, "adsLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adultContent" }),
        __metadata("design:type", Boolean)
    ], AccountInput.prototype, "adultContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automaticImprovements" }),
        __metadata("design:type", AccountAutomaticImprovementsInput)
    ], AccountInput.prototype, "automaticImprovements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automaticLabelIds" }),
        __metadata("design:type", Array)
    ], AccountInput.prototype, "automaticLabelIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessInformation" }),
        __metadata("design:type", AccountBusinessInformation)
    ], AccountInput.prototype, "businessInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cssId" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "cssId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleMyBusinessLink" }),
        __metadata("design:type", AccountGoogleMyBusinessLink)
    ], AccountInput.prototype, "googleMyBusinessLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelIds" }),
        __metadata("design:type", Array)
    ], AccountInput.prototype, "labelIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerId" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "sellerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users", elemType: AccountUser }),
        __metadata("design:type", Array)
    ], AccountInput.prototype, "users", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websiteUrl" }),
        __metadata("design:type", String)
    ], AccountInput.prototype, "websiteUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=youtubeChannelLinks", elemType: AccountYouTubeChannelLink }),
        __metadata("design:type", Array)
    ], AccountInput.prototype, "youtubeChannelLinks", void 0);
    return AccountInput;
}(SpeakeasyBase));
export { AccountInput };
// Account
/**
 * Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.
**/
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountManagement" }),
        __metadata("design:type", String)
    ], Account.prototype, "accountManagement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adsLinks", elemType: AccountAdsLink }),
        __metadata("design:type", Array)
    ], Account.prototype, "adsLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adultContent" }),
        __metadata("design:type", Boolean)
    ], Account.prototype, "adultContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automaticImprovements" }),
        __metadata("design:type", AccountAutomaticImprovements)
    ], Account.prototype, "automaticImprovements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automaticLabelIds" }),
        __metadata("design:type", Array)
    ], Account.prototype, "automaticLabelIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=businessInformation" }),
        __metadata("design:type", AccountBusinessInformation)
    ], Account.prototype, "businessInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cssId" }),
        __metadata("design:type", String)
    ], Account.prototype, "cssId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleMyBusinessLink" }),
        __metadata("design:type", AccountGoogleMyBusinessLink)
    ], Account.prototype, "googleMyBusinessLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Account.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Account.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelIds" }),
        __metadata("design:type", Array)
    ], Account.prototype, "labelIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Account.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sellerId" }),
        __metadata("design:type", String)
    ], Account.prototype, "sellerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users", elemType: AccountUser }),
        __metadata("design:type", Array)
    ], Account.prototype, "users", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=websiteUrl" }),
        __metadata("design:type", String)
    ], Account.prototype, "websiteUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=youtubeChannelLinks", elemType: AccountYouTubeChannelLink }),
        __metadata("design:type", Array)
    ], Account.prototype, "youtubeChannelLinks", void 0);
    return Account;
}(SpeakeasyBase));
export { Account };
