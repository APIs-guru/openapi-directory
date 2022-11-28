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
var RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListPathParams = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListPathParams, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListPathParams.prototype, "parent", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListPathParams;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListPathParams };
var RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams.prototype, "uploadProtocol", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams };
var RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity.prototype, "oauth2c", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity };
var RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListPathParams)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListQueryParams)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListSecurity)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest.prototype, "security", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest };
var RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse = /** @class */ (function (_super) {
    __extends(RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse, _super);
    function RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse.prototype, "googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse.prototype, "statusCode", void 0);
    return RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse;
}(SpeakeasyBase));
export { RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse };
