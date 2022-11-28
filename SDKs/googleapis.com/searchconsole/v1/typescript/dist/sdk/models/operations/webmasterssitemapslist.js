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
var WebmastersSitemapsListPathParams = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsListPathParams, _super);
    function WebmastersSitemapsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteUrl" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsListPathParams.prototype, "siteUrl", void 0);
    return WebmastersSitemapsListPathParams;
}(SpeakeasyBase));
export { WebmastersSitemapsListPathParams };
var WebmastersSitemapsListQueryParams = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsListQueryParams, _super);
    function WebmastersSitemapsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WebmastersSitemapsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sitemapIndex" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsListQueryParams.prototype, "sitemapIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsListQueryParams.prototype, "uploadProtocol", void 0);
    return WebmastersSitemapsListQueryParams;
}(SpeakeasyBase));
export { WebmastersSitemapsListQueryParams };
var WebmastersSitemapsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsListSecurityOption1, _super);
    function WebmastersSitemapsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebmastersSitemapsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebmastersSitemapsListSecurityOption1.prototype, "oauth2c", void 0);
    return WebmastersSitemapsListSecurityOption1;
}(SpeakeasyBase));
export { WebmastersSitemapsListSecurityOption1 };
var WebmastersSitemapsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsListSecurityOption2, _super);
    function WebmastersSitemapsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebmastersSitemapsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebmastersSitemapsListSecurityOption2.prototype, "oauth2c", void 0);
    return WebmastersSitemapsListSecurityOption2;
}(SpeakeasyBase));
export { WebmastersSitemapsListSecurityOption2 };
var WebmastersSitemapsListSecurity = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsListSecurity, _super);
    function WebmastersSitemapsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", WebmastersSitemapsListSecurityOption1)
    ], WebmastersSitemapsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", WebmastersSitemapsListSecurityOption2)
    ], WebmastersSitemapsListSecurity.prototype, "option2", void 0);
    return WebmastersSitemapsListSecurity;
}(SpeakeasyBase));
export { WebmastersSitemapsListSecurity };
var WebmastersSitemapsListRequest = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsListRequest, _super);
    function WebmastersSitemapsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebmastersSitemapsListPathParams)
    ], WebmastersSitemapsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebmastersSitemapsListQueryParams)
    ], WebmastersSitemapsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebmastersSitemapsListSecurity)
    ], WebmastersSitemapsListRequest.prototype, "security", void 0);
    return WebmastersSitemapsListRequest;
}(SpeakeasyBase));
export { WebmastersSitemapsListRequest };
var WebmastersSitemapsListResponse = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsListResponse, _super);
    function WebmastersSitemapsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WebmastersSitemapsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SitemapsListResponse)
    ], WebmastersSitemapsListResponse.prototype, "sitemapsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WebmastersSitemapsListResponse.prototype, "statusCode", void 0);
    return WebmastersSitemapsListResponse;
}(SpeakeasyBase));
export { WebmastersSitemapsListResponse };
