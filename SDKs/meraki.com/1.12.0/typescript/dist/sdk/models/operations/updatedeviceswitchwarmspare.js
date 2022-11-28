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
var UpdateDeviceSwitchWarmSparePathParams = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchWarmSparePathParams, _super);
    function UpdateDeviceSwitchWarmSparePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchWarmSparePathParams.prototype, "serial", void 0);
    return UpdateDeviceSwitchWarmSparePathParams;
}(SpeakeasyBase));
export { UpdateDeviceSwitchWarmSparePathParams };
var UpdateDeviceSwitchWarmSpareRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchWarmSpareRequestBody, _super);
    function UpdateDeviceSwitchWarmSpareRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceSwitchWarmSpareRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=spareSerial" }),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchWarmSpareRequestBody.prototype, "spareSerial", void 0);
    return UpdateDeviceSwitchWarmSpareRequestBody;
}(SpeakeasyBase));
export { UpdateDeviceSwitchWarmSpareRequestBody };
var UpdateDeviceSwitchWarmSpareRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchWarmSpareRequest, _super);
    function UpdateDeviceSwitchWarmSpareRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeviceSwitchWarmSparePathParams)
    ], UpdateDeviceSwitchWarmSpareRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceSwitchWarmSpareRequestBody)
    ], UpdateDeviceSwitchWarmSpareRequest.prototype, "request", void 0);
    return UpdateDeviceSwitchWarmSpareRequest;
}(SpeakeasyBase));
export { UpdateDeviceSwitchWarmSpareRequest };
var UpdateDeviceSwitchWarmSpareResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceSwitchWarmSpareResponse, _super);
    function UpdateDeviceSwitchWarmSpareResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceSwitchWarmSpareResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeviceSwitchWarmSpareResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeviceSwitchWarmSpareResponse.prototype, "updateDeviceSwitchWarmSpare200ApplicationJsonObject", void 0);
    return UpdateDeviceSwitchWarmSpareResponse;
}(SpeakeasyBase));
export { UpdateDeviceSwitchWarmSpareResponse };
