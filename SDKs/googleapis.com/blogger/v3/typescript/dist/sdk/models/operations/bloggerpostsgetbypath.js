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
var BloggerPostsGetByPathPathParams = /** @class */ (function (_super) {
    __extends(BloggerPostsGetByPathPathParams, _super);
    function BloggerPostsGetByPathPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerPostsGetByPathPathParams.prototype, "blogId", void 0);
    return BloggerPostsGetByPathPathParams;
}(SpeakeasyBase));
export { BloggerPostsGetByPathPathParams };
export var BloggerPostsGetByPathViewEnum;
(function (BloggerPostsGetByPathViewEnum) {
    BloggerPostsGetByPathViewEnum["ViewTypeUnspecified"] = "VIEW_TYPE_UNSPECIFIED";
    BloggerPostsGetByPathViewEnum["Reader"] = "READER";
    BloggerPostsGetByPathViewEnum["Author"] = "AUTHOR";
    BloggerPostsGetByPathViewEnum["Admin"] = "ADMIN";
})(BloggerPostsGetByPathViewEnum || (BloggerPostsGetByPathViewEnum = {}));
var BloggerPostsGetByPathQueryParams = /** @class */ (function (_super) {
    __extends(BloggerPostsGetByPathQueryParams, _super);
    function BloggerPostsGetByPathQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerPostsGetByPathQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerPostsGetByPathQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerPostsGetByPathQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerPostsGetByPathQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerPostsGetByPathQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerPostsGetByPathQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxComments" }),
        __metadata("design:type", Number)
    ], BloggerPostsGetByPathQueryParams.prototype, "maxComments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerPostsGetByPathQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" }),
        __metadata("design:type", String)
    ], BloggerPostsGetByPathQueryParams.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsGetByPathQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerPostsGetByPathQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerPostsGetByPathQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerPostsGetByPathQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], BloggerPostsGetByPathQueryParams.prototype, "view", void 0);
    return BloggerPostsGetByPathQueryParams;
}(SpeakeasyBase));
export { BloggerPostsGetByPathQueryParams };
var BloggerPostsGetByPathSecurityOption1 = /** @class */ (function (_super) {
    __extends(BloggerPostsGetByPathSecurityOption1, _super);
    function BloggerPostsGetByPathSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPostsGetByPathSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPostsGetByPathSecurityOption1.prototype, "oauth2c", void 0);
    return BloggerPostsGetByPathSecurityOption1;
}(SpeakeasyBase));
export { BloggerPostsGetByPathSecurityOption1 };
var BloggerPostsGetByPathSecurityOption2 = /** @class */ (function (_super) {
    __extends(BloggerPostsGetByPathSecurityOption2, _super);
    function BloggerPostsGetByPathSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPostsGetByPathSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPostsGetByPathSecurityOption2.prototype, "oauth2c", void 0);
    return BloggerPostsGetByPathSecurityOption2;
}(SpeakeasyBase));
export { BloggerPostsGetByPathSecurityOption2 };
var BloggerPostsGetByPathSecurity = /** @class */ (function (_super) {
    __extends(BloggerPostsGetByPathSecurity, _super);
    function BloggerPostsGetByPathSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerPostsGetByPathSecurityOption1)
    ], BloggerPostsGetByPathSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerPostsGetByPathSecurityOption2)
    ], BloggerPostsGetByPathSecurity.prototype, "option2", void 0);
    return BloggerPostsGetByPathSecurity;
}(SpeakeasyBase));
export { BloggerPostsGetByPathSecurity };
var BloggerPostsGetByPathRequest = /** @class */ (function (_super) {
    __extends(BloggerPostsGetByPathRequest, _super);
    function BloggerPostsGetByPathRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPostsGetByPathPathParams)
    ], BloggerPostsGetByPathRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPostsGetByPathQueryParams)
    ], BloggerPostsGetByPathRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPostsGetByPathSecurity)
    ], BloggerPostsGetByPathRequest.prototype, "security", void 0);
    return BloggerPostsGetByPathRequest;
}(SpeakeasyBase));
export { BloggerPostsGetByPathRequest };
var BloggerPostsGetByPathResponse = /** @class */ (function (_super) {
    __extends(BloggerPostsGetByPathResponse, _super);
    function BloggerPostsGetByPathResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BloggerPostsGetByPathResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Post)
    ], BloggerPostsGetByPathResponse.prototype, "post", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BloggerPostsGetByPathResponse.prototype, "statusCode", void 0);
    return BloggerPostsGetByPathResponse;
}(SpeakeasyBase));
export { BloggerPostsGetByPathResponse };
