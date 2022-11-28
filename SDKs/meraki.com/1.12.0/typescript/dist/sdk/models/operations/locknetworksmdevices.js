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
var LockNetworkSmDevicesPathParams = /** @class */ (function (_super) {
    __extends(LockNetworkSmDevicesPathParams, _super);
    function LockNetworkSmDevicesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], LockNetworkSmDevicesPathParams.prototype, "networkId", void 0);
    return LockNetworkSmDevicesPathParams;
}(SpeakeasyBase));
export { LockNetworkSmDevicesPathParams };
var LockNetworkSmDevicesRequestBody = /** @class */ (function (_super) {
    __extends(LockNetworkSmDevicesRequestBody, _super);
    function LockNetworkSmDevicesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], LockNetworkSmDevicesRequestBody.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pin" }),
        __metadata("design:type", Number)
    ], LockNetworkSmDevicesRequestBody.prototype, "pin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", Array)
    ], LockNetworkSmDevicesRequestBody.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serials" }),
        __metadata("design:type", Array)
    ], LockNetworkSmDevicesRequestBody.prototype, "serials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifiMacs" }),
        __metadata("design:type", Array)
    ], LockNetworkSmDevicesRequestBody.prototype, "wifiMacs", void 0);
    return LockNetworkSmDevicesRequestBody;
}(SpeakeasyBase));
export { LockNetworkSmDevicesRequestBody };
var LockNetworkSmDevicesRequest = /** @class */ (function (_super) {
    __extends(LockNetworkSmDevicesRequest, _super);
    function LockNetworkSmDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LockNetworkSmDevicesPathParams)
    ], LockNetworkSmDevicesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", LockNetworkSmDevicesRequestBody)
    ], LockNetworkSmDevicesRequest.prototype, "request", void 0);
    return LockNetworkSmDevicesRequest;
}(SpeakeasyBase));
export { LockNetworkSmDevicesRequest };
var LockNetworkSmDevicesResponse = /** @class */ (function (_super) {
    __extends(LockNetworkSmDevicesResponse, _super);
    function LockNetworkSmDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LockNetworkSmDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LockNetworkSmDevicesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], LockNetworkSmDevicesResponse.prototype, "lockNetworkSmDevices200ApplicationJsonObject", void 0);
    return LockNetworkSmDevicesResponse;
}(SpeakeasyBase));
export { LockNetworkSmDevicesResponse };
