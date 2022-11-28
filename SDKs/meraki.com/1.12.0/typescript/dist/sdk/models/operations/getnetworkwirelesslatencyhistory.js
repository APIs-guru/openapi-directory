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
var GetNetworkWirelessLatencyHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessLatencyHistoryPathParams, _super);
    function GetNetworkWirelessLatencyHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyHistoryPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessLatencyHistoryPathParams;
}(SpeakeasyBase));
export { GetNetworkWirelessLatencyHistoryPathParams };
export var GetNetworkWirelessLatencyHistoryAccessCategoryEnum;
(function (GetNetworkWirelessLatencyHistoryAccessCategoryEnum) {
    GetNetworkWirelessLatencyHistoryAccessCategoryEnum["BackgroundTraffic"] = "backgroundTraffic";
    GetNetworkWirelessLatencyHistoryAccessCategoryEnum["BestEffortTraffic"] = "bestEffortTraffic";
    GetNetworkWirelessLatencyHistoryAccessCategoryEnum["VideoTraffic"] = "videoTraffic";
    GetNetworkWirelessLatencyHistoryAccessCategoryEnum["VoiceTraffic"] = "voiceTraffic";
})(GetNetworkWirelessLatencyHistoryAccessCategoryEnum || (GetNetworkWirelessLatencyHistoryAccessCategoryEnum = {}));
export var GetNetworkWirelessLatencyHistoryBandEnum;
(function (GetNetworkWirelessLatencyHistoryBandEnum) {
    GetNetworkWirelessLatencyHistoryBandEnum["Two4"] = "2.4";
    GetNetworkWirelessLatencyHistoryBandEnum["Five"] = "5";
})(GetNetworkWirelessLatencyHistoryBandEnum || (GetNetworkWirelessLatencyHistoryBandEnum = {}));
var GetNetworkWirelessLatencyHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessLatencyHistoryQueryParams, _super);
    function GetNetworkWirelessLatencyHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accessCategory" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyHistoryQueryParams.prototype, "accessCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyHistoryQueryParams.prototype, "apTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoResolution" }),
        __metadata("design:type", Boolean)
    ], GetNetworkWirelessLatencyHistoryQueryParams.prototype, "autoResolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyHistoryQueryParams.prototype, "band", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyHistoryQueryParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceSerial" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyHistoryQueryParams.prototype, "deviceSerial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessLatencyHistoryQueryParams.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssid" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessLatencyHistoryQueryParams.prototype, "ssid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyHistoryQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyHistoryQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessLatencyHistoryQueryParams.prototype, "timespan", void 0);
    return GetNetworkWirelessLatencyHistoryQueryParams;
}(SpeakeasyBase));
export { GetNetworkWirelessLatencyHistoryQueryParams };
var GetNetworkWirelessLatencyHistoryRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessLatencyHistoryRequest, _super);
    function GetNetworkWirelessLatencyHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessLatencyHistoryPathParams)
    ], GetNetworkWirelessLatencyHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessLatencyHistoryQueryParams)
    ], GetNetworkWirelessLatencyHistoryRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessLatencyHistoryRequest;
}(SpeakeasyBase));
export { GetNetworkWirelessLatencyHistoryRequest };
var GetNetworkWirelessLatencyHistoryResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessLatencyHistoryResponse, _super);
    function GetNetworkWirelessLatencyHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkWirelessLatencyHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessLatencyHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessLatencyHistoryResponse.prototype, "getNetworkWirelessLatencyHistory200ApplicationJsonObject", void 0);
    return GetNetworkWirelessLatencyHistoryResponse;
}(SpeakeasyBase));
export { GetNetworkWirelessLatencyHistoryResponse };
