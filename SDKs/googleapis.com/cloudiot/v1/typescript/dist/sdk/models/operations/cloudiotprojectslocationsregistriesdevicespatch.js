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
var CloudiotProjectsLocationsRegistriesDevicesPatchPathParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesPatchPathParams, _super);
    function CloudiotProjectsLocationsRegistriesDevicesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchPathParams.prototype, "name", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesPatchPathParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesPatchPathParams };
var CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams, _super);
    function CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams };
var CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1, _super);
    function CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1 };
var CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption2, _super);
    function CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption2;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption2 };
var CloudiotProjectsLocationsRegistriesDevicesPatchSecurity = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesPatchSecurity, _super);
    function CloudiotProjectsLocationsRegistriesDevicesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption1)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesPatchSecurityOption2)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchSecurity.prototype, "option2", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesPatchSecurity;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesPatchSecurity };
var CloudiotProjectsLocationsRegistriesDevicesPatchRequest = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesPatchRequest, _super);
    function CloudiotProjectsLocationsRegistriesDevicesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesPatchPathParams)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesPatchQueryParams)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Device)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesDevicesPatchSecurity)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchRequest.prototype, "security", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesPatchRequest;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesPatchRequest };
var CloudiotProjectsLocationsRegistriesDevicesPatchResponse = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesDevicesPatchResponse, _super);
    function CloudiotProjectsLocationsRegistriesDevicesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Device)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchResponse.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudiotProjectsLocationsRegistriesDevicesPatchResponse.prototype, "statusCode", void 0);
    return CloudiotProjectsLocationsRegistriesDevicesPatchResponse;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesDevicesPatchResponse };
