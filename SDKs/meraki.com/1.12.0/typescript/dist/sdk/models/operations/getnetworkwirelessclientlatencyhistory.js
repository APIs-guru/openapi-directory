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
var GetNetworkWirelessClientLatencyHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientLatencyHistoryPathParams, _super);
    function GetNetworkWirelessClientLatencyHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientLatencyHistoryPathParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientLatencyHistoryPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessClientLatencyHistoryPathParams;
}(SpeakeasyBase));
export { GetNetworkWirelessClientLatencyHistoryPathParams };
var GetNetworkWirelessClientLatencyHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientLatencyHistoryQueryParams, _super);
    function GetNetworkWirelessClientLatencyHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientLatencyHistoryQueryParams.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientLatencyHistoryQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientLatencyHistoryQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientLatencyHistoryQueryParams.prototype, "timespan", void 0);
    return GetNetworkWirelessClientLatencyHistoryQueryParams;
}(SpeakeasyBase));
export { GetNetworkWirelessClientLatencyHistoryQueryParams };
var GetNetworkWirelessClientLatencyHistoryRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientLatencyHistoryRequest, _super);
    function GetNetworkWirelessClientLatencyHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessClientLatencyHistoryPathParams)
    ], GetNetworkWirelessClientLatencyHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessClientLatencyHistoryQueryParams)
    ], GetNetworkWirelessClientLatencyHistoryRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessClientLatencyHistoryRequest;
}(SpeakeasyBase));
export { GetNetworkWirelessClientLatencyHistoryRequest };
var GetNetworkWirelessClientLatencyHistoryResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientLatencyHistoryResponse, _super);
    function GetNetworkWirelessClientLatencyHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientLatencyHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientLatencyHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessClientLatencyHistoryResponse.prototype, "getNetworkWirelessClientLatencyHistory200ApplicationJsonObject", void 0);
    return GetNetworkWirelessClientLatencyHistoryResponse;
}(SpeakeasyBase));
export { GetNetworkWirelessClientLatencyHistoryResponse };
