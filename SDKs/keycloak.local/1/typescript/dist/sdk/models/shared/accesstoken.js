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
import { AddressClaimSet } from "./addressclaimset";
import { AccessTokenAuthorization } from "./accesstokenauthorization";
import { AccessTokenCertConf } from "./accesstokencertconf";
import { AccessTokenAccess } from "./accesstokenaccess";
export var AccessTokenCategoryEnum;
(function (AccessTokenCategoryEnum) {
    AccessTokenCategoryEnum["Internal"] = "INTERNAL";
    AccessTokenCategoryEnum["Access"] = "ACCESS";
    AccessTokenCategoryEnum["Id"] = "ID";
    AccessTokenCategoryEnum["Admin"] = "ADMIN";
    AccessTokenCategoryEnum["Userinfo"] = "USERINFO";
})(AccessTokenCategoryEnum || (AccessTokenCategoryEnum = {}));
var AccessToken = /** @class */ (function (_super) {
    __extends(AccessToken, _super);
    function AccessToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acr" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "acr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", AddressClaimSet)
    ], AccessToken.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed-origins" }),
        __metadata("design:type", Array)
    ], AccessToken.prototype, "allowedOrigins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=at_hash" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "atHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_time" }),
        __metadata("design:type", Number)
    ], AccessToken.prototype, "authTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorization" }),
        __metadata("design:type", AccessTokenAuthorization)
    ], AccessToken.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=azp" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "azp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=birthdate" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "birthdate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=c_hash" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "cHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=claims_locales" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "claimsLocales", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cnf" }),
        __metadata("design:type", AccessTokenCertConf)
    ], AccessToken.prototype, "cnf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email_verified" }),
        __metadata("design:type", Boolean)
    ], AccessToken.prototype, "emailVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exp" }),
        __metadata("design:type", Number)
    ], AccessToken.prototype, "exp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=family_name" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "familyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=given_name" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "givenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iat" }),
        __metadata("design:type", Number)
    ], AccessToken.prototype, "iat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iss" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "iss", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jti" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "jti", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locale" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=middle_name" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "middleName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nbf" }),
        __metadata("design:type", Number)
    ], AccessToken.prototype, "nbf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "nickname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nonce" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "nonce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otherClaims" }),
        __metadata("design:type", Map)
    ], AccessToken.prototype, "otherClaims", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone_number_verified" }),
        __metadata("design:type", Boolean)
    ], AccessToken.prototype, "phoneNumberVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=picture" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "picture", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=preferred_username" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "preferredUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profile" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=realm_access" }),
        __metadata("design:type", AccessTokenAccess)
    ], AccessToken.prototype, "realmAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=s_hash" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "sHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=session_state" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "sessionState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sub" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "sub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trusted-certs" }),
        __metadata("design:type", Array)
    ], AccessToken.prototype, "trustedCerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=typ" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "typ", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Number)
    ], AccessToken.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "website", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zoneinfo" }),
        __metadata("design:type", String)
    ], AccessToken.prototype, "zoneinfo", void 0);
    return AccessToken;
}(SpeakeasyBase));
export { AccessToken };
