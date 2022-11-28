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
var BloggerCommentsMarkAsSpamPathParams = /** @class */ (function (_super) {
    __extends(BloggerCommentsMarkAsSpamPathParams, _super);
    function BloggerCommentsMarkAsSpamPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerCommentsMarkAsSpamPathParams.prototype, "blogId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" }),
        __metadata("design:type", String)
    ], BloggerCommentsMarkAsSpamPathParams.prototype, "commentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=postId" }),
        __metadata("design:type", String)
    ], BloggerCommentsMarkAsSpamPathParams.prototype, "postId", void 0);
    return BloggerCommentsMarkAsSpamPathParams;
}(SpeakeasyBase));
export { BloggerCommentsMarkAsSpamPathParams };
var BloggerCommentsMarkAsSpamQueryParams = /** @class */ (function (_super) {
    __extends(BloggerCommentsMarkAsSpamQueryParams, _super);
    function BloggerCommentsMarkAsSpamQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerCommentsMarkAsSpamQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerCommentsMarkAsSpamQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerCommentsMarkAsSpamQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerCommentsMarkAsSpamQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerCommentsMarkAsSpamQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerCommentsMarkAsSpamQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerCommentsMarkAsSpamQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerCommentsMarkAsSpamQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerCommentsMarkAsSpamQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerCommentsMarkAsSpamQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerCommentsMarkAsSpamQueryParams.prototype, "uploadProtocol", void 0);
    return BloggerCommentsMarkAsSpamQueryParams;
}(SpeakeasyBase));
export { BloggerCommentsMarkAsSpamQueryParams };
var BloggerCommentsMarkAsSpamSecurity = /** @class */ (function (_super) {
    __extends(BloggerCommentsMarkAsSpamSecurity, _super);
    function BloggerCommentsMarkAsSpamSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerCommentsMarkAsSpamSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerCommentsMarkAsSpamSecurity.prototype, "oauth2c", void 0);
    return BloggerCommentsMarkAsSpamSecurity;
}(SpeakeasyBase));
export { BloggerCommentsMarkAsSpamSecurity };
var BloggerCommentsMarkAsSpamRequest = /** @class */ (function (_super) {
    __extends(BloggerCommentsMarkAsSpamRequest, _super);
    function BloggerCommentsMarkAsSpamRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerCommentsMarkAsSpamPathParams)
    ], BloggerCommentsMarkAsSpamRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerCommentsMarkAsSpamQueryParams)
    ], BloggerCommentsMarkAsSpamRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BloggerCommentsMarkAsSpamSecurity)
    ], BloggerCommentsMarkAsSpamRequest.prototype, "security", void 0);
    return BloggerCommentsMarkAsSpamRequest;
}(SpeakeasyBase));
export { BloggerCommentsMarkAsSpamRequest };
var BloggerCommentsMarkAsSpamResponse = /** @class */ (function (_super) {
    __extends(BloggerCommentsMarkAsSpamResponse, _super);
    function BloggerCommentsMarkAsSpamResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Comment)
    ], BloggerCommentsMarkAsSpamResponse.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BloggerCommentsMarkAsSpamResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BloggerCommentsMarkAsSpamResponse.prototype, "statusCode", void 0);
    return BloggerCommentsMarkAsSpamResponse;
}(SpeakeasyBase));
export { BloggerCommentsMarkAsSpamResponse };
