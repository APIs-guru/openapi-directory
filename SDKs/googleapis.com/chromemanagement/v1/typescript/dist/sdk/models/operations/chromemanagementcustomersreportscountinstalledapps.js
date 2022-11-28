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
var ChromemanagementCustomersReportsCountInstalledAppsPathParams = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountInstalledAppsPathParams, _super);
    function ChromemanagementCustomersReportsCountInstalledAppsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsPathParams.prototype, "customer", void 0);
    return ChromemanagementCustomersReportsCountInstalledAppsPathParams;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountInstalledAppsPathParams };
var ChromemanagementCustomersReportsCountInstalledAppsQueryParams = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountInstalledAppsQueryParams, _super);
    function ChromemanagementCustomersReportsCountInstalledAppsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgUnitId" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "orgUnitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsQueryParams.prototype, "uploadProtocol", void 0);
    return ChromemanagementCustomersReportsCountInstalledAppsQueryParams;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountInstalledAppsQueryParams };
var ChromemanagementCustomersReportsCountInstalledAppsSecurity = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountInstalledAppsSecurity, _super);
    function ChromemanagementCustomersReportsCountInstalledAppsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChromemanagementCustomersReportsCountInstalledAppsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChromemanagementCustomersReportsCountInstalledAppsSecurity.prototype, "oauth2c", void 0);
    return ChromemanagementCustomersReportsCountInstalledAppsSecurity;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountInstalledAppsSecurity };
var ChromemanagementCustomersReportsCountInstalledAppsRequest = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountInstalledAppsRequest, _super);
    function ChromemanagementCustomersReportsCountInstalledAppsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsCountInstalledAppsPathParams)
    ], ChromemanagementCustomersReportsCountInstalledAppsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsCountInstalledAppsQueryParams)
    ], ChromemanagementCustomersReportsCountInstalledAppsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsCountInstalledAppsSecurity)
    ], ChromemanagementCustomersReportsCountInstalledAppsRequest.prototype, "security", void 0);
    return ChromemanagementCustomersReportsCountInstalledAppsRequest;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountInstalledAppsRequest };
var ChromemanagementCustomersReportsCountInstalledAppsResponse = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountInstalledAppsResponse, _super);
    function ChromemanagementCustomersReportsCountInstalledAppsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountInstalledAppsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleChromeManagementV1CountInstalledAppsResponse)
    ], ChromemanagementCustomersReportsCountInstalledAppsResponse.prototype, "googleChromeManagementV1CountInstalledAppsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChromemanagementCustomersReportsCountInstalledAppsResponse.prototype, "statusCode", void 0);
    return ChromemanagementCustomersReportsCountInstalledAppsResponse;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountInstalledAppsResponse };
