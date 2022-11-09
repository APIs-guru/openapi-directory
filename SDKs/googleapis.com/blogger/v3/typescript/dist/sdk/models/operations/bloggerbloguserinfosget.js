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
var BloggerBlogUserInfosGetPathParams = /** @class */ (function (_super) {
    __extends(BloggerBlogUserInfosGetPathParams, _super);
    function BloggerBlogUserInfosGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerBlogUserInfosGetPathParams.prototype, "blogId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], BloggerBlogUserInfosGetPathParams.prototype, "userId", void 0);
    return BloggerBlogUserInfosGetPathParams;
}(SpeakeasyBase));
export { BloggerBlogUserInfosGetPathParams };
var BloggerBlogUserInfosGetQueryParams = /** @class */ (function (_super) {
    __extends(BloggerBlogUserInfosGetQueryParams, _super);
    function BloggerBlogUserInfosGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerBlogUserInfosGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerBlogUserInfosGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerBlogUserInfosGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerBlogUserInfosGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerBlogUserInfosGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerBlogUserInfosGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxPosts" }),
        __metadata("design:type", Number)
    ], BloggerBlogUserInfosGetQueryParams.prototype, "maxPosts", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerBlogUserInfosGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerBlogUserInfosGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerBlogUserInfosGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerBlogUserInfosGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerBlogUserInfosGetQueryParams.prototype, "uploadProtocol", void 0);
    return BloggerBlogUserInfosGetQueryParams;
}(SpeakeasyBase));
export { BloggerBlogUserInfosGetQueryParams };
var BloggerBlogUserInfosGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(BloggerBlogUserInfosGetSecurityOption1, _super);
    function BloggerBlogUserInfosGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerBlogUserInfosGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerBlogUserInfosGetSecurityOption1.prototype, "oauth2c", void 0);
    return BloggerBlogUserInfosGetSecurityOption1;
}(SpeakeasyBase));
export { BloggerBlogUserInfosGetSecurityOption1 };
var BloggerBlogUserInfosGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(BloggerBlogUserInfosGetSecurityOption2, _super);
    function BloggerBlogUserInfosGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerBlogUserInfosGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerBlogUserInfosGetSecurityOption2.prototype, "oauth2c", void 0);
    return BloggerBlogUserInfosGetSecurityOption2;
}(SpeakeasyBase));
export { BloggerBlogUserInfosGetSecurityOption2 };
var BloggerBlogUserInfosGetSecurity = /** @class */ (function (_super) {
    __extends(BloggerBlogUserInfosGetSecurity, _super);
    function BloggerBlogUserInfosGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerBlogUserInfosGetSecurityOption1)
    ], BloggerBlogUserInfosGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerBlogUserInfosGetSecurityOption2)
    ], BloggerBlogUserInfosGetSecurity.prototype, "option2", void 0);
    return BloggerBlogUserInfosGetSecurity;
}(SpeakeasyBase));
export { BloggerBlogUserInfosGetSecurity };
var BloggerBlogUserInfosGetRequest = /** @class */ (function (_super) {
    __extends(BloggerBlogUserInfosGetRequest, _super);
    function BloggerBlogUserInfosGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerBlogUserInfosGetPathParams)
    ], BloggerBlogUserInfosGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerBlogUserInfosGetQueryParams)
    ], BloggerBlogUserInfosGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerBlogUserInfosGetSecurity)
    ], BloggerBlogUserInfosGetRequest.prototype, "security", void 0);
    return BloggerBlogUserInfosGetRequest;
}(SpeakeasyBase));
export { BloggerBlogUserInfosGetRequest };
var BloggerBlogUserInfosGetResponse = /** @class */ (function (_super) {
    __extends(BloggerBlogUserInfosGetResponse, _super);
    function BloggerBlogUserInfosGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BlogUserInfo)
    ], BloggerBlogUserInfosGetResponse.prototype, "blogUserInfo", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BloggerBlogUserInfosGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BloggerBlogUserInfosGetResponse.prototype, "statusCode", void 0);
    return BloggerBlogUserInfosGetResponse;
}(SpeakeasyBase));
export { BloggerBlogUserInfosGetResponse };
