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
var BloggerPagesListPathParams = /** @class */ (function (_super) {
    __extends(BloggerPagesListPathParams, _super);
    function BloggerPagesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerPagesListPathParams.prototype, "blogId", void 0);
    return BloggerPagesListPathParams;
}(SpeakeasyBase));
export { BloggerPagesListPathParams };
export var BloggerPagesListStatusEnum;
(function (BloggerPagesListStatusEnum) {
    BloggerPagesListStatusEnum["Live"] = "LIVE";
    BloggerPagesListStatusEnum["Draft"] = "DRAFT";
    BloggerPagesListStatusEnum["SoftTrashed"] = "SOFT_TRASHED";
})(BloggerPagesListStatusEnum || (BloggerPagesListStatusEnum = {}));
export var BloggerPagesListViewEnum;
(function (BloggerPagesListViewEnum) {
    BloggerPagesListViewEnum["ViewTypeUnspecified"] = "VIEW_TYPE_UNSPECIFIED";
    BloggerPagesListViewEnum["Reader"] = "READER";
    BloggerPagesListViewEnum["Author"] = "AUTHOR";
    BloggerPagesListViewEnum["Admin"] = "ADMIN";
})(BloggerPagesListViewEnum || (BloggerPagesListViewEnum = {}));
var BloggerPagesListQueryParams = /** @class */ (function (_super) {
    __extends(BloggerPagesListQueryParams, _super);
    function BloggerPagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerPagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerPagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerPagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerPagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fetchBodies" }),
        __metadata("design:type", Boolean)
    ], BloggerPagesListQueryParams.prototype, "fetchBodies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerPagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerPagesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BloggerPagesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerPagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BloggerPagesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerPagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerPagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", Array)
    ], BloggerPagesListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerPagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerPagesListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], BloggerPagesListQueryParams.prototype, "view", void 0);
    return BloggerPagesListQueryParams;
}(SpeakeasyBase));
export { BloggerPagesListQueryParams };
var BloggerPagesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BloggerPagesListSecurityOption1, _super);
    function BloggerPagesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPagesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPagesListSecurityOption1.prototype, "oauth2c", void 0);
    return BloggerPagesListSecurityOption1;
}(SpeakeasyBase));
export { BloggerPagesListSecurityOption1 };
var BloggerPagesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BloggerPagesListSecurityOption2, _super);
    function BloggerPagesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPagesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPagesListSecurityOption2.prototype, "oauth2c", void 0);
    return BloggerPagesListSecurityOption2;
}(SpeakeasyBase));
export { BloggerPagesListSecurityOption2 };
var BloggerPagesListSecurity = /** @class */ (function (_super) {
    __extends(BloggerPagesListSecurity, _super);
    function BloggerPagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerPagesListSecurityOption1)
    ], BloggerPagesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerPagesListSecurityOption2)
    ], BloggerPagesListSecurity.prototype, "option2", void 0);
    return BloggerPagesListSecurity;
}(SpeakeasyBase));
export { BloggerPagesListSecurity };
var BloggerPagesListRequest = /** @class */ (function (_super) {
    __extends(BloggerPagesListRequest, _super);
    function BloggerPagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPagesListPathParams)
    ], BloggerPagesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPagesListQueryParams)
    ], BloggerPagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPagesListSecurity)
    ], BloggerPagesListRequest.prototype, "security", void 0);
    return BloggerPagesListRequest;
}(SpeakeasyBase));
export { BloggerPagesListRequest };
var BloggerPagesListResponse = /** @class */ (function (_super) {
    __extends(BloggerPagesListResponse, _super);
    function BloggerPagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BloggerPagesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PageList)
    ], BloggerPagesListResponse.prototype, "pageList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BloggerPagesListResponse.prototype, "statusCode", void 0);
    return BloggerPagesListResponse;
}(SpeakeasyBase));
export { BloggerPagesListResponse };
