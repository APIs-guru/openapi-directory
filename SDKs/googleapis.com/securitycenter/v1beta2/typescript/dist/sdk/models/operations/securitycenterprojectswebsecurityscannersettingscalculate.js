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
var SecuritycenterProjectsWebSecurityScannerSettingsCalculatePathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsWebSecurityScannerSettingsCalculatePathParams, _super);
    function SecuritycenterProjectsWebSecurityScannerSettingsCalculatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculatePathParams.prototype, "name", void 0);
    return SecuritycenterProjectsWebSecurityScannerSettingsCalculatePathParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsWebSecurityScannerSettingsCalculatePathParams };
var SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams, _super);
    function SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams;
}(SpeakeasyBase));
export { SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams };
var SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity, _super);
    function SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity;
}(SpeakeasyBase));
export { SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity };
var SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest, _super);
    function SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterProjectsWebSecurityScannerSettingsCalculatePathParams)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterProjectsWebSecurityScannerSettingsCalculateQueryParams)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SecuritycenterProjectsWebSecurityScannerSettingsCalculateSecurity)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest.prototype, "security", void 0);
    return SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest;
}(SpeakeasyBase));
export { SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest };
var SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse, _super);
    function SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.WebSecurityScannerSettings)
    ], SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse.prototype, "webSecurityScannerSettings", void 0);
    return SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse;
}(SpeakeasyBase));
export { SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse };
