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
var WebmastersSitemapsDeletePathParams = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsDeletePathParams, _super);
    function WebmastersSitemapsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=feedpath" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsDeletePathParams.prototype, "feedpath", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=siteUrl" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsDeletePathParams.prototype, "siteUrl", void 0);
    return WebmastersSitemapsDeletePathParams;
}(SpeakeasyBase));
export { WebmastersSitemapsDeletePathParams };
var WebmastersSitemapsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsDeleteQueryParams, _super);
    function WebmastersSitemapsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WebmastersSitemapsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WebmastersSitemapsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return WebmastersSitemapsDeleteQueryParams;
}(SpeakeasyBase));
export { WebmastersSitemapsDeleteQueryParams };
var WebmastersSitemapsDeleteSecurity = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsDeleteSecurity, _super);
    function WebmastersSitemapsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebmastersSitemapsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebmastersSitemapsDeleteSecurity.prototype, "oauth2c", void 0);
    return WebmastersSitemapsDeleteSecurity;
}(SpeakeasyBase));
export { WebmastersSitemapsDeleteSecurity };
var WebmastersSitemapsDeleteRequest = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsDeleteRequest, _super);
    function WebmastersSitemapsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", WebmastersSitemapsDeletePathParams)
    ], WebmastersSitemapsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WebmastersSitemapsDeleteQueryParams)
    ], WebmastersSitemapsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WebmastersSitemapsDeleteSecurity)
    ], WebmastersSitemapsDeleteRequest.prototype, "security", void 0);
    return WebmastersSitemapsDeleteRequest;
}(SpeakeasyBase));
export { WebmastersSitemapsDeleteRequest };
var WebmastersSitemapsDeleteResponse = /** @class */ (function (_super) {
    __extends(WebmastersSitemapsDeleteResponse, _super);
    function WebmastersSitemapsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], WebmastersSitemapsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], WebmastersSitemapsDeleteResponse.prototype, "statusCode", void 0);
    return WebmastersSitemapsDeleteResponse;
}(SpeakeasyBase));
export { WebmastersSitemapsDeleteResponse };
