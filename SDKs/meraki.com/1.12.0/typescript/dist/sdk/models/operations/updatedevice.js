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
var UpdateDevicePathParams = /** @class */ (function (_super) {
    __extends(UpdateDevicePathParams, _super);
    function UpdateDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], UpdateDevicePathParams.prototype, "serial", void 0);
    return UpdateDevicePathParams;
}(SpeakeasyBase));
export { UpdateDevicePathParams };
var UpdateDeviceRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceRequestBody, _super);
    function UpdateDeviceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], UpdateDeviceRequestBody.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=floorPlanId" }),
        __metadata("design:type", String)
    ], UpdateDeviceRequestBody.prototype, "floorPlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], UpdateDeviceRequestBody.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], UpdateDeviceRequestBody.prototype, "lng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=moveMapMarker" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceRequestBody.prototype, "moveMapMarker", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateDeviceRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], UpdateDeviceRequestBody.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=switchProfileId" }),
        __metadata("design:type", String)
    ], UpdateDeviceRequestBody.prototype, "switchProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], UpdateDeviceRequestBody.prototype, "tags", void 0);
    return UpdateDeviceRequestBody;
}(SpeakeasyBase));
export { UpdateDeviceRequestBody };
var UpdateDeviceRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceRequest, _super);
    function UpdateDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDevicePathParams)
    ], UpdateDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceRequestBody)
    ], UpdateDeviceRequest.prototype, "request", void 0);
    return UpdateDeviceRequest;
}(SpeakeasyBase));
export { UpdateDeviceRequest };
var UpdateDeviceResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceResponse, _super);
    function UpdateDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeviceResponse.prototype, "updateDevice200ApplicationJsonObject", void 0);
    return UpdateDeviceResponse;
}(SpeakeasyBase));
export { UpdateDeviceResponse };
