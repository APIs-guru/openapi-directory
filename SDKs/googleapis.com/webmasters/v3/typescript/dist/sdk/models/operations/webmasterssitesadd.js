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
var WebmastersSitesAddPathParams = /** @class */ (function (_super) {
    __extends(WebmastersSitesAddPathParams, _super);
    function WebmastersSitesAddPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteUrl" }),
        __metadata("design:type", String)
    ], WebmastersSitesAddPathParams.prototype, "siteUrl", void 0);
    return WebmastersSitesAddPathParams;
}(SpeakeasyBase));
export { WebmastersSitesAddPathParams };
var WebmastersSitesAddQueryParams = /** @class */ (function (_super) {
    __extends(WebmastersSitesAddQueryParams, _super);
    function WebmastersSitesAddQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WebmastersSitesAddQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WebmastersSitesAddQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WebmastersSitesAddQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WebmastersSitesAddQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WebmastersSitesAddQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WebmastersSitesAddQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], WebmastersSitesAddQueryParams.prototype, "userIp", void 0);
    return WebmastersSitesAddQueryParams;
}(SpeakeasyBase));
export { WebmastersSitesAddQueryParams };
var WebmastersSitesAddSecurity = /** @class */ (function (_super) {
    __extends(WebmastersSitesAddSecurity, _super);
    function WebmastersSitesAddSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebmastersSitesAddSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebmastersSitesAddSecurity.prototype, "oauth2c", void 0);
    return WebmastersSitesAddSecurity;
}(SpeakeasyBase));
export { WebmastersSitesAddSecurity };
var WebmastersSitesAddRequest = /** @class */ (function (_super) {
    __extends(WebmastersSitesAddRequest, _super);
    function WebmastersSitesAddRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebmastersSitesAddPathParams)
    ], WebmastersSitesAddRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebmastersSitesAddQueryParams)
    ], WebmastersSitesAddRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebmastersSitesAddSecurity)
    ], WebmastersSitesAddRequest.prototype, "security", void 0);
    return WebmastersSitesAddRequest;
}(SpeakeasyBase));
export { WebmastersSitesAddRequest };
var WebmastersSitesAddResponse = /** @class */ (function (_super) {
    __extends(WebmastersSitesAddResponse, _super);
    function WebmastersSitesAddResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WebmastersSitesAddResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WebmastersSitesAddResponse.prototype, "statusCode", void 0);
    return WebmastersSitesAddResponse;
}(SpeakeasyBase));
export { WebmastersSitesAddResponse };
