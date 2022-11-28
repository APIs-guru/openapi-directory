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
var RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams.prototype, "project", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams };
var RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams.prototype, "uploadProtocol", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams };
var RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity.prototype, "oauth2c", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity };
var RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchPathParams)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchQueryParams)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchSecurity)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest.prototype, "security", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest };
var RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse.prototype, "googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse.prototype, "statusCode", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse };
