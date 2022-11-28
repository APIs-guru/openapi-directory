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
var GetNetworkWirelessConnectionStatsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessConnectionStatsPathParams, _super);
    function GetNetworkWirelessConnectionStatsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessConnectionStatsPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessConnectionStatsPathParams;
}(SpeakeasyBase));
export { GetNetworkWirelessConnectionStatsPathParams };
export var GetNetworkWirelessConnectionStatsBandEnum;
(function (GetNetworkWirelessConnectionStatsBandEnum) {
    GetNetworkWirelessConnectionStatsBandEnum["Two4"] = "2.4";
    GetNetworkWirelessConnectionStatsBandEnum["Five"] = "5";
})(GetNetworkWirelessConnectionStatsBandEnum || (GetNetworkWirelessConnectionStatsBandEnum = {}));
var GetNetworkWirelessConnectionStatsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessConnectionStatsQueryParams, _super);
    function GetNetworkWirelessConnectionStatsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessConnectionStatsQueryParams.prototype, "apTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessConnectionStatsQueryParams.prototype, "band", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssid" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessConnectionStatsQueryParams.prototype, "ssid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessConnectionStatsQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessConnectionStatsQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessConnectionStatsQueryParams.prototype, "timespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vlan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessConnectionStatsQueryParams.prototype, "vlan", void 0);
    return GetNetworkWirelessConnectionStatsQueryParams;
}(SpeakeasyBase));
export { GetNetworkWirelessConnectionStatsQueryParams };
var GetNetworkWirelessConnectionStatsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessConnectionStatsRequest, _super);
    function GetNetworkWirelessConnectionStatsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessConnectionStatsPathParams)
    ], GetNetworkWirelessConnectionStatsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessConnectionStatsQueryParams)
    ], GetNetworkWirelessConnectionStatsRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessConnectionStatsRequest;
}(SpeakeasyBase));
export { GetNetworkWirelessConnectionStatsRequest };
var GetNetworkWirelessConnectionStatsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessConnectionStatsResponse, _super);
    function GetNetworkWirelessConnectionStatsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkWirelessConnectionStatsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessConnectionStatsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessConnectionStatsResponse.prototype, "getNetworkWirelessConnectionStats200ApplicationJsonObject", void 0);
    return GetNetworkWirelessConnectionStatsResponse;
}(SpeakeasyBase));
export { GetNetworkWirelessConnectionStatsResponse };
