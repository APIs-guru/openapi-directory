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
var UpdateDeviceCameraSensePathParams = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraSensePathParams, _super);
    function UpdateDeviceCameraSensePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], UpdateDeviceCameraSensePathParams.prototype, "serial", void 0);
    return UpdateDeviceCameraSensePathParams;
}(SpeakeasyBase));
export { UpdateDeviceCameraSensePathParams };
// UpdateDeviceCameraSenseRequestBodyAudioDetection
/**
 * The details of the audio detection config.
**/
var UpdateDeviceCameraSenseRequestBodyAudioDetection = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraSenseRequestBodyAudioDetection, _super);
    function UpdateDeviceCameraSenseRequestBodyAudioDetection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceCameraSenseRequestBodyAudioDetection.prototype, "enabled", void 0);
    return UpdateDeviceCameraSenseRequestBodyAudioDetection;
}(SpeakeasyBase));
export { UpdateDeviceCameraSenseRequestBodyAudioDetection };
var UpdateDeviceCameraSenseRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraSenseRequestBody, _super);
    function UpdateDeviceCameraSenseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioDetection" }),
        __metadata("design:type", UpdateDeviceCameraSenseRequestBodyAudioDetection)
    ], UpdateDeviceCameraSenseRequestBody.prototype, "audioDetection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=detectionModelId" }),
        __metadata("design:type", String)
    ], UpdateDeviceCameraSenseRequestBody.prototype, "detectionModelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mqttBrokerId" }),
        __metadata("design:type", String)
    ], UpdateDeviceCameraSenseRequestBody.prototype, "mqttBrokerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=senseEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceCameraSenseRequestBody.prototype, "senseEnabled", void 0);
    return UpdateDeviceCameraSenseRequestBody;
}(SpeakeasyBase));
export { UpdateDeviceCameraSenseRequestBody };
var UpdateDeviceCameraSenseRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraSenseRequest, _super);
    function UpdateDeviceCameraSenseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeviceCameraSensePathParams)
    ], UpdateDeviceCameraSenseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceCameraSenseRequestBody)
    ], UpdateDeviceCameraSenseRequest.prototype, "request", void 0);
    return UpdateDeviceCameraSenseRequest;
}(SpeakeasyBase));
export { UpdateDeviceCameraSenseRequest };
var UpdateDeviceCameraSenseResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraSenseResponse, _super);
    function UpdateDeviceCameraSenseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceCameraSenseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeviceCameraSenseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeviceCameraSenseResponse.prototype, "updateDeviceCameraSense200ApplicationJsonObject", void 0);
    return UpdateDeviceCameraSenseResponse;
}(SpeakeasyBase));
export { UpdateDeviceCameraSenseResponse };
