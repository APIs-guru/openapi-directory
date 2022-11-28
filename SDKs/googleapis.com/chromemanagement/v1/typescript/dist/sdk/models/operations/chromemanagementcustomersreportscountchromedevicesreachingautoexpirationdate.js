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
var ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams, _super);
    function ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customer" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams.prototype, "customer", void 0);
    return ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams };
var ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams, _super);
    function ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAueDate" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams.prototype, "maxAueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minAueDate" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams.prototype, "minAueDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orgUnitId" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams.prototype, "orgUnitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams.prototype, "uploadProtocol", void 0);
    return ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams };
var ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity, _super);
    function ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity.prototype, "oauth2c", void 0);
    return ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity };
var ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest, _super);
    function ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDatePathParams)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateQueryParams)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateSecurity)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest.prototype, "security", void 0);
    return ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateRequest };
var ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse = /** @class */ (function (_super) {
    __extends(ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse, _super);
    function ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse.prototype, "googleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse.prototype, "statusCode", void 0);
    return ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse;
}(SpeakeasyBase));
export { ChromemanagementCustomersReportsCountChromeDevicesReachingAutoExpirationDateResponse };
