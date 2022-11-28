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
var BloggerBlogsGetPathParams = /** @class */ (function (_super) {
    __extends(BloggerBlogsGetPathParams, _super);
    function BloggerBlogsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetPathParams.prototype, "blogId", void 0);
    return BloggerBlogsGetPathParams;
}(SpeakeasyBase));
export { BloggerBlogsGetPathParams };
export var BloggerBlogsGetViewEnum;
(function (BloggerBlogsGetViewEnum) {
    BloggerBlogsGetViewEnum["ViewTypeUnspecified"] = "VIEW_TYPE_UNSPECIFIED";
    BloggerBlogsGetViewEnum["Reader"] = "READER";
    BloggerBlogsGetViewEnum["Author"] = "AUTHOR";
    BloggerBlogsGetViewEnum["Admin"] = "ADMIN";
})(BloggerBlogsGetViewEnum || (BloggerBlogsGetViewEnum = {}));
var BloggerBlogsGetQueryParams = /** @class */ (function (_super) {
    __extends(BloggerBlogsGetQueryParams, _super);
    function BloggerBlogsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxPosts" }),
        __metadata("design:type", Number)
    ], BloggerBlogsGetQueryParams.prototype, "maxPosts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerBlogsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetQueryParams.prototype, "view", void 0);
    return BloggerBlogsGetQueryParams;
}(SpeakeasyBase));
export { BloggerBlogsGetQueryParams };
var BloggerBlogsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(BloggerBlogsGetSecurityOption1, _super);
    function BloggerBlogsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerBlogsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerBlogsGetSecurityOption1.prototype, "oauth2c", void 0);
    return BloggerBlogsGetSecurityOption1;
}(SpeakeasyBase));
export { BloggerBlogsGetSecurityOption1 };
var BloggerBlogsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(BloggerBlogsGetSecurityOption2, _super);
    function BloggerBlogsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerBlogsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerBlogsGetSecurityOption2.prototype, "oauth2c", void 0);
    return BloggerBlogsGetSecurityOption2;
}(SpeakeasyBase));
export { BloggerBlogsGetSecurityOption2 };
var BloggerBlogsGetSecurity = /** @class */ (function (_super) {
    __extends(BloggerBlogsGetSecurity, _super);
    function BloggerBlogsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerBlogsGetSecurityOption1)
    ], BloggerBlogsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerBlogsGetSecurityOption2)
    ], BloggerBlogsGetSecurity.prototype, "option2", void 0);
    return BloggerBlogsGetSecurity;
}(SpeakeasyBase));
export { BloggerBlogsGetSecurity };
var BloggerBlogsGetRequest = /** @class */ (function (_super) {
    __extends(BloggerBlogsGetRequest, _super);
    function BloggerBlogsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerBlogsGetPathParams)
    ], BloggerBlogsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerBlogsGetQueryParams)
    ], BloggerBlogsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerBlogsGetSecurity)
    ], BloggerBlogsGetRequest.prototype, "security", void 0);
    return BloggerBlogsGetRequest;
}(SpeakeasyBase));
export { BloggerBlogsGetRequest };
var BloggerBlogsGetResponse = /** @class */ (function (_super) {
    __extends(BloggerBlogsGetResponse, _super);
    function BloggerBlogsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Blog)
    ], BloggerBlogsGetResponse.prototype, "blog", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BloggerBlogsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BloggerBlogsGetResponse.prototype, "statusCode", void 0);
    return BloggerBlogsGetResponse;
}(SpeakeasyBase));
export { BloggerBlogsGetResponse };
