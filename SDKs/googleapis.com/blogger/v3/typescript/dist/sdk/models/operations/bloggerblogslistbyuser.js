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
var BloggerBlogsListByUserPathParams = /** @class */ (function (_super) {
    __extends(BloggerBlogsListByUserPathParams, _super);
    function BloggerBlogsListByUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], BloggerBlogsListByUserPathParams.prototype, "userId", void 0);
    return BloggerBlogsListByUserPathParams;
}(SpeakeasyBase));
export { BloggerBlogsListByUserPathParams };
export var BloggerBlogsListByUserRoleEnum;
(function (BloggerBlogsListByUserRoleEnum) {
    BloggerBlogsListByUserRoleEnum["ViewTypeUnspecified"] = "VIEW_TYPE_UNSPECIFIED";
    BloggerBlogsListByUserRoleEnum["Reader"] = "READER";
    BloggerBlogsListByUserRoleEnum["Author"] = "AUTHOR";
    BloggerBlogsListByUserRoleEnum["Admin"] = "ADMIN";
})(BloggerBlogsListByUserRoleEnum || (BloggerBlogsListByUserRoleEnum = {}));
export var BloggerBlogsListByUserStatusEnum;
(function (BloggerBlogsListByUserStatusEnum) {
    BloggerBlogsListByUserStatusEnum["Live"] = "LIVE";
    BloggerBlogsListByUserStatusEnum["Deleted"] = "DELETED";
})(BloggerBlogsListByUserStatusEnum || (BloggerBlogsListByUserStatusEnum = {}));
export var BloggerBlogsListByUserViewEnum;
(function (BloggerBlogsListByUserViewEnum) {
    BloggerBlogsListByUserViewEnum["ViewTypeUnspecified"] = "VIEW_TYPE_UNSPECIFIED";
    BloggerBlogsListByUserViewEnum["Reader"] = "READER";
    BloggerBlogsListByUserViewEnum["Author"] = "AUTHOR";
    BloggerBlogsListByUserViewEnum["Admin"] = "ADMIN";
})(BloggerBlogsListByUserViewEnum || (BloggerBlogsListByUserViewEnum = {}));
var BloggerBlogsListByUserQueryParams = /** @class */ (function (_super) {
    __extends(BloggerBlogsListByUserQueryParams, _super);
    function BloggerBlogsListByUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerBlogsListByUserQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerBlogsListByUserQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerBlogsListByUserQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerBlogsListByUserQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fetchUserInfo" }),
        __metadata("design:type", Boolean)
    ], BloggerBlogsListByUserQueryParams.prototype, "fetchUserInfo", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerBlogsListByUserQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerBlogsListByUserQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerBlogsListByUserQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerBlogsListByUserQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerBlogsListByUserQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=role" }),
        __metadata("design:type", Array)
    ], BloggerBlogsListByUserQueryParams.prototype, "role", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", Array)
    ], BloggerBlogsListByUserQueryParams.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerBlogsListByUserQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerBlogsListByUserQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], BloggerBlogsListByUserQueryParams.prototype, "view", void 0);
    return BloggerBlogsListByUserQueryParams;
}(SpeakeasyBase));
export { BloggerBlogsListByUserQueryParams };
var BloggerBlogsListByUserSecurityOption1 = /** @class */ (function (_super) {
    __extends(BloggerBlogsListByUserSecurityOption1, _super);
    function BloggerBlogsListByUserSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerBlogsListByUserSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerBlogsListByUserSecurityOption1.prototype, "oauth2c", void 0);
    return BloggerBlogsListByUserSecurityOption1;
}(SpeakeasyBase));
export { BloggerBlogsListByUserSecurityOption1 };
var BloggerBlogsListByUserSecurityOption2 = /** @class */ (function (_super) {
    __extends(BloggerBlogsListByUserSecurityOption2, _super);
    function BloggerBlogsListByUserSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerBlogsListByUserSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerBlogsListByUserSecurityOption2.prototype, "oauth2c", void 0);
    return BloggerBlogsListByUserSecurityOption2;
}(SpeakeasyBase));
export { BloggerBlogsListByUserSecurityOption2 };
var BloggerBlogsListByUserSecurity = /** @class */ (function (_super) {
    __extends(BloggerBlogsListByUserSecurity, _super);
    function BloggerBlogsListByUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerBlogsListByUserSecurityOption1)
    ], BloggerBlogsListByUserSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerBlogsListByUserSecurityOption2)
    ], BloggerBlogsListByUserSecurity.prototype, "option2", void 0);
    return BloggerBlogsListByUserSecurity;
}(SpeakeasyBase));
export { BloggerBlogsListByUserSecurity };
var BloggerBlogsListByUserRequest = /** @class */ (function (_super) {
    __extends(BloggerBlogsListByUserRequest, _super);
    function BloggerBlogsListByUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerBlogsListByUserPathParams)
    ], BloggerBlogsListByUserRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerBlogsListByUserQueryParams)
    ], BloggerBlogsListByUserRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerBlogsListByUserSecurity)
    ], BloggerBlogsListByUserRequest.prototype, "security", void 0);
    return BloggerBlogsListByUserRequest;
}(SpeakeasyBase));
export { BloggerBlogsListByUserRequest };
var BloggerBlogsListByUserResponse = /** @class */ (function (_super) {
    __extends(BloggerBlogsListByUserResponse, _super);
    function BloggerBlogsListByUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BlogList)
    ], BloggerBlogsListByUserResponse.prototype, "blogList", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BloggerBlogsListByUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BloggerBlogsListByUserResponse.prototype, "statusCode", void 0);
    return BloggerBlogsListByUserResponse;
}(SpeakeasyBase));
export { BloggerBlogsListByUserResponse };
