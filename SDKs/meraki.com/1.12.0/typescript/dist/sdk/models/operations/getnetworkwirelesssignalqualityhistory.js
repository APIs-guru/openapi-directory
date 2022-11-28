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
var GetNetworkWirelessSignalQualityHistoryPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessSignalQualityHistoryPathParams, _super);
    function GetNetworkWirelessSignalQualityHistoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessSignalQualityHistoryPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessSignalQualityHistoryPathParams;
}(SpeakeasyBase));
export { GetNetworkWirelessSignalQualityHistoryPathParams };
export var GetNetworkWirelessSignalQualityHistoryBandEnum;
(function (GetNetworkWirelessSignalQualityHistoryBandEnum) {
    GetNetworkWirelessSignalQualityHistoryBandEnum["Two4"] = "2.4";
    GetNetworkWirelessSignalQualityHistoryBandEnum["Five"] = "5";
})(GetNetworkWirelessSignalQualityHistoryBandEnum || (GetNetworkWirelessSignalQualityHistoryBandEnum = {}));
var GetNetworkWirelessSignalQualityHistoryQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessSignalQualityHistoryQueryParams, _super);
    function GetNetworkWirelessSignalQualityHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessSignalQualityHistoryQueryParams.prototype, "apTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoResolution" }),
        __metadata("design:type", Boolean)
    ], GetNetworkWirelessSignalQualityHistoryQueryParams.prototype, "autoResolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessSignalQualityHistoryQueryParams.prototype, "band", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessSignalQualityHistoryQueryParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceSerial" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessSignalQualityHistoryQueryParams.prototype, "deviceSerial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessSignalQualityHistoryQueryParams.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssid" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessSignalQualityHistoryQueryParams.prototype, "ssid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessSignalQualityHistoryQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessSignalQualityHistoryQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessSignalQualityHistoryQueryParams.prototype, "timespan", void 0);
    return GetNetworkWirelessSignalQualityHistoryQueryParams;
}(SpeakeasyBase));
export { GetNetworkWirelessSignalQualityHistoryQueryParams };
var GetNetworkWirelessSignalQualityHistoryRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessSignalQualityHistoryRequest, _super);
    function GetNetworkWirelessSignalQualityHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessSignalQualityHistoryPathParams)
    ], GetNetworkWirelessSignalQualityHistoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessSignalQualityHistoryQueryParams)
    ], GetNetworkWirelessSignalQualityHistoryRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessSignalQualityHistoryRequest;
}(SpeakeasyBase));
export { GetNetworkWirelessSignalQualityHistoryRequest };
var GetNetworkWirelessSignalQualityHistoryResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessSignalQualityHistoryResponse, _super);
    function GetNetworkWirelessSignalQualityHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkWirelessSignalQualityHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessSignalQualityHistoryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessSignalQualityHistoryResponse.prototype, "getNetworkWirelessSignalQualityHistory200ApplicationJsonObject", void 0);
    return GetNetworkWirelessSignalQualityHistoryResponse;
}(SpeakeasyBase));
export { GetNetworkWirelessSignalQualityHistoryResponse };
