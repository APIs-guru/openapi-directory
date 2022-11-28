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
var BloggerPostsListPathParams = /** @class */ (function (_super) {
    __extends(BloggerPostsListPathParams, _super);
    function BloggerPostsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerPostsListPathParams.prototype, "blogId", void 0);
    return BloggerPostsListPathParams;
}(SpeakeasyBase));
export { BloggerPostsListPathParams };
export var BloggerPostsListOrderByEnum;
(function (BloggerPostsListOrderByEnum) {
    BloggerPostsListOrderByEnum["OrderByUnspecified"] = "ORDER_BY_UNSPECIFIED";
    BloggerPostsListOrderByEnum["Published"] = "PUBLISHED";
    BloggerPostsListOrderByEnum["Updated"] = "UPDATED";
})(BloggerPostsListOrderByEnum || (BloggerPostsListOrderByEnum = {}));
export var BloggerPostsListStatusEnum;
(function (BloggerPostsListStatusEnum) {
    BloggerPostsListStatusEnum["Live"] = "LIVE";
    BloggerPostsListStatusEnum["Draft"] = "DRAFT";
    BloggerPostsListStatusEnum["Scheduled"] = "SCHEDULED";
    BloggerPostsListStatusEnum["SoftTrashed"] = "SOFT_TRASHED";
})(BloggerPostsListStatusEnum || (BloggerPostsListStatusEnum = {}));
export var BloggerPostsListViewEnum;
(function (BloggerPostsListViewEnum) {
    BloggerPostsListViewEnum["ViewTypeUnspecified"] = "VIEW_TYPE_UNSPECIFIED";
    BloggerPostsListViewEnum["Reader"] = "READER";
    BloggerPostsListViewEnum["Author"] = "AUTHOR";
    BloggerPostsListViewEnum["Admin"] = "ADMIN";
})(BloggerPostsListViewEnum || (BloggerPostsListViewEnum = {}));
var BloggerPostsListQueryParams = /** @class */ (function (_super) {
    __extends(BloggerPostsListQueryParams, _super);
    function BloggerPostsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fetchBodies" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsListQueryParams.prototype, "fetchBodies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fetchImages" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsListQueryParams.prototype, "fetchImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labels" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BloggerPostsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", Array)
    ], BloggerPostsListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], BloggerPostsListQueryParams.prototype, "view", void 0);
    return BloggerPostsListQueryParams;
}(SpeakeasyBase));
export { BloggerPostsListQueryParams };
var BloggerPostsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BloggerPostsListSecurityOption1, _super);
    function BloggerPostsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPostsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPostsListSecurityOption1.prototype, "oauth2c", void 0);
    return BloggerPostsListSecurityOption1;
}(SpeakeasyBase));
export { BloggerPostsListSecurityOption1 };
var BloggerPostsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BloggerPostsListSecurityOption2, _super);
    function BloggerPostsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPostsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPostsListSecurityOption2.prototype, "oauth2c", void 0);
    return BloggerPostsListSecurityOption2;
}(SpeakeasyBase));
export { BloggerPostsListSecurityOption2 };
var BloggerPostsListSecurity = /** @class */ (function (_super) {
    __extends(BloggerPostsListSecurity, _super);
    function BloggerPostsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerPostsListSecurityOption1)
    ], BloggerPostsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerPostsListSecurityOption2)
    ], BloggerPostsListSecurity.prototype, "option2", void 0);
    return BloggerPostsListSecurity;
}(SpeakeasyBase));
export { BloggerPostsListSecurity };
var BloggerPostsListRequest = /** @class */ (function (_super) {
    __extends(BloggerPostsListRequest, _super);
    function BloggerPostsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPostsListPathParams)
    ], BloggerPostsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPostsListQueryParams)
    ], BloggerPostsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPostsListSecurity)
    ], BloggerPostsListRequest.prototype, "security", void 0);
    return BloggerPostsListRequest;
}(SpeakeasyBase));
export { BloggerPostsListRequest };
var BloggerPostsListResponse = /** @class */ (function (_super) {
    __extends(BloggerPostsListResponse, _super);
    function BloggerPostsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BloggerPostsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PostList)
    ], BloggerPostsListResponse.prototype, "postList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BloggerPostsListResponse.prototype, "statusCode", void 0);
    return BloggerPostsListResponse;
}(SpeakeasyBase));
export { BloggerPostsListResponse };
