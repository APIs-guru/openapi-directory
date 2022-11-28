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
var GetNetworkSmDeviceCellularUsageHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceCellularUsageHistoryPathParams, _super);
    function GetNetworkSmDeviceCellularUsageHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceCellularUsageHistoryPathParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceCellularUsageHistoryPathParams.prototype, "networkId", void 0);
    return GetNetworkSmDeviceCellularUsageHistoryPathParams;
}(SpeakeasyBase));
export { GetNetworkSmDeviceCellularUsageHistoryPathParams };
var GetNetworkSmDeviceCellularUsageHistoryRequest = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceCellularUsageHistoryRequest, _super);
    function GetNetworkSmDeviceCellularUsageHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSmDeviceCellularUsageHistoryPathParams)
    ], GetNetworkSmDeviceCellularUsageHistoryRequest.prototype, "pathParams", void 0);
    return GetNetworkSmDeviceCellularUsageHistoryRequest;
}(SpeakeasyBase));
export { GetNetworkSmDeviceCellularUsageHistoryRequest };
var GetNetworkSmDeviceCellularUsageHistoryResponse = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceCellularUsageHistoryResponse, _super);
    function GetNetworkSmDeviceCellularUsageHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceCellularUsageHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkSmDeviceCellularUsageHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkSmDeviceCellularUsageHistoryResponse.prototype, "getNetworkSmDeviceCellularUsageHistory200ApplicationJsonObject", void 0);
    return GetNetworkSmDeviceCellularUsageHistoryResponse;
}(SpeakeasyBase));
export { GetNetworkSmDeviceCellularUsageHistoryResponse };
