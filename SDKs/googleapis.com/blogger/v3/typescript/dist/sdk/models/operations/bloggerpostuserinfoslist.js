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
var BloggerPostUserInfosListPathParams = /** @class */ (function (_super) {
    __extends(BloggerPostUserInfosListPathParams, _super);
    function BloggerPostUserInfosListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListPathParams.prototype, "blogId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListPathParams.prototype, "userId", void 0);
    return BloggerPostUserInfosListPathParams;
}(SpeakeasyBase));
export { BloggerPostUserInfosListPathParams };
export var BloggerPostUserInfosListOrderByEnum;
(function (BloggerPostUserInfosListOrderByEnum) {
    BloggerPostUserInfosListOrderByEnum["OrderByUnspecified"] = "ORDER_BY_UNSPECIFIED";
    BloggerPostUserInfosListOrderByEnum["Published"] = "PUBLISHED";
    BloggerPostUserInfosListOrderByEnum["Updated"] = "UPDATED";
})(BloggerPostUserInfosListOrderByEnum || (BloggerPostUserInfosListOrderByEnum = {}));
export var BloggerPostUserInfosListStatusEnum;
(function (BloggerPostUserInfosListStatusEnum) {
    BloggerPostUserInfosListStatusEnum["Live"] = "LIVE";
    BloggerPostUserInfosListStatusEnum["Draft"] = "DRAFT";
    BloggerPostUserInfosListStatusEnum["Scheduled"] = "SCHEDULED";
    BloggerPostUserInfosListStatusEnum["SoftTrashed"] = "SOFT_TRASHED";
})(BloggerPostUserInfosListStatusEnum || (BloggerPostUserInfosListStatusEnum = {}));
export var BloggerPostUserInfosListViewEnum;
(function (BloggerPostUserInfosListViewEnum) {
    BloggerPostUserInfosListViewEnum["ViewTypeUnspecified"] = "VIEW_TYPE_UNSPECIFIED";
    BloggerPostUserInfosListViewEnum["Reader"] = "READER";
    BloggerPostUserInfosListViewEnum["Author"] = "AUTHOR";
    BloggerPostUserInfosListViewEnum["Admin"] = "ADMIN";
})(BloggerPostUserInfosListViewEnum || (BloggerPostUserInfosListViewEnum = {}));
var BloggerPostUserInfosListQueryParams = /** @class */ (function (_super) {
    __extends(BloggerPostUserInfosListQueryParams, _super);
    function BloggerPostUserInfosListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fetchBodies" }),
        __metadata("design:type", Boolean)
    ], BloggerPostUserInfosListQueryParams.prototype, "fetchBodies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labels" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BloggerPostUserInfosListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerPostUserInfosListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", Array)
    ], BloggerPostUserInfosListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListQueryParams.prototype, "view", void 0);
    return BloggerPostUserInfosListQueryParams;
}(SpeakeasyBase));
export { BloggerPostUserInfosListQueryParams };
var BloggerPostUserInfosListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BloggerPostUserInfosListSecurityOption1, _super);
    function BloggerPostUserInfosListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPostUserInfosListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPostUserInfosListSecurityOption1.prototype, "oauth2c", void 0);
    return BloggerPostUserInfosListSecurityOption1;
}(SpeakeasyBase));
export { BloggerPostUserInfosListSecurityOption1 };
var BloggerPostUserInfosListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BloggerPostUserInfosListSecurityOption2, _super);
    function BloggerPostUserInfosListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPostUserInfosListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPostUserInfosListSecurityOption2.prototype, "oauth2c", void 0);
    return BloggerPostUserInfosListSecurityOption2;
}(SpeakeasyBase));
export { BloggerPostUserInfosListSecurityOption2 };
var BloggerPostUserInfosListSecurity = /** @class */ (function (_super) {
    __extends(BloggerPostUserInfosListSecurity, _super);
    function BloggerPostUserInfosListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerPostUserInfosListSecurityOption1)
    ], BloggerPostUserInfosListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerPostUserInfosListSecurityOption2)
    ], BloggerPostUserInfosListSecurity.prototype, "option2", void 0);
    return BloggerPostUserInfosListSecurity;
}(SpeakeasyBase));
export { BloggerPostUserInfosListSecurity };
var BloggerPostUserInfosListRequest = /** @class */ (function (_super) {
    __extends(BloggerPostUserInfosListRequest, _super);
    function BloggerPostUserInfosListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPostUserInfosListPathParams)
    ], BloggerPostUserInfosListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPostUserInfosListQueryParams)
    ], BloggerPostUserInfosListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPostUserInfosListSecurity)
    ], BloggerPostUserInfosListRequest.prototype, "security", void 0);
    return BloggerPostUserInfosListRequest;
}(SpeakeasyBase));
export { BloggerPostUserInfosListRequest };
var BloggerPostUserInfosListResponse = /** @class */ (function (_super) {
    __extends(BloggerPostUserInfosListResponse, _super);
    function BloggerPostUserInfosListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BloggerPostUserInfosListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PostUserInfosList)
    ], BloggerPostUserInfosListResponse.prototype, "postUserInfosList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BloggerPostUserInfosListResponse.prototype, "statusCode", void 0);
    return BloggerPostUserInfosListResponse;
}(SpeakeasyBase));
export { BloggerPostUserInfosListResponse };
