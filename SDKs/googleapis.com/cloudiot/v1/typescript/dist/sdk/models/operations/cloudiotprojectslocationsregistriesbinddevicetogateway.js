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
var CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams, _super);
    function CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams.prototype, "parent", void 0);
    return CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams };
var CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams, _super);
    function CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams.prototype, "uploadProtocol", void 0);
    return CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams };
var CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1, _super);
    function CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1 };
var CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2, _super);
    function CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2.prototype, "oauth2c", void 0);
    return CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2 };
var CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity, _super);
    function CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity.prototype, "option2", void 0);
    return CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity };
var CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest, _super);
    function CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesBindDeviceToGatewayPathParams)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesBindDeviceToGatewayQueryParams)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BindDeviceToGatewayRequest)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest.prototype, "security", void 0);
    return CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest };
var CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse = /** @class */ (function (_super) {
    __extends(CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse, _super);
    function CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse.prototype, "bindDeviceToGatewayResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse.prototype, "statusCode", void 0);
    return CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse;
}(SpeakeasyBase));
export { CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse };
