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
var ChromemanagementCustomersTelemetryDevicesGetPathParams = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersTelemetryDevicesGetPathParams, _super);
    function ChromemanagementCustomersTelemetryDevicesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersTelemetryDevicesGetPathParams.prototype, "name", void 0);
    return ChromemanagementCustomersTelemetryDevicesGetPathParams;
}(SpeakeasyBase));
export { ChromemanagementCustomersTelemetryDevicesGetPathParams };
var ChromemanagementCustomersTelemetryDevicesGetQueryParams = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersTelemetryDevicesGetQueryParams, _super);
    function ChromemanagementCustomersTelemetryDevicesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersTelemetryDevicesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersTelemetryDevicesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersTelemetryDevicesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersTelemetryDevicesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersTelemetryDevicesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersTelemetryDevicesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersTelemetryDevicesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChromemanagementCustomersTelemetryDevicesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersTelemetryDevicesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersTelemetryDevicesGetQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersTelemetryDevicesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersTelemetryDevicesGetQueryParams.prototype, "uploadProtocol", void 0);
    return ChromemanagementCustomersTelemetryDevicesGetQueryParams;
}(SpeakeasyBase));
export { ChromemanagementCustomersTelemetryDevicesGetQueryParams };
var ChromemanagementCustomersTelemetryDevicesGetSecurity = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersTelemetryDevicesGetSecurity, _super);
    function ChromemanagementCustomersTelemetryDevicesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChromemanagementCustomersTelemetryDevicesGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChromemanagementCustomersTelemetryDevicesGetSecurity.prototype, "oauth2c", void 0);
    return ChromemanagementCustomersTelemetryDevicesGetSecurity;
}(SpeakeasyBase));
export { ChromemanagementCustomersTelemetryDevicesGetSecurity };
var ChromemanagementCustomersTelemetryDevicesGetRequest = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersTelemetryDevicesGetRequest, _super);
    function ChromemanagementCustomersTelemetryDevicesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersTelemetryDevicesGetPathParams)
    ], ChromemanagementCustomersTelemetryDevicesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersTelemetryDevicesGetQueryParams)
    ], ChromemanagementCustomersTelemetryDevicesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersTelemetryDevicesGetSecurity)
    ], ChromemanagementCustomersTelemetryDevicesGetRequest.prototype, "security", void 0);
    return ChromemanagementCustomersTelemetryDevicesGetRequest;
}(SpeakeasyBase));
export { ChromemanagementCustomersTelemetryDevicesGetRequest };
var ChromemanagementCustomersTelemetryDevicesGetResponse = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersTelemetryDevicesGetResponse, _super);
    function ChromemanagementCustomersTelemetryDevicesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChromemanagementCustomersTelemetryDevicesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleChromeManagementV1TelemetryDevice)
    ], ChromemanagementCustomersTelemetryDevicesGetResponse.prototype, "googleChromeManagementV1TelemetryDevice", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChromemanagementCustomersTelemetryDevicesGetResponse.prototype, "statusCode", void 0);
    return ChromemanagementCustomersTelemetryDevicesGetResponse;
}(SpeakeasyBase));
export { ChromemanagementCustomersTelemetryDevicesGetResponse };
