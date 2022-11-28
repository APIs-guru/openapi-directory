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
// IdentitytoolkitRelyingpartySetAccountInfoRequest
/**
 * Request to set the account information.
**/
var IdentitytoolkitRelyingpartySetAccountInfoRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitRelyingpartySetAccountInfoRequest, _super);
    function IdentitytoolkitRelyingpartySetAccountInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=captchaChallenge" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "captchaChallenge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=captchaResponse" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "captchaResponse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customAttributes" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "customAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delegatedProjectNumber" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "delegatedProjectNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteAttribute" }),
        __metadata("design:type", Array)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "deleteAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleteProvider" }),
        __metadata("design:type", Array)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "deleteProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableUser" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "disableUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailVerified" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "emailVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idToken" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "idToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceId" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastLoginAt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "lastLoginAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localId" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "localId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oobCode" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "oobCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneNumber" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoUrl" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", Array)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnSecureToken" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "returnSecureToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upgradeToFederatedLogin" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "upgradeToFederatedLogin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validSince" }),
        __metadata("design:type", String)
    ], IdentitytoolkitRelyingpartySetAccountInfoRequest.prototype, "validSince", void 0);
    return IdentitytoolkitRelyingpartySetAccountInfoRequest;
}(SpeakeasyBase));
export { IdentitytoolkitRelyingpartySetAccountInfoRequest };
