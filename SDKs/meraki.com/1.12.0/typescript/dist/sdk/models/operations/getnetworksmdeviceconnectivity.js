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
var GetNetworkSmDeviceConnectivityPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceConnectivityPathParams, _super);
    function GetNetworkSmDeviceConnectivityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceConnectivityPathParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceConnectivityPathParams.prototype, "networkId", void 0);
    return GetNetworkSmDeviceConnectivityPathParams;
}(SpeakeasyBase));
export { GetNetworkSmDeviceConnectivityPathParams };
var GetNetworkSmDeviceConnectivityQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceConnectivityQueryParams, _super);
    function GetNetworkSmDeviceConnectivityQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceConnectivityQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetNetworkSmDeviceConnectivityQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceConnectivityQueryParams.prototype, "startingAfter", void 0);
    return GetNetworkSmDeviceConnectivityQueryParams;
}(SpeakeasyBase));
export { GetNetworkSmDeviceConnectivityQueryParams };
var GetNetworkSmDeviceConnectivityRequest = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceConnectivityRequest, _super);
    function GetNetworkSmDeviceConnectivityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSmDeviceConnectivityPathParams)
    ], GetNetworkSmDeviceConnectivityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSmDeviceConnectivityQueryParams)
    ], GetNetworkSmDeviceConnectivityRequest.prototype, "queryParams", void 0);
    return GetNetworkSmDeviceConnectivityRequest;
}(SpeakeasyBase));
export { GetNetworkSmDeviceConnectivityRequest };
var GetNetworkSmDeviceConnectivityResponse = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceConnectivityResponse, _super);
    function GetNetworkSmDeviceConnectivityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceConnectivityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkSmDeviceConnectivityResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkSmDeviceConnectivityResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkSmDeviceConnectivityResponse.prototype, "getNetworkSmDeviceConnectivity200ApplicationJsonObject", void 0);
    return GetNetworkSmDeviceConnectivityResponse;
}(SpeakeasyBase));
export { GetNetworkSmDeviceConnectivityResponse };
