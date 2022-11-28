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
var UpdateDeviceCameraWirelessProfilesPathParams = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraWirelessProfilesPathParams, _super);
    function UpdateDeviceCameraWirelessProfilesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], UpdateDeviceCameraWirelessProfilesPathParams.prototype, "serial", void 0);
    return UpdateDeviceCameraWirelessProfilesPathParams;
}(SpeakeasyBase));
export { UpdateDeviceCameraWirelessProfilesPathParams };
// UpdateDeviceCameraWirelessProfilesRequestBodyIds
/**
 * The ids of the wireless profile to assign to the given camera
**/
var UpdateDeviceCameraWirelessProfilesRequestBodyIds = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraWirelessProfilesRequestBodyIds, _super);
    function UpdateDeviceCameraWirelessProfilesRequestBodyIds() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backup" }),
        __metadata("design:type", String)
    ], UpdateDeviceCameraWirelessProfilesRequestBodyIds.prototype, "backup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primary" }),
        __metadata("design:type", String)
    ], UpdateDeviceCameraWirelessProfilesRequestBodyIds.prototype, "primary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondary" }),
        __metadata("design:type", String)
    ], UpdateDeviceCameraWirelessProfilesRequestBodyIds.prototype, "secondary", void 0);
    return UpdateDeviceCameraWirelessProfilesRequestBodyIds;
}(SpeakeasyBase));
export { UpdateDeviceCameraWirelessProfilesRequestBodyIds };
var UpdateDeviceCameraWirelessProfilesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraWirelessProfilesRequestBody, _super);
    function UpdateDeviceCameraWirelessProfilesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", UpdateDeviceCameraWirelessProfilesRequestBodyIds)
    ], UpdateDeviceCameraWirelessProfilesRequestBody.prototype, "ids", void 0);
    return UpdateDeviceCameraWirelessProfilesRequestBody;
}(SpeakeasyBase));
export { UpdateDeviceCameraWirelessProfilesRequestBody };
var UpdateDeviceCameraWirelessProfilesRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraWirelessProfilesRequest, _super);
    function UpdateDeviceCameraWirelessProfilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeviceCameraWirelessProfilesPathParams)
    ], UpdateDeviceCameraWirelessProfilesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceCameraWirelessProfilesRequestBody)
    ], UpdateDeviceCameraWirelessProfilesRequest.prototype, "request", void 0);
    return UpdateDeviceCameraWirelessProfilesRequest;
}(SpeakeasyBase));
export { UpdateDeviceCameraWirelessProfilesRequest };
var UpdateDeviceCameraWirelessProfilesResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraWirelessProfilesResponse, _super);
    function UpdateDeviceCameraWirelessProfilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceCameraWirelessProfilesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeviceCameraWirelessProfilesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeviceCameraWirelessProfilesResponse.prototype, "updateDeviceCameraWirelessProfiles200ApplicationJsonObject", void 0);
    return UpdateDeviceCameraWirelessProfilesResponse;
}(SpeakeasyBase));
export { UpdateDeviceCameraWirelessProfilesResponse };
