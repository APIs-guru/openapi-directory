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
var BloggerPostsInsertPathParams = /** @class */ (function (_super) {
    __extends(BloggerPostsInsertPathParams, _super);
    function BloggerPostsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerPostsInsertPathParams.prototype, "blogId", void 0);
    return BloggerPostsInsertPathParams;
}(SpeakeasyBase));
export { BloggerPostsInsertPathParams };
var BloggerPostsInsertQueryParams = /** @class */ (function (_super) {
    __extends(BloggerPostsInsertQueryParams, _super);
    function BloggerPostsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerPostsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerPostsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerPostsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerPostsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fetchBody" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsInsertQueryParams.prototype, "fetchBody", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fetchImages" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsInsertQueryParams.prototype, "fetchImages", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerPostsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=isDraft" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsInsertQueryParams.prototype, "isDraft", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerPostsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerPostsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerPostsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerPostsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerPostsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerPostsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return BloggerPostsInsertQueryParams;
}(SpeakeasyBase));
export { BloggerPostsInsertQueryParams };
var BloggerPostsInsertSecurity = /** @class */ (function (_super) {
    __extends(BloggerPostsInsertSecurity, _super);
    function BloggerPostsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPostsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPostsInsertSecurity.prototype, "oauth2c", void 0);
    return BloggerPostsInsertSecurity;
}(SpeakeasyBase));
export { BloggerPostsInsertSecurity };
var BloggerPostsInsertRequest = /** @class */ (function (_super) {
    __extends(BloggerPostsInsertRequest, _super);
    function BloggerPostsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPostsInsertPathParams)
    ], BloggerPostsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPostsInsertQueryParams)
    ], BloggerPostsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Post)
    ], BloggerPostsInsertRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPostsInsertSecurity)
    ], BloggerPostsInsertRequest.prototype, "security", void 0);
    return BloggerPostsInsertRequest;
}(SpeakeasyBase));
export { BloggerPostsInsertRequest };
var BloggerPostsInsertResponse = /** @class */ (function (_super) {
    __extends(BloggerPostsInsertResponse, _super);
    function BloggerPostsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BloggerPostsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Post)
    ], BloggerPostsInsertResponse.prototype, "post", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BloggerPostsInsertResponse.prototype, "statusCode", void 0);
    return BloggerPostsInsertResponse;
}(SpeakeasyBase));
export { BloggerPostsInsertResponse };
