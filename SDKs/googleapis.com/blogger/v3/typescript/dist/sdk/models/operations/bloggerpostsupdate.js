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
var BloggerPostsUpdatePathParams = /** @class */ (function (_super) {
    __extends(BloggerPostsUpdatePathParams, _super);
    function BloggerPostsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerPostsUpdatePathParams.prototype, "blogId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=postId" }),
        __metadata("design:type", String)
    ], BloggerPostsUpdatePathParams.prototype, "postId", void 0);
    return BloggerPostsUpdatePathParams;
}(SpeakeasyBase));
export { BloggerPostsUpdatePathParams };
var BloggerPostsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(BloggerPostsUpdateQueryParams, _super);
    function BloggerPostsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerPostsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerPostsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerPostsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerPostsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fetchBody" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsUpdateQueryParams.prototype, "fetchBody", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fetchImages" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsUpdateQueryParams.prototype, "fetchImages", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerPostsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerPostsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=maxComments" }),
        __metadata("design:type", Number)
    ], BloggerPostsUpdateQueryParams.prototype, "maxComments", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerPostsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=publish" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsUpdateQueryParams.prototype, "publish", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerPostsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=revert" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsUpdateQueryParams.prototype, "revert", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerPostsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerPostsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return BloggerPostsUpdateQueryParams;
}(SpeakeasyBase));
export { BloggerPostsUpdateQueryParams };
var BloggerPostsUpdateSecurity = /** @class */ (function (_super) {
    __extends(BloggerPostsUpdateSecurity, _super);
    function BloggerPostsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPostsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPostsUpdateSecurity.prototype, "oauth2c", void 0);
    return BloggerPostsUpdateSecurity;
}(SpeakeasyBase));
export { BloggerPostsUpdateSecurity };
var BloggerPostsUpdateRequest = /** @class */ (function (_super) {
    __extends(BloggerPostsUpdateRequest, _super);
    function BloggerPostsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPostsUpdatePathParams)
    ], BloggerPostsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPostsUpdateQueryParams)
    ], BloggerPostsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Post)
    ], BloggerPostsUpdateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPostsUpdateSecurity)
    ], BloggerPostsUpdateRequest.prototype, "security", void 0);
    return BloggerPostsUpdateRequest;
}(SpeakeasyBase));
export { BloggerPostsUpdateRequest };
var BloggerPostsUpdateResponse = /** @class */ (function (_super) {
    __extends(BloggerPostsUpdateResponse, _super);
    function BloggerPostsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BloggerPostsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Post)
    ], BloggerPostsUpdateResponse.prototype, "post", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BloggerPostsUpdateResponse.prototype, "statusCode", void 0);
    return BloggerPostsUpdateResponse;
}(SpeakeasyBase));
export { BloggerPostsUpdateResponse };
