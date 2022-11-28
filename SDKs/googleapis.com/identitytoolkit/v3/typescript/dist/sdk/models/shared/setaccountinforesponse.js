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
var SetAccountInfoResponseProviderUserInfo = /** @class */ (function (_super) {
    __extends(SetAccountInfoResponseProviderUserInfo, _super);
    function SetAccountInfoResponseProviderUserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], SetAccountInfoResponseProviderUserInfo.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federatedId" }),
        __metadata("design:type", String)
    ], SetAccountInfoResponseProviderUserInfo.prototype, "federatedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoUrl" }),
        __metadata("design:type", String)
    ], SetAccountInfoResponseProviderUserInfo.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerId" }),
        __metadata("design:type", String)
    ], SetAccountInfoResponseProviderUserInfo.prototype, "providerId", void 0);
    return SetAccountInfoResponseProviderUserInfo;
}(SpeakeasyBase));
export { SetAccountInfoResponseProviderUserInfo };
// SetAccountInfoResponse
/**
 * Respone of setting the account information.
**/
var SetAccountInfoResponse = /** @class */ (function (_super) {
    __extends(SetAccountInfoResponse, _super);
    function SetAccountInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], SetAccountInfoResponse.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], SetAccountInfoResponse.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailVerified" }),
        __metadata("design:type", Boolean)
    ], SetAccountInfoResponse.prototype, "emailVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiresIn" }),
        __metadata("design:type", String)
    ], SetAccountInfoResponse.prototype, "expiresIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idToken" }),
        __metadata("design:type", String)
    ], SetAccountInfoResponse.prototype, "idToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], SetAccountInfoResponse.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localId" }),
        __metadata("design:type", String)
    ], SetAccountInfoResponse.prototype, "localId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=newEmail" }),
        __metadata("design:type", String)
    ], SetAccountInfoResponse.prototype, "newEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordHash" }),
        __metadata("design:type", String)
    ], SetAccountInfoResponse.prototype, "passwordHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoUrl" }),
        __metadata("design:type", String)
    ], SetAccountInfoResponse.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerUserInfo", elemType: SetAccountInfoResponseProviderUserInfo }),
        __metadata("design:type", Array)
    ], SetAccountInfoResponse.prototype, "providerUserInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refreshToken" }),
        __metadata("design:type", String)
    ], SetAccountInfoResponse.prototype, "refreshToken", void 0);
    return SetAccountInfoResponse;
}(SpeakeasyBase));
export { SetAccountInfoResponse };
