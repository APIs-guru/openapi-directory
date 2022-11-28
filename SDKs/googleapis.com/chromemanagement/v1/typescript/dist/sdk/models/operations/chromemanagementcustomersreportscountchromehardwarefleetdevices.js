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
var ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesPathParams = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesPathParams, _super);
    function ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesPathParams.prototype, "customer", void 0);
    return ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesPathParams;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesPathParams };
var ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams, _super);
    function ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgUnitId" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams.prototype, "orgUnitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams.prototype, "uploadProtocol", void 0);
    return ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams };
var ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity, _super);
    function ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity.prototype, "oauth2c", void 0);
    return ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity };
var ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest, _super);
    function ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesPathParams)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesQueryParams)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesSecurity)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest.prototype, "security", void 0);
    return ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesRequest };
var ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse, _super);
    function ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse.prototype, "googleChromeManagementV1CountChromeHardwareFleetDevicesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse.prototype, "statusCode", void 0);
    return ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeHardwareFleetDevicesResponse };
