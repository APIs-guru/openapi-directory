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
var BloggerPageViewsGetPathParams = /** @class */ (function (_super) {
    __extends(BloggerPageViewsGetPathParams, _super);
    function BloggerPageViewsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=blogId" }),
        __metadata("design:type", String)
    ], BloggerPageViewsGetPathParams.prototype, "blogId", void 0);
    return BloggerPageViewsGetPathParams;
}(SpeakeasyBase));
export { BloggerPageViewsGetPathParams };
export var BloggerPageViewsGetRangeEnum;
(function (BloggerPageViewsGetRangeEnum) {
    BloggerPageViewsGetRangeEnum["All"] = "all";
    BloggerPageViewsGetRangeEnum["ThirtyDays"] = "30DAYS";
    BloggerPageViewsGetRangeEnum["SevenDays"] = "7DAYS";
})(BloggerPageViewsGetRangeEnum || (BloggerPageViewsGetRangeEnum = {}));
var BloggerPageViewsGetQueryParams = /** @class */ (function (_super) {
    __extends(BloggerPageViewsGetQueryParams, _super);
    function BloggerPageViewsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BloggerPageViewsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BloggerPageViewsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BloggerPageViewsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BloggerPageViewsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BloggerPageViewsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BloggerPageViewsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BloggerPageViewsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BloggerPageViewsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BloggerPageViewsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=range" }),
        __metadata("design:type", Array)
    ], BloggerPageViewsGetQueryParams.prototype, "range", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BloggerPageViewsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BloggerPageViewsGetQueryParams.prototype, "uploadProtocol", void 0);
    return BloggerPageViewsGetQueryParams;
}(SpeakeasyBase));
export { BloggerPageViewsGetQueryParams };
var BloggerPageViewsGetSecurity = /** @class */ (function (_super) {
    __extends(BloggerPageViewsGetSecurity, _super);
    function BloggerPageViewsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BloggerPageViewsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BloggerPageViewsGetSecurity.prototype, "oauth2c", void 0);
    return BloggerPageViewsGetSecurity;
}(SpeakeasyBase));
export { BloggerPageViewsGetSecurity };
var BloggerPageViewsGetRequest = /** @class */ (function (_super) {
    __extends(BloggerPageViewsGetRequest, _super);
    function BloggerPageViewsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPageViewsGetPathParams)
    ], BloggerPageViewsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPageViewsGetQueryParams)
    ], BloggerPageViewsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", BloggerPageViewsGetSecurity)
    ], BloggerPageViewsGetRequest.prototype, "security", void 0);
    return BloggerPageViewsGetRequest;
}(SpeakeasyBase));
export { BloggerPageViewsGetRequest };
var BloggerPageViewsGetResponse = /** @class */ (function (_super) {
    __extends(BloggerPageViewsGetResponse, _super);
    function BloggerPageViewsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], BloggerPageViewsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Pageviews)
    ], BloggerPageViewsGetResponse.prototype, "pageviews", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], BloggerPageViewsGetResponse.prototype, "statusCode", void 0);
    return BloggerPageViewsGetResponse;
}(SpeakeasyBase));
export { BloggerPageViewsGetResponse };
