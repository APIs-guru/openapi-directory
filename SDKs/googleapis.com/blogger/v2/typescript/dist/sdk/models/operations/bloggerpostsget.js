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
var BloggerPostsGetPathParams = /** @class */ (function (_super) {
    __extends(BloggerPostsGetPathParams, _super);
    function BloggerPostsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerPostsGetPathParams.prototype, "blogId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=postId" }),
        __metadata("design:type", String)
    ], BloggerPostsGetPathParams.prototype, "postId", void 0);
    return BloggerPostsGetPathParams;
}(SpeakeasyBase));
export { BloggerPostsGetPathParams };
var BloggerPostsGetQueryParams = /** @class */ (function (_super) {
    __extends(BloggerPostsGetQueryParams, _super);
    function BloggerPostsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerPostsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerPostsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerPostsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerPostsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerPostsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerPostsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerPostsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerPostsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerPostsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerPostsGetQueryParams.prototype, "uploadProtocol", void 0);
    return BloggerPostsGetQueryParams;
}(SpeakeasyBase));
export { BloggerPostsGetQueryParams };
var BloggerPostsGetSecurity = /** @class */ (function (_super) {
    __extends(BloggerPostsGetSecurity, _super);
    function BloggerPostsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPostsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPostsGetSecurity.prototype, "oauth2c", void 0);
    return BloggerPostsGetSecurity;
}(SpeakeasyBase));
export { BloggerPostsGetSecurity };
var BloggerPostsGetRequest = /** @class */ (function (_super) {
    __extends(BloggerPostsGetRequest, _super);
    function BloggerPostsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPostsGetPathParams)
    ], BloggerPostsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPostsGetQueryParams)
    ], BloggerPostsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPostsGetSecurity)
    ], BloggerPostsGetRequest.prototype, "security", void 0);
    return BloggerPostsGetRequest;
}(SpeakeasyBase));
export { BloggerPostsGetRequest };
var BloggerPostsGetResponse = /** @class */ (function (_super) {
    __extends(BloggerPostsGetResponse, _super);
    function BloggerPostsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BloggerPostsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Post)
    ], BloggerPostsGetResponse.prototype, "post", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BloggerPostsGetResponse.prototype, "statusCode", void 0);
    return BloggerPostsGetResponse;
}(SpeakeasyBase));
export { BloggerPostsGetResponse };
