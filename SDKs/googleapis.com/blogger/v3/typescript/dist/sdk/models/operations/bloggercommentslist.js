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
var BloggerCommentsListPathParams = /** @class */ (function (_super) {
    __extends(BloggerCommentsListPathParams, _super);
    function BloggerCommentsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerCommentsListPathParams.prototype, "blogId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=postId" }),
        __metadata("design:type", String)
    ], BloggerCommentsListPathParams.prototype, "postId", void 0);
    return BloggerCommentsListPathParams;
}(SpeakeasyBase));
export { BloggerCommentsListPathParams };
export var BloggerCommentsListStatusEnum;
(function (BloggerCommentsListStatusEnum) {
    BloggerCommentsListStatusEnum["Live"] = "LIVE";
    BloggerCommentsListStatusEnum["Emptied"] = "EMPTIED";
    BloggerCommentsListStatusEnum["Pending"] = "PENDING";
    BloggerCommentsListStatusEnum["Spam"] = "SPAM";
})(BloggerCommentsListStatusEnum || (BloggerCommentsListStatusEnum = {}));
export var BloggerCommentsListViewEnum;
(function (BloggerCommentsListViewEnum) {
    BloggerCommentsListViewEnum["ViewTypeUnspecified"] = "VIEW_TYPE_UNSPECIFIED";
    BloggerCommentsListViewEnum["Reader"] = "READER";
    BloggerCommentsListViewEnum["Author"] = "AUTHOR";
    BloggerCommentsListViewEnum["Admin"] = "ADMIN";
})(BloggerCommentsListViewEnum || (BloggerCommentsListViewEnum = {}));
var BloggerCommentsListQueryParams = /** @class */ (function (_super) {
    __extends(BloggerCommentsListQueryParams, _super);
    function BloggerCommentsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fetchBodies" }),
        __metadata("design:type", Boolean)
    ], BloggerCommentsListQueryParams.prototype, "fetchBodies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BloggerCommentsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerCommentsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], BloggerCommentsListQueryParams.prototype, "view", void 0);
    return BloggerCommentsListQueryParams;
}(SpeakeasyBase));
export { BloggerCommentsListQueryParams };
var BloggerCommentsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BloggerCommentsListSecurityOption1, _super);
    function BloggerCommentsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerCommentsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerCommentsListSecurityOption1.prototype, "oauth2c", void 0);
    return BloggerCommentsListSecurityOption1;
}(SpeakeasyBase));
export { BloggerCommentsListSecurityOption1 };
var BloggerCommentsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BloggerCommentsListSecurityOption2, _super);
    function BloggerCommentsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerCommentsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerCommentsListSecurityOption2.prototype, "oauth2c", void 0);
    return BloggerCommentsListSecurityOption2;
}(SpeakeasyBase));
export { BloggerCommentsListSecurityOption2 };
var BloggerCommentsListSecurity = /** @class */ (function (_super) {
    __extends(BloggerCommentsListSecurity, _super);
    function BloggerCommentsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerCommentsListSecurityOption1)
    ], BloggerCommentsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerCommentsListSecurityOption2)
    ], BloggerCommentsListSecurity.prototype, "option2", void 0);
    return BloggerCommentsListSecurity;
}(SpeakeasyBase));
export { BloggerCommentsListSecurity };
var BloggerCommentsListRequest = /** @class */ (function (_super) {
    __extends(BloggerCommentsListRequest, _super);
    function BloggerCommentsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerCommentsListPathParams)
    ], BloggerCommentsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerCommentsListQueryParams)
    ], BloggerCommentsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerCommentsListSecurity)
    ], BloggerCommentsListRequest.prototype, "security", void 0);
    return BloggerCommentsListRequest;
}(SpeakeasyBase));
export { BloggerCommentsListRequest };
var BloggerCommentsListResponse = /** @class */ (function (_super) {
    __extends(BloggerCommentsListResponse, _super);
    function BloggerCommentsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommentList)
    ], BloggerCommentsListResponse.prototype, "commentList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BloggerCommentsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BloggerCommentsListResponse.prototype, "statusCode", void 0);
    return BloggerCommentsListResponse;
}(SpeakeasyBase));
export { BloggerCommentsListResponse };
