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
var BloggerCommentsDeletePathParams = /** @class */ (function (_super) {
    __extends(BloggerCommentsDeletePathParams, _super);
    function BloggerCommentsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerCommentsDeletePathParams.prototype, "blogId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", String)
    ], BloggerCommentsDeletePathParams.prototype, "commentId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=postId" }),
        __metadata("design:type", String)
    ], BloggerCommentsDeletePathParams.prototype, "postId", void 0);
    return BloggerCommentsDeletePathParams;
}(SpeakeasyBase));
export { BloggerCommentsDeletePathParams };
var BloggerCommentsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(BloggerCommentsDeleteQueryParams, _super);
    function BloggerCommentsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerCommentsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerCommentsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerCommentsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerCommentsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerCommentsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerCommentsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerCommentsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerCommentsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerCommentsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerCommentsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerCommentsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return BloggerCommentsDeleteQueryParams;
}(SpeakeasyBase));
export { BloggerCommentsDeleteQueryParams };
var BloggerCommentsDeleteSecurity = /** @class */ (function (_super) {
    __extends(BloggerCommentsDeleteSecurity, _super);
    function BloggerCommentsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerCommentsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerCommentsDeleteSecurity.prototype, "oauth2c", void 0);
    return BloggerCommentsDeleteSecurity;
}(SpeakeasyBase));
export { BloggerCommentsDeleteSecurity };
var BloggerCommentsDeleteRequest = /** @class */ (function (_super) {
    __extends(BloggerCommentsDeleteRequest, _super);
    function BloggerCommentsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerCommentsDeletePathParams)
    ], BloggerCommentsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerCommentsDeleteQueryParams)
    ], BloggerCommentsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerCommentsDeleteSecurity)
    ], BloggerCommentsDeleteRequest.prototype, "security", void 0);
    return BloggerCommentsDeleteRequest;
}(SpeakeasyBase));
export { BloggerCommentsDeleteRequest };
var BloggerCommentsDeleteResponse = /** @class */ (function (_super) {
    __extends(BloggerCommentsDeleteResponse, _super);
    function BloggerCommentsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BloggerCommentsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BloggerCommentsDeleteResponse.prototype, "statusCode", void 0);
    return BloggerCommentsDeleteResponse;
}(SpeakeasyBase));
export { BloggerCommentsDeleteResponse };
