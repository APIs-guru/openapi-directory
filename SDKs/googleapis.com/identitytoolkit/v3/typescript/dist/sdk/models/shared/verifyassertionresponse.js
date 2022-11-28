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
// VerifyAssertionResponse
/**
 * Response of verifying the IDP assertion.
**/
var VerifyAssertionResponse = /** @class */ (function (_super) {
    __extends(VerifyAssertionResponse, _super);
    function VerifyAssertionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appInstallationUrl" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "appInstallationUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appScheme" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "appScheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateOfBirth" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "dateOfBirth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailRecycled" }),
        __metadata("design:type", Boolean)
    ], VerifyAssertionResponse.prototype, "emailRecycled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailVerified" }),
        __metadata("design:type", Boolean)
    ], VerifyAssertionResponse.prototype, "emailVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorMessage" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "errorMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expiresIn" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "expiresIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federatedId" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "federatedId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullName" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idToken" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "idToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inputEmail" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "inputEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isNewUser" }),
        __metadata("design:type", Boolean)
    ], VerifyAssertionResponse.prototype, "isNewUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localId" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "localId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=needConfirmation" }),
        __metadata("design:type", Boolean)
    ], VerifyAssertionResponse.prototype, "needConfirmation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=needEmail" }),
        __metadata("design:type", Boolean)
    ], VerifyAssertionResponse.prototype, "needEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nickName" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "nickName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthAccessToken" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "oauthAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthAuthorizationCode" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "oauthAuthorizationCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthExpireIn" }),
        __metadata("design:type", Number)
    ], VerifyAssertionResponse.prototype, "oauthExpireIn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthIdToken" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "oauthIdToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthRequestToken" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "oauthRequestToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthScope" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "oauthScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oauthTokenSecret" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "oauthTokenSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originalEmail" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "originalEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=photoUrl" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "photoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerId" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "providerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rawUserInfo" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "rawUserInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refreshToken" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "refreshToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screenName" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "screenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeZone" }),
        __metadata("design:type", String)
    ], VerifyAssertionResponse.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verifiedProvider" }),
        __metadata("design:type", Array)
    ], VerifyAssertionResponse.prototype, "verifiedProvider", void 0);
    return VerifyAssertionResponse;
}(SpeakeasyBase));
export { VerifyAssertionResponse };
