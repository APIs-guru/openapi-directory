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
var GetNetworkWirelessClientsConnectionStatsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientsConnectionStatsPathParams, _super);
    function GetNetworkWirelessClientsConnectionStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientsConnectionStatsPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessClientsConnectionStatsPathParams;
}(SpeakeasyBase));
export { GetNetworkWirelessClientsConnectionStatsPathParams };
export var GetNetworkWirelessClientsConnectionStatsBandEnum;
(function (GetNetworkWirelessClientsConnectionStatsBandEnum) {
    GetNetworkWirelessClientsConnectionStatsBandEnum["Two4"] = "2.4";
    GetNetworkWirelessClientsConnectionStatsBandEnum["Five"] = "5";
})(GetNetworkWirelessClientsConnectionStatsBandEnum || (GetNetworkWirelessClientsConnectionStatsBandEnum = {}));
var GetNetworkWirelessClientsConnectionStatsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientsConnectionStatsQueryParams, _super);
    function GetNetworkWirelessClientsConnectionStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientsConnectionStatsQueryParams.prototype, "apTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientsConnectionStatsQueryParams.prototype, "band", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssid" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientsConnectionStatsQueryParams.prototype, "ssid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientsConnectionStatsQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientsConnectionStatsQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientsConnectionStatsQueryParams.prototype, "timespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vlan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientsConnectionStatsQueryParams.prototype, "vlan", void 0);
    return GetNetworkWirelessClientsConnectionStatsQueryParams;
}(SpeakeasyBase));
export { GetNetworkWirelessClientsConnectionStatsQueryParams };
var GetNetworkWirelessClientsConnectionStatsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientsConnectionStatsRequest, _super);
    function GetNetworkWirelessClientsConnectionStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessClientsConnectionStatsPathParams)
    ], GetNetworkWirelessClientsConnectionStatsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessClientsConnectionStatsQueryParams)
    ], GetNetworkWirelessClientsConnectionStatsRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessClientsConnectionStatsRequest;
}(SpeakeasyBase));
export { GetNetworkWirelessClientsConnectionStatsRequest };
var GetNetworkWirelessClientsConnectionStatsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessClientsConnectionStatsResponse, _super);
    function GetNetworkWirelessClientsConnectionStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkWirelessClientsConnectionStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessClientsConnectionStatsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessClientsConnectionStatsResponse.prototype, "getNetworkWirelessClientsConnectionStats200ApplicationJsonObject", void 0);
    return GetNetworkWirelessClientsConnectionStatsResponse;
}(SpeakeasyBase));
export { GetNetworkWirelessClientsConnectionStatsResponse };
