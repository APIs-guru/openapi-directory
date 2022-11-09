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
var BloggerCommentsGetPathParams = /** @class */ (function (_super) {
    __extends(BloggerCommentsGetPathParams, _super);
    function BloggerCommentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerCommentsGetPathParams.prototype, "blogId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", String)
    ], BloggerCommentsGetPathParams.prototype, "commentId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=postId" }),
        __metadata("design:type", String)
    ], BloggerCommentsGetPathParams.prototype, "postId", void 0);
    return BloggerCommentsGetPathParams;
}(SpeakeasyBase));
export { BloggerCommentsGetPathParams };
export var BloggerCommentsGetViewEnum;
(function (BloggerCommentsGetViewEnum) {
    BloggerCommentsGetViewEnum["ViewTypeUnspecified"] = "VIEW_TYPE_UNSPECIFIED";
    BloggerCommentsGetViewEnum["Reader"] = "READER";
    BloggerCommentsGetViewEnum["Author"] = "AUTHOR";
    BloggerCommentsGetViewEnum["Admin"] = "ADMIN";
})(BloggerCommentsGetViewEnum || (BloggerCommentsGetViewEnum = {}));
var BloggerCommentsGetQueryParams = /** @class */ (function (_super) {
    __extends(BloggerCommentsGetQueryParams, _super);
    function BloggerCommentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerCommentsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerCommentsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerCommentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerCommentsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerCommentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerCommentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerCommentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerCommentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerCommentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerCommentsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerCommentsGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], BloggerCommentsGetQueryParams.prototype, "view", void 0);
    return BloggerCommentsGetQueryParams;
}(SpeakeasyBase));
export { BloggerCommentsGetQueryParams };
var BloggerCommentsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(BloggerCommentsGetSecurityOption1, _super);
    function BloggerCommentsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerCommentsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerCommentsGetSecurityOption1.prototype, "oauth2c", void 0);
    return BloggerCommentsGetSecurityOption1;
}(SpeakeasyBase));
export { BloggerCommentsGetSecurityOption1 };
var BloggerCommentsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(BloggerCommentsGetSecurityOption2, _super);
    function BloggerCommentsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerCommentsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerCommentsGetSecurityOption2.prototype, "oauth2c", void 0);
    return BloggerCommentsGetSecurityOption2;
}(SpeakeasyBase));
export { BloggerCommentsGetSecurityOption2 };
var BloggerCommentsGetSecurity = /** @class */ (function (_super) {
    __extends(BloggerCommentsGetSecurity, _super);
    function BloggerCommentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerCommentsGetSecurityOption1)
    ], BloggerCommentsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerCommentsGetSecurityOption2)
    ], BloggerCommentsGetSecurity.prototype, "option2", void 0);
    return BloggerCommentsGetSecurity;
}(SpeakeasyBase));
export { BloggerCommentsGetSecurity };
var BloggerCommentsGetRequest = /** @class */ (function (_super) {
    __extends(BloggerCommentsGetRequest, _super);
    function BloggerCommentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerCommentsGetPathParams)
    ], BloggerCommentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerCommentsGetQueryParams)
    ], BloggerCommentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerCommentsGetSecurity)
    ], BloggerCommentsGetRequest.prototype, "security", void 0);
    return BloggerCommentsGetRequest;
}(SpeakeasyBase));
export { BloggerCommentsGetRequest };
var BloggerCommentsGetResponse = /** @class */ (function (_super) {
    __extends(BloggerCommentsGetResponse, _super);
    function BloggerCommentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Comment)
    ], BloggerCommentsGetResponse.prototype, "comment", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BloggerCommentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BloggerCommentsGetResponse.prototype, "statusCode", void 0);
    return BloggerCommentsGetResponse;
}(SpeakeasyBase));
export { BloggerCommentsGetResponse };
