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
var ProdTtSasportalNodesDevicesSignDevicePathParams = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesDevicesSignDevicePathParams, _super);
    function ProdTtSasportalNodesDevicesSignDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesDevicesSignDevicePathParams.prototype, "name", void 0);
    return ProdTtSasportalNodesDevicesSignDevicePathParams;
}(SpeakeasyBase));
export { ProdTtSasportalNodesDevicesSignDevicePathParams };
var ProdTtSasportalNodesDevicesSignDeviceQueryParams = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesDevicesSignDeviceQueryParams, _super);
    function ProdTtSasportalNodesDevicesSignDeviceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesDevicesSignDeviceQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesDevicesSignDeviceQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesDevicesSignDeviceQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesDevicesSignDeviceQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesDevicesSignDeviceQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesDevicesSignDeviceQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesDevicesSignDeviceQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ProdTtSasportalNodesDevicesSignDeviceQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesDevicesSignDeviceQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesDevicesSignDeviceQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesDevicesSignDeviceQueryParams.prototype, "uploadProtocol", void 0);
    return ProdTtSasportalNodesDevicesSignDeviceQueryParams;
}(SpeakeasyBase));
export { ProdTtSasportalNodesDevicesSignDeviceQueryParams };
var ProdTtSasportalNodesDevicesSignDeviceSecurity = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesDevicesSignDeviceSecurity, _super);
    function ProdTtSasportalNodesDevicesSignDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ProdTtSasportalNodesDevicesSignDeviceSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ProdTtSasportalNodesDevicesSignDeviceSecurity.prototype, "oauth2c", void 0);
    return ProdTtSasportalNodesDevicesSignDeviceSecurity;
}(SpeakeasyBase));
export { ProdTtSasportalNodesDevicesSignDeviceSecurity };
var ProdTtSasportalNodesDevicesSignDeviceRequest = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesDevicesSignDeviceRequest, _super);
    function ProdTtSasportalNodesDevicesSignDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProdTtSasportalNodesDevicesSignDevicePathParams)
    ], ProdTtSasportalNodesDevicesSignDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProdTtSasportalNodesDevicesSignDeviceQueryParams)
    ], ProdTtSasportalNodesDevicesSignDeviceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SasPortalSignDeviceRequestInput)
    ], ProdTtSasportalNodesDevicesSignDeviceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ProdTtSasportalNodesDevicesSignDeviceSecurity)
    ], ProdTtSasportalNodesDevicesSignDeviceRequest.prototype, "security", void 0);
    return ProdTtSasportalNodesDevicesSignDeviceRequest;
}(SpeakeasyBase));
export { ProdTtSasportalNodesDevicesSignDeviceRequest };
var ProdTtSasportalNodesDevicesSignDeviceResponse = /** @class */ (function (_super) {
    __extends(ProdTtSasportalNodesDevicesSignDeviceResponse, _super);
    function ProdTtSasportalNodesDevicesSignDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ProdTtSasportalNodesDevicesSignDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ProdTtSasportalNodesDevicesSignDeviceResponse.prototype, "sasPortalEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ProdTtSasportalNodesDevicesSignDeviceResponse.prototype, "statusCode", void 0);
    return ProdTtSasportalNodesDevicesSignDeviceResponse;
}(SpeakeasyBase));
export { ProdTtSasportalNodesDevicesSignDeviceResponse };
