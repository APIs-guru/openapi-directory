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
var GetNetworkWirelessDevicesLatencyStatsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessDevicesLatencyStatsPathParams, _super);
    function GetNetworkWirelessDevicesLatencyStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessDevicesLatencyStatsPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessDevicesLatencyStatsPathParams;
}(SpeakeasyBase));
export { GetNetworkWirelessDevicesLatencyStatsPathParams };
export var GetNetworkWirelessDevicesLatencyStatsBandEnum;
(function (GetNetworkWirelessDevicesLatencyStatsBandEnum) {
    GetNetworkWirelessDevicesLatencyStatsBandEnum["Two4"] = "2.4";
    GetNetworkWirelessDevicesLatencyStatsBandEnum["Five"] = "5";
})(GetNetworkWirelessDevicesLatencyStatsBandEnum || (GetNetworkWirelessDevicesLatencyStatsBandEnum = {}));
var GetNetworkWirelessDevicesLatencyStatsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessDevicesLatencyStatsQueryParams, _super);
    function GetNetworkWirelessDevicesLatencyStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessDevicesLatencyStatsQueryParams.prototype, "apTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessDevicesLatencyStatsQueryParams.prototype, "band", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessDevicesLatencyStatsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssid" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessDevicesLatencyStatsQueryParams.prototype, "ssid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessDevicesLatencyStatsQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessDevicesLatencyStatsQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessDevicesLatencyStatsQueryParams.prototype, "timespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vlan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessDevicesLatencyStatsQueryParams.prototype, "vlan", void 0);
    return GetNetworkWirelessDevicesLatencyStatsQueryParams;
}(SpeakeasyBase));
export { GetNetworkWirelessDevicesLatencyStatsQueryParams };
var GetNetworkWirelessDevicesLatencyStatsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessDevicesLatencyStatsRequest, _super);
    function GetNetworkWirelessDevicesLatencyStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessDevicesLatencyStatsPathParams)
    ], GetNetworkWirelessDevicesLatencyStatsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessDevicesLatencyStatsQueryParams)
    ], GetNetworkWirelessDevicesLatencyStatsRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessDevicesLatencyStatsRequest;
}(SpeakeasyBase));
export { GetNetworkWirelessDevicesLatencyStatsRequest };
var GetNetworkWirelessDevicesLatencyStatsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessDevicesLatencyStatsResponse, _super);
    function GetNetworkWirelessDevicesLatencyStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkWirelessDevicesLatencyStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessDevicesLatencyStatsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessDevicesLatencyStatsResponse.prototype, "getNetworkWirelessDevicesLatencyStats200ApplicationJsonObject", void 0);
    return GetNetworkWirelessDevicesLatencyStatsResponse;
}(SpeakeasyBase));
export { GetNetworkWirelessDevicesLatencyStatsResponse };
