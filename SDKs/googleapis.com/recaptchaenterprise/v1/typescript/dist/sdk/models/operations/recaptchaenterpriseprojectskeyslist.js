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
var RecaptchaenterpriseProjectsKeysListPathParams = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysListPathParams, _super);
    function RecaptchaenterpriseProjectsKeysListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysListPathParams.prototype, "parent", void 0);
    return RecaptchaenterpriseProjectsKeysListPathParams;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysListPathParams };
var RecaptchaenterpriseProjectsKeysListQueryParams = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysListQueryParams, _super);
    function RecaptchaenterpriseProjectsKeysListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], RecaptchaenterpriseProjectsKeysListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecaptchaenterpriseProjectsKeysListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysListQueryParams.prototype, "uploadProtocol", void 0);
    return RecaptchaenterpriseProjectsKeysListQueryParams;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysListQueryParams };
var RecaptchaenterpriseProjectsKeysListSecurity = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysListSecurity, _super);
    function RecaptchaenterpriseProjectsKeysListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecaptchaenterpriseProjectsKeysListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecaptchaenterpriseProjectsKeysListSecurity.prototype, "oauth2c", void 0);
    return RecaptchaenterpriseProjectsKeysListSecurity;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysListSecurity };
var RecaptchaenterpriseProjectsKeysListRequest = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysListRequest, _super);
    function RecaptchaenterpriseProjectsKeysListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsKeysListPathParams)
    ], RecaptchaenterpriseProjectsKeysListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsKeysListQueryParams)
    ], RecaptchaenterpriseProjectsKeysListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsKeysListSecurity)
    ], RecaptchaenterpriseProjectsKeysListRequest.prototype, "security", void 0);
    return RecaptchaenterpriseProjectsKeysListRequest;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysListRequest };
var RecaptchaenterpriseProjectsKeysListResponse = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsKeysListResponse, _super);
    function RecaptchaenterpriseProjectsKeysListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsKeysListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecaptchaenterpriseV1ListKeysResponse)
    ], RecaptchaenterpriseProjectsKeysListResponse.prototype, "googleCloudRecaptchaenterpriseV1ListKeysResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecaptchaenterpriseProjectsKeysListResponse.prototype, "statusCode", void 0);
    return RecaptchaenterpriseProjectsKeysListResponse;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsKeysListResponse };
