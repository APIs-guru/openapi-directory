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
export var BloggerBlogsGetByUrlViewEnum;
(function (BloggerBlogsGetByUrlViewEnum) {
    BloggerBlogsGetByUrlViewEnum["ViewTypeUnspecified"] = "VIEW_TYPE_UNSPECIFIED";
    BloggerBlogsGetByUrlViewEnum["Reader"] = "READER";
    BloggerBlogsGetByUrlViewEnum["Author"] = "AUTHOR";
    BloggerBlogsGetByUrlViewEnum["Admin"] = "ADMIN";
})(BloggerBlogsGetByUrlViewEnum || (BloggerBlogsGetByUrlViewEnum = {}));
var BloggerBlogsGetByUrlQueryParams = /** @class */ (function (_super) {
    __extends(BloggerBlogsGetByUrlQueryParams, _super);
    function BloggerBlogsGetByUrlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetByUrlQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetByUrlQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetByUrlQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetByUrlQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetByUrlQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetByUrlQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetByUrlQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerBlogsGetByUrlQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetByUrlQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetByUrlQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetByUrlQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetByUrlQueryParams.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], BloggerBlogsGetByUrlQueryParams.prototype, "view", void 0);
    return BloggerBlogsGetByUrlQueryParams;
}(SpeakeasyBase));
export { BloggerBlogsGetByUrlQueryParams };
var BloggerBlogsGetByUrlSecurityOption1 = /** @class */ (function (_super) {
    __extends(BloggerBlogsGetByUrlSecurityOption1, _super);
    function BloggerBlogsGetByUrlSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerBlogsGetByUrlSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerBlogsGetByUrlSecurityOption1.prototype, "oauth2c", void 0);
    return BloggerBlogsGetByUrlSecurityOption1;
}(SpeakeasyBase));
export { BloggerBlogsGetByUrlSecurityOption1 };
var BloggerBlogsGetByUrlSecurityOption2 = /** @class */ (function (_super) {
    __extends(BloggerBlogsGetByUrlSecurityOption2, _super);
    function BloggerBlogsGetByUrlSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerBlogsGetByUrlSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerBlogsGetByUrlSecurityOption2.prototype, "oauth2c", void 0);
    return BloggerBlogsGetByUrlSecurityOption2;
}(SpeakeasyBase));
export { BloggerBlogsGetByUrlSecurityOption2 };
var BloggerBlogsGetByUrlSecurity = /** @class */ (function (_super) {
    __extends(BloggerBlogsGetByUrlSecurity, _super);
    function BloggerBlogsGetByUrlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerBlogsGetByUrlSecurityOption1)
    ], BloggerBlogsGetByUrlSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerBlogsGetByUrlSecurityOption2)
    ], BloggerBlogsGetByUrlSecurity.prototype, "option2", void 0);
    return BloggerBlogsGetByUrlSecurity;
}(SpeakeasyBase));
export { BloggerBlogsGetByUrlSecurity };
var BloggerBlogsGetByUrlRequest = /** @class */ (function (_super) {
    __extends(BloggerBlogsGetByUrlRequest, _super);
    function BloggerBlogsGetByUrlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerBlogsGetByUrlQueryParams)
    ], BloggerBlogsGetByUrlRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerBlogsGetByUrlSecurity)
    ], BloggerBlogsGetByUrlRequest.prototype, "security", void 0);
    return BloggerBlogsGetByUrlRequest;
}(SpeakeasyBase));
export { BloggerBlogsGetByUrlRequest };
var BloggerBlogsGetByUrlResponse = /** @class */ (function (_super) {
    __extends(BloggerBlogsGetByUrlResponse, _super);
    function BloggerBlogsGetByUrlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Blog)
    ], BloggerBlogsGetByUrlResponse.prototype, "blog", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BloggerBlogsGetByUrlResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BloggerBlogsGetByUrlResponse.prototype, "statusCode", void 0);
    return BloggerBlogsGetByUrlResponse;
}(SpeakeasyBase));
export { BloggerBlogsGetByUrlResponse };
