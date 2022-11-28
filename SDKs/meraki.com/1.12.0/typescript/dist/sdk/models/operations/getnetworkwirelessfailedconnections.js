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
var GetNetworkWirelessFailedConnectionsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessFailedConnectionsPathParams, _super);
    function GetNetworkWirelessFailedConnectionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessFailedConnectionsPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessFailedConnectionsPathParams;
}(SpeakeasyBase));
export { GetNetworkWirelessFailedConnectionsPathParams };
export var GetNetworkWirelessFailedConnectionsBandEnum;
(function (GetNetworkWirelessFailedConnectionsBandEnum) {
    GetNetworkWirelessFailedConnectionsBandEnum["Two4"] = "2.4";
    GetNetworkWirelessFailedConnectionsBandEnum["Five"] = "5";
})(GetNetworkWirelessFailedConnectionsBandEnum || (GetNetworkWirelessFailedConnectionsBandEnum = {}));
var GetNetworkWirelessFailedConnectionsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessFailedConnectionsQueryParams, _super);
    function GetNetworkWirelessFailedConnectionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apTag" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessFailedConnectionsQueryParams.prototype, "apTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=band" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessFailedConnectionsQueryParams.prototype, "band", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessFailedConnectionsQueryParams.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serial" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessFailedConnectionsQueryParams.prototype, "serial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssid" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessFailedConnectionsQueryParams.prototype, "ssid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessFailedConnectionsQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t1" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessFailedConnectionsQueryParams.prototype, "t1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessFailedConnectionsQueryParams.prototype, "timespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vlan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessFailedConnectionsQueryParams.prototype, "vlan", void 0);
    return GetNetworkWirelessFailedConnectionsQueryParams;
}(SpeakeasyBase));
export { GetNetworkWirelessFailedConnectionsQueryParams };
var GetNetworkWirelessFailedConnectionsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessFailedConnectionsRequest, _super);
    function GetNetworkWirelessFailedConnectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessFailedConnectionsPathParams)
    ], GetNetworkWirelessFailedConnectionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessFailedConnectionsQueryParams)
    ], GetNetworkWirelessFailedConnectionsRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessFailedConnectionsRequest;
}(SpeakeasyBase));
export { GetNetworkWirelessFailedConnectionsRequest };
var GetNetworkWirelessFailedConnectionsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessFailedConnectionsResponse, _super);
    function GetNetworkWirelessFailedConnectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkWirelessFailedConnectionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessFailedConnectionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessFailedConnectionsResponse.prototype, "getNetworkWirelessFailedConnections200ApplicationJsonObject", void 0);
    return GetNetworkWirelessFailedConnectionsResponse;
}(SpeakeasyBase));
export { GetNetworkWirelessFailedConnectionsResponse };
