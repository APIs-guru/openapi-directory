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
var GetNetworkWirelessClientLatencyStatsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientLatencyStatsPathParams, _super);
    function GetNetworkWirelessClientLatencyStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientLatencyStatsPathParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientLatencyStatsPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessClientLatencyStatsPathParams;
}(SpeakeasyBase));
export { GetNetworkWirelessClientLatencyStatsPathParams };
export var GetNetworkWirelessClientLatencyStatsBandEnum;
(function (GetNetworkWirelessClientLatencyStatsBandEnum) {
    GetNetworkWirelessClientLatencyStatsBandEnum["Two4"] = "2.4";
    GetNetworkWirelessClientLatencyStatsBandEnum["Five"] = "5";
})(GetNetworkWirelessClientLatencyStatsBandEnum || (GetNetworkWirelessClientLatencyStatsBandEnum = {}));
var GetNetworkWirelessClientLatencyStatsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientLatencyStatsQueryParams, _super);
    function GetNetworkWirelessClientLatencyStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientLatencyStatsQueryParams.prototype, "apTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientLatencyStatsQueryParams.prototype, "band", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientLatencyStatsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssid" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientLatencyStatsQueryParams.prototype, "ssid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientLatencyStatsQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientLatencyStatsQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientLatencyStatsQueryParams.prototype, "timespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vlan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientLatencyStatsQueryParams.prototype, "vlan", void 0);
    return GetNetworkWirelessClientLatencyStatsQueryParams;
}(SpeakeasyBase));
export { GetNetworkWirelessClientLatencyStatsQueryParams };
var GetNetworkWirelessClientLatencyStatsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientLatencyStatsRequest, _super);
    function GetNetworkWirelessClientLatencyStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessClientLatencyStatsPathParams)
    ], GetNetworkWirelessClientLatencyStatsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessClientLatencyStatsQueryParams)
    ], GetNetworkWirelessClientLatencyStatsRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessClientLatencyStatsRequest;
}(SpeakeasyBase));
export { GetNetworkWirelessClientLatencyStatsRequest };
var GetNetworkWirelessClientLatencyStatsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientLatencyStatsResponse, _super);
    function GetNetworkWirelessClientLatencyStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientLatencyStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientLatencyStatsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessClientLatencyStatsResponse.prototype, "getNetworkWirelessClientLatencyStats200ApplicationJsonObject", void 0);
    return GetNetworkWirelessClientLatencyStatsResponse;
}(SpeakeasyBase));
export { GetNetworkWirelessClientLatencyStatsResponse };
