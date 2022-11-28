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
import * as shared from "../shared";
var RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyPathParams = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyPathParams, _super);
    function RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyPathParams.prototype, "key", void 0);
    return RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyPathParams;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyPathParams };
var RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams, _super);
    function RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams.prototype, "uploadProtocol", void 0);
    return RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams };
var RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity, _super);
    function RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity.prototype, "oauth2c", void 0);
    return RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity };
var RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest, _super);
    function RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyPathParams)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyQueryParams)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeySecurity)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest.prototype, "security", void 0);
    return RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest };
var RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse, _super);
    function RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse.prototype, "googleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse.prototype, "statusCode", void 0);
    return RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse };
