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
var GetNetworkWirelessAirMarshalPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessAirMarshalPathParams, _super);
    function GetNetworkWirelessAirMarshalPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessAirMarshalPathParams.prototype, "networkId", void 0);
    return GetNetworkWirelessAirMarshalPathParams;
}(SpeakeasyBase));
export { GetNetworkWirelessAirMarshalPathParams };
var GetNetworkWirelessAirMarshalQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessAirMarshalQueryParams, _super);
    function GetNetworkWirelessAirMarshalQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t0" }),
        __metadata("design:type", String)
    ], GetNetworkWirelessAirMarshalQueryParams.prototype, "t0", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" }),
        __metadata("design:type", Number)
    ], GetNetworkWirelessAirMarshalQueryParams.prototype, "timespan", void 0);
    return GetNetworkWirelessAirMarshalQueryParams;
}(SpeakeasyBase));
export { GetNetworkWirelessAirMarshalQueryParams };
var GetNetworkWirelessAirMarshalRequest = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessAirMarshalRequest, _super);
    function GetNetworkWirelessAirMarshalRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessAirMarshalPathParams)
    ], GetNetworkWirelessAirMarshalRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkWirelessAirMarshalQueryParams)
    ], GetNetworkWirelessAirMarshalRequest.prototype, "queryParams", void 0);
    return GetNetworkWirelessAirMarshalRequest;
}(SpeakeasyBase));
export { GetNetworkWirelessAirMarshalRequest };
var GetNetworkWirelessAirMarshalResponse = /** @class */ (function (_super) {
    __extends(GetNetworkWirelessAirMarshalResponse, _super);
    function GetNetworkWirelessAirMarshalResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkWirelessAirMarshalResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkWirelessAirMarshalResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkWirelessAirMarshalResponse.prototype, "getNetworkWirelessAirMarshal200ApplicationJsonObject", void 0);
    return GetNetworkWirelessAirMarshalResponse;
}(SpeakeasyBase));
export { GetNetworkWirelessAirMarshalResponse };
