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
var WebmastersSitesGetPathParams = /** @class */ (function (_super) {
    __extends(WebmastersSitesGetPathParams, _super);
    function WebmastersSitesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=siteUrl" }),
        __metadata("design:type", String)
    ], WebmastersSitesGetPathParams.prototype, "siteUrl", void 0);
    return WebmastersSitesGetPathParams;
}(SpeakeasyBase));
export { WebmastersSitesGetPathParams };
var WebmastersSitesGetQueryParams = /** @class */ (function (_super) {
    __extends(WebmastersSitesGetQueryParams, _super);
    function WebmastersSitesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WebmastersSitesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WebmastersSitesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WebmastersSitesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WebmastersSitesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WebmastersSitesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WebmastersSitesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], WebmastersSitesGetQueryParams.prototype, "userIp", void 0);
    return WebmastersSitesGetQueryParams;
}(SpeakeasyBase));
export { WebmastersSitesGetQueryParams };
var WebmastersSitesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(WebmastersSitesGetSecurityOption1, _super);
    function WebmastersSitesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebmastersSitesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebmastersSitesGetSecurityOption1.prototype, "oauth2c", void 0);
    return WebmastersSitesGetSecurityOption1;
}(SpeakeasyBase));
export { WebmastersSitesGetSecurityOption1 };
var WebmastersSitesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(WebmastersSitesGetSecurityOption2, _super);
    function WebmastersSitesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebmastersSitesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebmastersSitesGetSecurityOption2.prototype, "oauth2c", void 0);
    return WebmastersSitesGetSecurityOption2;
}(SpeakeasyBase));
export { WebmastersSitesGetSecurityOption2 };
var WebmastersSitesGetSecurity = /** @class */ (function (_super) {
    __extends(WebmastersSitesGetSecurity, _super);
    function WebmastersSitesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", WebmastersSitesGetSecurityOption1)
    ], WebmastersSitesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", WebmastersSitesGetSecurityOption2)
    ], WebmastersSitesGetSecurity.prototype, "option2", void 0);
    return WebmastersSitesGetSecurity;
}(SpeakeasyBase));
export { WebmastersSitesGetSecurity };
var WebmastersSitesGetRequest = /** @class */ (function (_super) {
    __extends(WebmastersSitesGetRequest, _super);
    function WebmastersSitesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebmastersSitesGetPathParams)
    ], WebmastersSitesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebmastersSitesGetQueryParams)
    ], WebmastersSitesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebmastersSitesGetSecurity)
    ], WebmastersSitesGetRequest.prototype, "security", void 0);
    return WebmastersSitesGetRequest;
}(SpeakeasyBase));
export { WebmastersSitesGetRequest };
var WebmastersSitesGetResponse = /** @class */ (function (_super) {
    __extends(WebmastersSitesGetResponse, _super);
    function WebmastersSitesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WebmastersSitesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WebmastersSitesGetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WmxSite)
    ], WebmastersSitesGetResponse.prototype, "wmxSite", void 0);
    return WebmastersSitesGetResponse;
}(SpeakeasyBase));
export { WebmastersSitesGetResponse };
