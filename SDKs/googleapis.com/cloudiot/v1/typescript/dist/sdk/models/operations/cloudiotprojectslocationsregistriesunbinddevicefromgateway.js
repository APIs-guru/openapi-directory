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
var CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams, _super);
    function CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams.prototype, "parent", void 0);
    return CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams };
var CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams, _super);
    function CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams.prototype, "uploadProtocol", void 0);
    return CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams };
var CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1, _super);
    function CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1 };
var CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2, _super);
    function CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2 };
var CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity, _super);
    function CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption1)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurityOption2)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity.prototype, "option2", void 0);
    return CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity };
var CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest, _super);
    function CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayPathParams)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayQueryParams)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UnbindDeviceFromGatewayRequest)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewaySecurity)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest.prototype, "security", void 0);
    return CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayRequest };
var CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse, _super);
    function CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse.prototype, "unbindDeviceFromGatewayResponse", void 0);
    return CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesUnbindDeviceFromGatewayResponse };
