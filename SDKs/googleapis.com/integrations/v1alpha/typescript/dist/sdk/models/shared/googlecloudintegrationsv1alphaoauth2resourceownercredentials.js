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
export var GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum;
(function (GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum) {
    GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum["RequestTypeUnspecified"] = "REQUEST_TYPE_UNSPECIFIED";
    GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum["RequestBody"] = "REQUEST_BODY";
    GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum["QueryParameters"] = "QUERY_PARAMETERS";
    GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum["EncodedHeader"] = "ENCODED_HEADER";
})(GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum || (GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsRequestTypeEnum = {}));
// GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials
/**
 * For resource owner credentials grant, the client will ask the user for their authorization credentials (ususally a username and password) and send a POST request to the authorization server. The authorization server will respond with a JSON object containing the access token.
**/
var GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials = /** @class */ (function (_super) {
    __extends(GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials, _super);
    function GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessToken" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaAccessToken)
    ], GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientSecret" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestType" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials.prototype, "requestType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokenEndpoint" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials.prototype, "tokenEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokenParams" }),
        __metadata("design:type", GoogleCloudIntegrationsV1alphaParameterMap)
    ], GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials.prototype, "tokenParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials.prototype, "username", void 0);
    return GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials;
}(SpeakeasyBase));
export { GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials };
