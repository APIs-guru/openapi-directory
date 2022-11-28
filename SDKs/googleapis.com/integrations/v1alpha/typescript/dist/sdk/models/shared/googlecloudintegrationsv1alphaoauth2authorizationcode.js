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
import { GoogleCloudIntegrationsV1alphaAccessToken } from "./googlecloudintegrationsv1alphaaccesstoken";
import { GoogleCloudIntegrationsV1alphaParameterMap } from "./googlecloudintegrationsv1alphaparametermap";
export var GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum;
(function (GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum) {
    GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum["RequestTypeUnspecified"] = "REQUEST_TYPE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum["RequestBody"] = "REQUEST_BODY";
    GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum["QueryParameters"] = "QUERY_PARAMETERS";
    GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum["EncodedHeader"] = "ENCODED_HEADER";
})(GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum || (GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestTypeEnum = {}));
// GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode
/**
 * The OAuth Type where the client sends request with the client id and requested scopes to auth endpoint. User sees a consent screen and auth code is received at specified redirect url afterwards. The auth code is then combined with the client id and secret and sent to the token endpoint in exchange for the access and refresh token. The refresh token can be used to fetch new access tokens.
**/
var GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode, _super);
    function GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessToken" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaAccessToken)
    ], GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applyReauthPolicy" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.prototype, "applyReauthPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authCode" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.prototype, "authCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authEndpoint" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.prototype, "authEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authParams" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaParameterMap)
    ], GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.prototype, "authParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientSecret" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestType" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.prototype, "requestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokenEndpoint" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.prototype, "tokenEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokenParams" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaParameterMap)
    ], GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode.prototype, "tokenParams", void 0);
    return GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode };
