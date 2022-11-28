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
var BloggerPostUserInfosGetPathParams = /** @class */ (function (_super) {
    __extends(BloggerPostUserInfosGetPathParams, _super);
    function BloggerPostUserInfosGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosGetPathParams.prototype, "blogId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=postId" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosGetPathParams.prototype, "postId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosGetPathParams.prototype, "userId", void 0);
    return BloggerPostUserInfosGetPathParams;
}(SpeakeasyBase));
export { BloggerPostUserInfosGetPathParams };
var BloggerPostUserInfosGetQueryParams = /** @class */ (function (_super) {
    __extends(BloggerPostUserInfosGetQueryParams, _super);
    function BloggerPostUserInfosGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxComments" }),
        __metadata("design:type", Number)
    ], BloggerPostUserInfosGetQueryParams.prototype, "maxComments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerPostUserInfosGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerPostUserInfosGetQueryParams.prototype, "uploadProtocol", void 0);
    return BloggerPostUserInfosGetQueryParams;
}(SpeakeasyBase));
export { BloggerPostUserInfosGetQueryParams };
var BloggerPostUserInfosGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(BloggerPostUserInfosGetSecurityOption1, _super);
    function BloggerPostUserInfosGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPostUserInfosGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPostUserInfosGetSecurityOption1.prototype, "oauth2c", void 0);
    return BloggerPostUserInfosGetSecurityOption1;
}(SpeakeasyBase));
export { BloggerPostUserInfosGetSecurityOption1 };
var BloggerPostUserInfosGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(BloggerPostUserInfosGetSecurityOption2, _super);
    function BloggerPostUserInfosGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPostUserInfosGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPostUserInfosGetSecurityOption2.prototype, "oauth2c", void 0);
    return BloggerPostUserInfosGetSecurityOption2;
}(SpeakeasyBase));
export { BloggerPostUserInfosGetSecurityOption2 };
var BloggerPostUserInfosGetSecurity = /** @class */ (function (_super) {
    __extends(BloggerPostUserInfosGetSecurity, _super);
    function BloggerPostUserInfosGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerPostUserInfosGetSecurityOption1)
    ], BloggerPostUserInfosGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BloggerPostUserInfosGetSecurityOption2)
    ], BloggerPostUserInfosGetSecurity.prototype, "option2", void 0);
    return BloggerPostUserInfosGetSecurity;
}(SpeakeasyBase));
export { BloggerPostUserInfosGetSecurity };
var BloggerPostUserInfosGetRequest = /** @class */ (function (_super) {
    __extends(BloggerPostUserInfosGetRequest, _super);
    function BloggerPostUserInfosGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPostUserInfosGetPathParams)
    ], BloggerPostUserInfosGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPostUserInfosGetQueryParams)
    ], BloggerPostUserInfosGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerPostUserInfosGetSecurity)
    ], BloggerPostUserInfosGetRequest.prototype, "security", void 0);
    return BloggerPostUserInfosGetRequest;
}(SpeakeasyBase));
export { BloggerPostUserInfosGetRequest };
var BloggerPostUserInfosGetResponse = /** @class */ (function (_super) {
    __extends(BloggerPostUserInfosGetResponse, _super);
    function BloggerPostUserInfosGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BloggerPostUserInfosGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PostUserInfo)
    ], BloggerPostUserInfosGetResponse.prototype, "postUserInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BloggerPostUserInfosGetResponse.prototype, "statusCode", void 0);
    return BloggerPostUserInfosGetResponse;
}(SpeakeasyBase));
export { BloggerPostUserInfosGetResponse };
