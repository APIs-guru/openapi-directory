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
var GetNetworkWirelessDataRateHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessDataRateHistoryPathParams, _super);
    function GetNetworkWirelessDataRateHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessDataRateHistoryPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessDataRateHistoryPathParams;
}(SpeakeasyBase));
export { GetNetworkWirelessDataRateHistoryPathParams };
export var GetNetworkWirelessDataRateHistoryBandEnum;
(function (GetNetworkWirelessDataRateHistoryBandEnum) {
    GetNetworkWirelessDataRateHistoryBandEnum["Two4"] = "2.4";
    GetNetworkWirelessDataRateHistoryBandEnum["Five"] = "5";
})(GetNetworkWirelessDataRateHistoryBandEnum || (GetNetworkWirelessDataRateHistoryBandEnum = {}));
var GetNetworkWirelessDataRateHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessDataRateHistoryQueryParams, _super);
    function GetNetworkWirelessDataRateHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessDataRateHistoryQueryParams.prototype, "apTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoResolution" }),
        __metadata("design:type", Boolean)
    ], GetNetworkWirelessDataRateHistoryQueryParams.prototype, "autoResolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessDataRateHistoryQueryParams.prototype, "band", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessDataRateHistoryQueryParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceSerial" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessDataRateHistoryQueryParams.prototype, "deviceSerial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessDataRateHistoryQueryParams.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssid" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessDataRateHistoryQueryParams.prototype, "ssid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessDataRateHistoryQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessDataRateHistoryQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessDataRateHistoryQueryParams.prototype, "timespan", void 0);
    return GetNetworkWirelessDataRateHistoryQueryParams;
}(SpeakeasyBase));
export { GetNetworkWirelessDataRateHistoryQueryParams };
var GetNetworkWirelessDataRateHistoryRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessDataRateHistoryRequest, _super);
    function GetNetworkWirelessDataRateHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessDataRateHistoryPathParams)
    ], GetNetworkWirelessDataRateHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessDataRateHistoryQueryParams)
    ], GetNetworkWirelessDataRateHistoryRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessDataRateHistoryRequest;
}(SpeakeasyBase));
export { GetNetworkWirelessDataRateHistoryRequest };
var GetNetworkWirelessDataRateHistoryResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessDataRateHistoryResponse, _super);
    function GetNetworkWirelessDataRateHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkWirelessDataRateHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessDataRateHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessDataRateHistoryResponse.prototype, "getNetworkWirelessDataRateHistory200ApplicationJsonObject", void 0);
    return GetNetworkWirelessDataRateHistoryResponse;
}(SpeakeasyBase));
export { GetNetworkWirelessDataRateHistoryResponse };
