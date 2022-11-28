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
var GetNetworkSmDevicePerformanceHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmDevicePerformanceHistoryPathParams, _super);
    function GetNetworkSmDevicePerformanceHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], GetNetworkSmDevicePerformanceHistoryPathParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkSmDevicePerformanceHistoryPathParams.prototype, "networkId", void 0);
    return GetNetworkSmDevicePerformanceHistoryPathParams;
}(SpeakeasyBase));
export { GetNetworkSmDevicePerformanceHistoryPathParams };
var GetNetworkSmDevicePerformanceHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmDevicePerformanceHistoryQueryParams, _super);
    function GetNetworkSmDevicePerformanceHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetNetworkSmDevicePerformanceHistoryQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetNetworkSmDevicePerformanceHistoryQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetNetworkSmDevicePerformanceHistoryQueryParams.prototype, "startingAfter", void 0);
    return GetNetworkSmDevicePerformanceHistoryQueryParams;
}(SpeakeasyBase));
export { GetNetworkSmDevicePerformanceHistoryQueryParams };
var GetNetworkSmDevicePerformanceHistoryRequest = /** @class */ (function (_super) {
    __extends(GetNetworkSmDevicePerformanceHistoryRequest, _super);
    function GetNetworkSmDevicePerformanceHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSmDevicePerformanceHistoryPathParams)
    ], GetNetworkSmDevicePerformanceHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSmDevicePerformanceHistoryQueryParams)
    ], GetNetworkSmDevicePerformanceHistoryRequest.prototype, "queryParams", void 0);
    return GetNetworkSmDevicePerformanceHistoryRequest;
}(SpeakeasyBase));
export { GetNetworkSmDevicePerformanceHistoryRequest };
var GetNetworkSmDevicePerformanceHistoryResponse = /** @class */ (function (_super) {
    __extends(GetNetworkSmDevicePerformanceHistoryResponse, _super);
    function GetNetworkSmDevicePerformanceHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkSmDevicePerformanceHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkSmDevicePerformanceHistoryResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkSmDevicePerformanceHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkSmDevicePerformanceHistoryResponse.prototype, "getNetworkSmDevicePerformanceHistory200ApplicationJsonObject", void 0);
    return GetNetworkSmDevicePerformanceHistoryResponse;
}(SpeakeasyBase));
export { GetNetworkSmDevicePerformanceHistoryResponse };
