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
var RecaptchaenterpriseProjectsRelatedaccountgroupsListPathParams = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupsListPathParams, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListPathParams.prototype, "parent", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupsListPathParams;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupsListPathParams };
var RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams.prototype, "uploadProtocol", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams };
var RecaptchaenterpriseProjectsRelatedaccountgroupsListSecurity = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupsListSecurity, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListSecurity.prototype, "oauth2c", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupsListSecurity;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupsListSecurity };
var RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsRelatedaccountgroupsListPathParams)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsRelatedaccountgroupsListQueryParams)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsRelatedaccountgroupsListSecurity)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest.prototype, "security", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest };
var RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse.prototype, "googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse.prototype, "statusCode", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse };
