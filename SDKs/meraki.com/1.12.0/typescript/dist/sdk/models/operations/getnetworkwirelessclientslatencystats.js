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
var GetNetworkWirelessClientsLatencyStatsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientsLatencyStatsPathParams, _super);
    function GetNetworkWirelessClientsLatencyStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientsLatencyStatsPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessClientsLatencyStatsPathParams;
}(SpeakeasyBase));
export { GetNetworkWirelessClientsLatencyStatsPathParams };
export var GetNetworkWirelessClientsLatencyStatsBandEnum;
(function (GetNetworkWirelessClientsLatencyStatsBandEnum) {
    GetNetworkWirelessClientsLatencyStatsBandEnum["Two4"] = "2.4";
    GetNetworkWirelessClientsLatencyStatsBandEnum["Five"] = "5";
})(GetNetworkWirelessClientsLatencyStatsBandEnum || (GetNetworkWirelessClientsLatencyStatsBandEnum = {}));
var GetNetworkWirelessClientsLatencyStatsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientsLatencyStatsQueryParams, _super);
    function GetNetworkWirelessClientsLatencyStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientsLatencyStatsQueryParams.prototype, "apTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientsLatencyStatsQueryParams.prototype, "band", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientsLatencyStatsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssid" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientsLatencyStatsQueryParams.prototype, "ssid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientsLatencyStatsQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientsLatencyStatsQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientsLatencyStatsQueryParams.prototype, "timespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vlan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientsLatencyStatsQueryParams.prototype, "vlan", void 0);
    return GetNetworkWirelessClientsLatencyStatsQueryParams;
}(SpeakeasyBase));
export { GetNetworkWirelessClientsLatencyStatsQueryParams };
var GetNetworkWirelessClientsLatencyStatsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientsLatencyStatsRequest, _super);
    function GetNetworkWirelessClientsLatencyStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessClientsLatencyStatsPathParams)
    ], GetNetworkWirelessClientsLatencyStatsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessClientsLatencyStatsQueryParams)
    ], GetNetworkWirelessClientsLatencyStatsRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessClientsLatencyStatsRequest;
}(SpeakeasyBase));
export { GetNetworkWirelessClientsLatencyStatsRequest };
var GetNetworkWirelessClientsLatencyStatsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientsLatencyStatsResponse, _super);
    function GetNetworkWirelessClientsLatencyStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientsLatencyStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientsLatencyStatsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessClientsLatencyStatsResponse.prototype, "getNetworkWirelessClientsLatencyStats200ApplicationJsonObject", void 0);
    return GetNetworkWirelessClientsLatencyStatsResponse;
}(SpeakeasyBase));
export { GetNetworkWirelessClientsLatencyStatsResponse };
