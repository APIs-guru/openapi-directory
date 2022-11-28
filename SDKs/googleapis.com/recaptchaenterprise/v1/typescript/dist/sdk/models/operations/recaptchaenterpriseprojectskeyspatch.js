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
var RecaptchaenterpriseProjectsKeysPatchPathParams = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysPatchPathParams, _super);
    function RecaptchaenterpriseProjectsKeysPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysPatchPathParams.prototype, "name", void 0);
    return RecaptchaenterpriseProjectsKeysPatchPathParams;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysPatchPathParams };
var RecaptchaenterpriseProjectsKeysPatchQueryParams = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysPatchQueryParams, _super);
    function RecaptchaenterpriseProjectsKeysPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecaptchaenterpriseProjectsKeysPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysPatchQueryParams.prototype, "uploadProtocol", void 0);
    return RecaptchaenterpriseProjectsKeysPatchQueryParams;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysPatchQueryParams };
var RecaptchaenterpriseProjectsKeysPatchSecurity = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysPatchSecurity, _super);
    function RecaptchaenterpriseProjectsKeysPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecaptchaenterpriseProjectsKeysPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecaptchaenterpriseProjectsKeysPatchSecurity.prototype, "oauth2c", void 0);
    return RecaptchaenterpriseProjectsKeysPatchSecurity;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysPatchSecurity };
var RecaptchaenterpriseProjectsKeysPatchRequest = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysPatchRequest, _super);
    function RecaptchaenterpriseProjectsKeysPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsKeysPatchPathParams)
    ], RecaptchaenterpriseProjectsKeysPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsKeysPatchQueryParams)
    ], RecaptchaenterpriseProjectsKeysPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRecaptchaenterpriseV1Key)
    ], RecaptchaenterpriseProjectsKeysPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsKeysPatchSecurity)
    ], RecaptchaenterpriseProjectsKeysPatchRequest.prototype, "security", void 0);
    return RecaptchaenterpriseProjectsKeysPatchRequest;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysPatchRequest };
var RecaptchaenterpriseProjectsKeysPatchResponse = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysPatchResponse, _super);
    function RecaptchaenterpriseProjectsKeysPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecaptchaenterpriseV1Key)
    ], RecaptchaenterpriseProjectsKeysPatchResponse.prototype, "googleCloudRecaptchaenterpriseV1Key", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecaptchaenterpriseProjectsKeysPatchResponse.prototype, "statusCode", void 0);
    return RecaptchaenterpriseProjectsKeysPatchResponse;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysPatchResponse };
