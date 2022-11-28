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
import { ObjectFilter } from "./objectfilter";
export var AccountUserProfileTraffickerTypeEnum;
(function (AccountUserProfileTraffickerTypeEnum) {
    AccountUserProfileTraffickerTypeEnum["InternalNonTrafficker"] = "INTERNAL_NON_TRAFFICKER";
    AccountUserProfileTraffickerTypeEnum["InternalTrafficker"] = "INTERNAL_TRAFFICKER";
    AccountUserProfileTraffickerTypeEnum["ExternalTrafficker"] = "EXTERNAL_TRAFFICKER";
})(AccountUserProfileTraffickerTypeEnum || (AccountUserProfileTraffickerTypeEnum = {}));
export var AccountUserProfileUserAccessTypeEnum;
(function (AccountUserProfileUserAccessTypeEnum) {
    AccountUserProfileUserAccessTypeEnum["NormalUser"] = "NORMAL_USER";
    AccountUserProfileUserAccessTypeEnum["SuperUser"] = "SUPER_USER";
    AccountUserProfileUserAccessTypeEnum["InternalAdministrator"] = "INTERNAL_ADMINISTRATOR";
    AccountUserProfileUserAccessTypeEnum["ReadOnlySuperUser"] = "READ_ONLY_SUPER_USER";
})(AccountUserProfileUserAccessTypeEnum || (AccountUserProfileUserAccessTypeEnum = {}));
// AccountUserProfile
/**
 * AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.
**/
var AccountUserProfile = /** @class */ (function (_super) {
    __extends(AccountUserProfile, _super);
    function AccountUserProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], AccountUserProfile.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], AccountUserProfile.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserFilter" }),
        __metadata("design:type", ObjectFilter)
    ], AccountUserProfile.prototype, "advertiserFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=campaignFilter" }),
        __metadata("design:type", ObjectFilter)
    ], AccountUserProfile.prototype, "campaignFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", String)
    ], AccountUserProfile.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AccountUserProfile.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountUserProfile.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], AccountUserProfile.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], AccountUserProfile.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AccountUserProfile.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteFilter" }),
        __metadata("design:type", ObjectFilter)
    ], AccountUserProfile.prototype, "siteFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], AccountUserProfile.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=traffickerType" }),
        __metadata("design:type", String)
    ], AccountUserProfile.prototype, "traffickerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userAccessType" }),
        __metadata("design:type", String)
    ], AccountUserProfile.prototype, "userAccessType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userRoleFilter" }),
        __metadata("design:type", ObjectFilter)
    ], AccountUserProfile.prototype, "userRoleFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userRoleId" }),
        __metadata("design:type", String)
    ], AccountUserProfile.prototype, "userRoleId", void 0);
    return AccountUserProfile;
}(SpeakeasyBase));
export { AccountUserProfile };
