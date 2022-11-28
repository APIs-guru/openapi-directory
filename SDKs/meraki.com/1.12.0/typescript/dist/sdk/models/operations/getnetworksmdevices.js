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
var GetNetworkSmDevicesPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmDevicesPathParams, _super);
    function GetNetworkSmDevicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkSmDevicesPathParams.prototype, "networkId", void 0);
    return GetNetworkSmDevicesPathParams;
}(SpeakeasyBase));
export { GetNetworkSmDevicesPathParams };
var GetNetworkSmDevicesQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmDevicesQueryParams, _super);
    function GetNetworkSmDevicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetNetworkSmDevicesQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" }),
        __metadata("design:type", Array)
    ], GetNetworkSmDevicesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ids" }),
        __metadata("design:type", Array)
    ], GetNetworkSmDevicesQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetNetworkSmDevicesQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=scope" }),
        __metadata("design:type", Array)
    ], GetNetworkSmDevicesQueryParams.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=serials" }),
        __metadata("design:type", Array)
    ], GetNetworkSmDevicesQueryParams.prototype, "serials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetNetworkSmDevicesQueryParams.prototype, "startingAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=wifiMacs" }),
        __metadata("design:type", Array)
    ], GetNetworkSmDevicesQueryParams.prototype, "wifiMacs", void 0);
    return GetNetworkSmDevicesQueryParams;
}(SpeakeasyBase));
export { GetNetworkSmDevicesQueryParams };
var GetNetworkSmDevicesRequest = /** @class */ (function (_super) {
    __extends(GetNetworkSmDevicesRequest, _super);
    function GetNetworkSmDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSmDevicesPathParams)
    ], GetNetworkSmDevicesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSmDevicesQueryParams)
    ], GetNetworkSmDevicesRequest.prototype, "queryParams", void 0);
    return GetNetworkSmDevicesRequest;
}(SpeakeasyBase));
export { GetNetworkSmDevicesRequest };
var GetNetworkSmDevicesResponse = /** @class */ (function (_super) {
    __extends(GetNetworkSmDevicesResponse, _super);
    function GetNetworkSmDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkSmDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkSmDevicesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkSmDevicesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkSmDevicesResponse.prototype, "getNetworkSmDevices200ApplicationJsonObject", void 0);
    return GetNetworkSmDevicesResponse;
}(SpeakeasyBase));
export { GetNetworkSmDevicesResponse };
