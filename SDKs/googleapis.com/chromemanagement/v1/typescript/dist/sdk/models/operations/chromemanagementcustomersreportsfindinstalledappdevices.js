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
var ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams, _super);
    function ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams.prototype, "customer", void 0);
    return ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams };
export var ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum;
(function (ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum) {
    ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum["AppTypeUnspecified"] = "APP_TYPE_UNSPECIFIED";
    ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum["Extension"] = "EXTENSION";
    ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum["App"] = "APP";
    ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum["Theme"] = "THEME";
    ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum["HostedApp"] = "HOSTED_APP";
    ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum["AndroidApp"] = "ANDROID_APP";
})(ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum || (ChromemanagementCustomersReportsFindInstalledAppDevicesAppTypeEnum = {}));
var ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams, _super);
    function ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appId" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appType" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "appType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgUnitId" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "orgUnitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams.prototype, "uploadProtocol", void 0);
    return ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams };
var ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity, _super);
    function ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity.prototype, "oauth2c", void 0);
    return ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity };
var ChromemanagementCustomersReportsFindInstalledAppDevicesRequest = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsFindInstalledAppDevicesRequest, _super);
    function ChromemanagementCustomersReportsFindInstalledAppDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsFindInstalledAppDevicesPathParams)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsFindInstalledAppDevicesQueryParams)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsFindInstalledAppDevicesSecurity)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesRequest.prototype, "security", void 0);
    return ChromemanagementCustomersReportsFindInstalledAppDevicesRequest;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsFindInstalledAppDevicesRequest };
var ChromemanagementCustomersReportsFindInstalledAppDevicesResponse = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsFindInstalledAppDevicesResponse, _super);
    function ChromemanagementCustomersReportsFindInstalledAppDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleChromeManagementV1FindInstalledAppDevicesResponse)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesResponse.prototype, "googleChromeManagementV1FindInstalledAppDevicesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChromemanagementCustomersReportsFindInstalledAppDevicesResponse.prototype, "statusCode", void 0);
    return ChromemanagementCustomersReportsFindInstalledAppDevicesResponse;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsFindInstalledAppDevicesResponse };
