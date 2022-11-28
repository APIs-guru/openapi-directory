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
var BlinkDeviceLedsPathParams = /** @class */ (function (_super) {
    __extends(BlinkDeviceLedsPathParams, _super);
    function BlinkDeviceLedsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], BlinkDeviceLedsPathParams.prototype, "serial", void 0);
    return BlinkDeviceLedsPathParams;
}(SpeakeasyBase));
export { BlinkDeviceLedsPathParams };
var BlinkDeviceLedsRequestBody = /** @class */ (function (_super) {
    __extends(BlinkDeviceLedsRequestBody, _super);
    function BlinkDeviceLedsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duration" }),
        __metadata("design:type", Number)
    ], BlinkDeviceLedsRequestBody.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duty" }),
        __metadata("design:type", Number)
    ], BlinkDeviceLedsRequestBody.prototype, "duty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=period" }),
        __metadata("design:type", Number)
    ], BlinkDeviceLedsRequestBody.prototype, "period", void 0);
    return BlinkDeviceLedsRequestBody;
}(SpeakeasyBase));
export { BlinkDeviceLedsRequestBody };
var BlinkDeviceLedsRequest = /** @class */ (function (_super) {
    __extends(BlinkDeviceLedsRequest, _super);
    function BlinkDeviceLedsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BlinkDeviceLedsPathParams)
    ], BlinkDeviceLedsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BlinkDeviceLedsRequestBody)
    ], BlinkDeviceLedsRequest.prototype, "request", void 0);
    return BlinkDeviceLedsRequest;
}(SpeakeasyBase));
export { BlinkDeviceLedsRequest };
var BlinkDeviceLedsResponse = /** @class */ (function (_super) {
    __extends(BlinkDeviceLedsResponse, _super);
    function BlinkDeviceLedsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BlinkDeviceLedsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BlinkDeviceLedsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], BlinkDeviceLedsResponse.prototype, "blinkDeviceLeds202ApplicationJsonObject", void 0);
    return BlinkDeviceLedsResponse;
}(SpeakeasyBase));
export { BlinkDeviceLedsResponse };
