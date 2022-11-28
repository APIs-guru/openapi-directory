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
var BloggerCommentsListByBlogPathParams = /** @class */ (function (_super) {
    __extends(BloggerCommentsListByBlogPathParams, _super);
    function BloggerCommentsListByBlogPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogPathParams.prototype, "blogId", void 0);
    return BloggerCommentsListByBlogPathParams;
}(SpeakeasyBase));
export { BloggerCommentsListByBlogPathParams };
export var BloggerCommentsListByBlogStatusEnum;
(function (BloggerCommentsListByBlogStatusEnum) {
    BloggerCommentsListByBlogStatusEnum["Live"] = "LIVE";
    BloggerCommentsListByBlogStatusEnum["Emptied"] = "EMPTIED";
    BloggerCommentsListByBlogStatusEnum["Pending"] = "PENDING";
    BloggerCommentsListByBlogStatusEnum["Spam"] = "SPAM";
})(BloggerCommentsListByBlogStatusEnum || (BloggerCommentsListByBlogStatusEnum = {}));
var BloggerCommentsListByBlogQueryParams = /** @class */ (function (_super) {
    __extends(BloggerCommentsListByBlogQueryParams, _super);
    function BloggerCommentsListByBlogQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fetchBodies" }),
        __metadata("design:type", Boolean)
    ], BloggerCommentsListByBlogQueryParams.prototype, "fetchBodies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BloggerCommentsListByBlogQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerCommentsListByBlogQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", Array)
    ], BloggerCommentsListByBlogQueryParams.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogQueryParams.prototype, "uploadProtocol", void 0);
    return BloggerCommentsListByBlogQueryParams;
}(SpeakeasyBase));
export { BloggerCommentsListByBlogQueryParams };
var BloggerCommentsListByBlogSecurityOption1 = /** @class */ (function (_super) {
    __extends(BloggerCommentsListByBlogSecurityOption1, _super);
    function BloggerCommentsListByBlogSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerCommentsListByBlogSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerCommentsListByBlogSecurityOption1.prototype, "oauth2c", void 0);
    return BloggerCommentsListByBlogSecurityOption1;
}(SpeakeasyBase));
export { BloggerCommentsListByBlogSecurityOption1 };
var BloggerCommentsListByBlogSecurityOption2 = /** @class */ (function (_super) {
    __extends(BloggerCommentsListByBlogSecurityOption2, _super);
    function BloggerCommentsListByBlogSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerCommentsListByBlogSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerCommentsListByBlogSecurityOption2.prototype, "oauth2c", void 0);
    return BloggerCommentsListByBlogSecurityOption2;
}(SpeakeasyBase));
export { BloggerCommentsListByBlogSecurityOption2 };
var BloggerCommentsListByBlogSecurity = /** @class */ (function (_super) {
    __extends(BloggerCommentsListByBlogSecurity, _super);
    function BloggerCommentsListByBlogSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerCommentsListByBlogSecurityOption1)
    ], BloggerCommentsListByBlogSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerCommentsListByBlogSecurityOption2)
    ], BloggerCommentsListByBlogSecurity.prototype, "option2", void 0);
    return BloggerCommentsListByBlogSecurity;
}(SpeakeasyBase));
export { BloggerCommentsListByBlogSecurity };
var BloggerCommentsListByBlogRequest = /** @class */ (function (_super) {
    __extends(BloggerCommentsListByBlogRequest, _super);
    function BloggerCommentsListByBlogRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerCommentsListByBlogPathParams)
    ], BloggerCommentsListByBlogRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerCommentsListByBlogQueryParams)
    ], BloggerCommentsListByBlogRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerCommentsListByBlogSecurity)
    ], BloggerCommentsListByBlogRequest.prototype, "security", void 0);
    return BloggerCommentsListByBlogRequest;
}(SpeakeasyBase));
export { BloggerCommentsListByBlogRequest };
var BloggerCommentsListByBlogResponse = /** @class */ (function (_super) {
    __extends(BloggerCommentsListByBlogResponse, _super);
    function BloggerCommentsListByBlogResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CommentList)
    ], BloggerCommentsListByBlogResponse.prototype, "commentList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BloggerCommentsListByBlogResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BloggerCommentsListByBlogResponse.prototype, "statusCode", void 0);
    return BloggerCommentsListByBlogResponse;
}(SpeakeasyBase));
export { BloggerCommentsListByBlogResponse };
