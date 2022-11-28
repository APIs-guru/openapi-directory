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
var GetNetworkSmDeviceDesktopLogsPathParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceDesktopLogsPathParams, _super);
    function GetNetworkSmDeviceDesktopLogsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceDesktopLogsPathParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceDesktopLogsPathParams.prototype, "networkId", void 0);
    return GetNetworkSmDeviceDesktopLogsPathParams;
}(SpeakeasyBase));
export { GetNetworkSmDeviceDesktopLogsPathParams };
var GetNetworkSmDeviceDesktopLogsQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceDesktopLogsQueryParams, _super);
    function GetNetworkSmDeviceDesktopLogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endingBefore" }),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceDesktopLogsQueryParams.prototype, "endingBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=perPage" }),
        __metadata("design:type", Number)
    ], GetNetworkSmDeviceDesktopLogsQueryParams.prototype, "perPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startingAfter" }),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceDesktopLogsQueryParams.prototype, "startingAfter", void 0);
    return GetNetworkSmDeviceDesktopLogsQueryParams;
}(SpeakeasyBase));
export { GetNetworkSmDeviceDesktopLogsQueryParams };
var GetNetworkSmDeviceDesktopLogsRequest = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceDesktopLogsRequest, _super);
    function GetNetworkSmDeviceDesktopLogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSmDeviceDesktopLogsPathParams)
    ], GetNetworkSmDeviceDesktopLogsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNetworkSmDeviceDesktopLogsQueryParams)
    ], GetNetworkSmDeviceDesktopLogsRequest.prototype, "queryParams", void 0);
    return GetNetworkSmDeviceDesktopLogsRequest;
}(SpeakeasyBase));
export { GetNetworkSmDeviceDesktopLogsRequest };
var GetNetworkSmDeviceDesktopLogsResponse = /** @class */ (function (_super) {
    __extends(GetNetworkSmDeviceDesktopLogsResponse, _super);
    function GetNetworkSmDeviceDesktopLogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNetworkSmDeviceDesktopLogsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkSmDeviceDesktopLogsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNetworkSmDeviceDesktopLogsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetNetworkSmDeviceDesktopLogsResponse.prototype, "getNetworkSmDeviceDesktopLogs200ApplicationJsonObject", void 0);
    return GetNetworkSmDeviceDesktopLogsResponse;
}(SpeakeasyBase));
export { GetNetworkSmDeviceDesktopLogsResponse };
