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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationInfo } from "./organizationinfo";
export var AccountPermissionLevelEnum;
(function (AccountPermissionLevelEnum) {
    AccountPermissionLevelEnum["PermissionLevelUnspecified"] = "PERMISSION_LEVEL_UNSPECIFIED";
    AccountPermissionLevelEnum["OwnerLevel"] = "OWNER_LEVEL";
    AccountPermissionLevelEnum["MemberLevel"] = "MEMBER_LEVEL";
})(AccountPermissionLevelEnum || (AccountPermissionLevelEnum = {}));
export var AccountRoleEnum;
(function (AccountRoleEnum) {
    AccountRoleEnum["AccountRoleUnspecified"] = "ACCOUNT_ROLE_UNSPECIFIED";
    AccountRoleEnum["PrimaryOwner"] = "PRIMARY_OWNER";
    AccountRoleEnum["Owner"] = "OWNER";
    AccountRoleEnum["Manager"] = "MANAGER";
    AccountRoleEnum["SiteManager"] = "SITE_MANAGER";
})(AccountRoleEnum || (AccountRoleEnum = {}));
export var AccountTypeEnum;
(function (AccountTypeEnum) {
    AccountTypeEnum["AccountTypeUnspecified"] = "ACCOUNT_TYPE_UNSPECIFIED";
    AccountTypeEnum["Personal"] = "PERSONAL";
    AccountTypeEnum["LocationGroup"] = "LOCATION_GROUP";
    AccountTypeEnum["UserGroup"] = "USER_GROUP";
    AccountTypeEnum["Organization"] = "ORGANIZATION";
})(AccountTypeEnum || (AccountTypeEnum = {}));
export var AccountVerificationStateEnum;
(function (AccountVerificationStateEnum) {
    AccountVerificationStateEnum["VerificationStateUnspecified"] = "VERIFICATION_STATE_UNSPECIFIED";
    AccountVerificationStateEnum["Verified"] = "VERIFIED";
    AccountVerificationStateEnum["Unverified"] = "UNVERIFIED";
    AccountVerificationStateEnum["VerificationRequested"] = "VERIFICATION_REQUESTED";
})(AccountVerificationStateEnum || (AccountVerificationStateEnum = {}));
export var AccountVettedStateEnum;
(function (AccountVettedStateEnum) {
    AccountVettedStateEnum["VettedStateUnspecified"] = "VETTED_STATE_UNSPECIFIED";
    AccountVettedStateEnum["NotVetted"] = "NOT_VETTED";
    AccountVettedStateEnum["Vetted"] = "VETTED";
    AccountVettedStateEnum["Invalid"] = "INVALID";
})(AccountVettedStateEnum || (AccountVettedStateEnum = {}));
// Account
/**
 * An account is a container for your location. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
**/
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=accountName" }),
        __metadata("design:type", String)
    ], Account.prototype, "accountName", void 0);
    __decorate([
        Metadata({ data: "json, name=accountNumber" }),
        __metadata("design:type", String)
    ], Account.prototype, "accountNumber", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Account.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=organizationInfo" }),
        __metadata("design:type", OrganizationInfo)
    ], Account.prototype, "organizationInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=permissionLevel" }),
        __metadata("design:type", String)
    ], Account.prototype, "permissionLevel", void 0);
    __decorate([
        Metadata({ data: "json, name=primaryOwner" }),
        __metadata("design:type", String)
    ], Account.prototype, "primaryOwner", void 0);
    __decorate([
        Metadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], Account.prototype, "role", void 0);
    __decorate([
        Metadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Account.prototype, "type", void 0);
    __decorate([
        Metadata({ data: "json, name=verificationState" }),
        __metadata("design:type", String)
    ], Account.prototype, "verificationState", void 0);
    __decorate([
        Metadata({ data: "json, name=vettedState" }),
        __metadata("design:type", String)
    ], Account.prototype, "vettedState", void 0);
    return Account;
}(SpeakeasyBase));
export { Account };
