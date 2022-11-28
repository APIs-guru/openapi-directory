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
var UserInfoProviderUserInfo = /** @class */ (function (_super) {
    __extends(UserInfoProviderUserInfo, _super);
    function UserInfoProviderUserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], UserInfoProviderUserInfo.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserInfoProviderUserInfo.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federatedId" }),
        __metadata("design:type", String)
    ], UserInfoProviderUserInfo.prototype, "federatedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneNumber" }),
        __metadata("design:type", String)
    ], UserInfoProviderUserInfo.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoUrl" }),
        __metadata("design:type", String)
    ], UserInfoProviderUserInfo.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerId" }),
        __metadata("design:type", String)
    ], UserInfoProviderUserInfo.prototype, "providerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rawId" }),
        __metadata("design:type", String)
    ], UserInfoProviderUserInfo.prototype, "rawId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screenName" }),
        __metadata("design:type", String)
    ], UserInfoProviderUserInfo.prototype, "screenName", void 0);
    return UserInfoProviderUserInfo;
}(SpeakeasyBase));
export { UserInfoProviderUserInfo };
// UserInfo
/**
 * Template for an individual account info.
**/
var UserInfo = /** @class */ (function (_super) {
    __extends(UserInfo, _super);
    function UserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customAttributes" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "customAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customAuth" }),
        __metadata("design:type", Boolean)
    ], UserInfo.prototype, "customAuth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], UserInfo.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailVerified" }),
        __metadata("design:type", Boolean)
    ], UserInfo.prototype, "emailVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastLoginAt" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "lastLoginAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localId" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "localId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordHash" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "passwordHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordUpdatedAt" }),
        __metadata("design:type", Number)
    ], UserInfo.prototype, "passwordUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneNumber" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoUrl" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerUserInfo", elemType: UserInfoProviderUserInfo }),
        __metadata("design:type", Array)
    ], UserInfo.prototype, "providerUserInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rawPassword" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "rawPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=salt" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "salt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screenName" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "screenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validSince" }),
        __metadata("design:type", String)
    ], UserInfo.prototype, "validSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], UserInfo.prototype, "version", void 0);
    return UserInfo;
}(SpeakeasyBase));
export { UserInfo };
