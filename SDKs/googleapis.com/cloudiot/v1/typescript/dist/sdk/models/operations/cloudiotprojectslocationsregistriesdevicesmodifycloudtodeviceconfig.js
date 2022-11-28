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
var CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams, _super);
    function CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams.prototype, "name", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams };
var CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams, _super);
    function CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams.prototype, "uploadProtocol", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams };
var CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1, _super);
    function CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1 };
var CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2, _super);
    function CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2 };
var CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity, _super);
    function CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption1)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurityOption2)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity.prototype, "option2", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity };
var CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest, _super);
    function CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigPathParams)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigQueryParams)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifyCloudToDeviceConfigRequest)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigSecurity)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest.prototype, "security", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigRequest };
var CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse, _super);
    function CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DeviceConfig)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse.prototype, "deviceConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse.prototype, "statusCode", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesModifyCloudToDeviceConfigResponse };
