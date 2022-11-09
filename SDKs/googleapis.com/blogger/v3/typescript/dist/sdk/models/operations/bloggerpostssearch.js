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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var BloggerPostsSearchPathParams = /** @class */ (function (_super) {
    __extends(BloggerPostsSearchPathParams, _super);
    function BloggerPostsSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerPostsSearchPathParams.prototype, "blogId", void 0);
    return BloggerPostsSearchPathParams;
}(SpeakeasyBase));
export { BloggerPostsSearchPathParams };
export var BloggerPostsSearchOrderByEnum;
(function (BloggerPostsSearchOrderByEnum) {
    BloggerPostsSearchOrderByEnum["OrderByUnspecified"] = "ORDER_BY_UNSPECIFIED";
    BloggerPostsSearchOrderByEnum["Published"] = "PUBLISHED";
    BloggerPostsSearchOrderByEnum["Updated"] = "UPDATED";
})(BloggerPostsSearchOrderByEnum || (BloggerPostsSearchOrderByEnum = {}));
var BloggerPostsSearchQueryParams = /** @class */ (function (_super) {
    __extends(BloggerPostsSearchQueryParams, _super);
    function BloggerPostsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerPostsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerPostsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerPostsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerPostsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fetchBodies" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsSearchQueryParams.prototype, "fetchBodies", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerPostsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerPostsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerPostsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], BloggerPostsSearchQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], BloggerPostsSearchQueryParams.prototype, "q", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerPostsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerPostsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerPostsSearchQueryParams.prototype, "uploadProtocol", void 0);
    return BloggerPostsSearchQueryParams;
}(SpeakeasyBase));
export { BloggerPostsSearchQueryParams };
var BloggerPostsSearchSecurityOption1 = /** @class */ (function (_super) {
    __extends(BloggerPostsSearchSecurityOption1, _super);
    function BloggerPostsSearchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPostsSearchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPostsSearchSecurityOption1.prototype, "oauth2c", void 0);
    return BloggerPostsSearchSecurityOption1;
}(SpeakeasyBase));
export { BloggerPostsSearchSecurityOption1 };
var BloggerPostsSearchSecurityOption2 = /** @class */ (function (_super) {
    __extends(BloggerPostsSearchSecurityOption2, _super);
    function BloggerPostsSearchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPostsSearchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPostsSearchSecurityOption2.prototype, "oauth2c", void 0);
    return BloggerPostsSearchSecurityOption2;
}(SpeakeasyBase));
export { BloggerPostsSearchSecurityOption2 };
var BloggerPostsSearchSecurity = /** @class */ (function (_super) {
    __extends(BloggerPostsSearchSecurity, _super);
    function BloggerPostsSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerPostsSearchSecurityOption1)
    ], BloggerPostsSearchSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerPostsSearchSecurityOption2)
    ], BloggerPostsSearchSecurity.prototype, "option2", void 0);
    return BloggerPostsSearchSecurity;
}(SpeakeasyBase));
export { BloggerPostsSearchSecurity };
var BloggerPostsSearchRequest = /** @class */ (function (_super) {
    __extends(BloggerPostsSearchRequest, _super);
    function BloggerPostsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPostsSearchPathParams)
    ], BloggerPostsSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPostsSearchQueryParams)
    ], BloggerPostsSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPostsSearchSecurity)
    ], BloggerPostsSearchRequest.prototype, "security", void 0);
    return BloggerPostsSearchRequest;
}(SpeakeasyBase));
export { BloggerPostsSearchRequest };
var BloggerPostsSearchResponse = /** @class */ (function (_super) {
    __extends(BloggerPostsSearchResponse, _super);
    function BloggerPostsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BloggerPostsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PostList)
    ], BloggerPostsSearchResponse.prototype, "postList", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BloggerPostsSearchResponse.prototype, "statusCode", void 0);
    return BloggerPostsSearchResponse;
}(SpeakeasyBase));
export { BloggerPostsSearchResponse };
