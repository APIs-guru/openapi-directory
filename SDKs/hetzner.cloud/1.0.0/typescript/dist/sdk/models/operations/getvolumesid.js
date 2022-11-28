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
var GetVolumesIdPathParams = /** @class */ (function (_super) {
    __extends(GetVolumesIdPathParams, _super);
    function GetVolumesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetVolumesIdPathParams.prototype, "id", void 0);
    return GetVolumesIdPathParams;
}(SpeakeasyBase));
export { GetVolumesIdPathParams };
// GetVolumesId200ApplicationJsonVolumeLocation
/**
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
var GetVolumesId200ApplicationJsonVolumeLocation = /** @class */ (function (_super) {
    __extends(GetVolumesId200ApplicationJsonVolumeLocation, _super);
    function GetVolumesId200ApplicationJsonVolumeLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], GetVolumesId200ApplicationJsonVolumeLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], GetVolumesId200ApplicationJsonVolumeLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetVolumesId200ApplicationJsonVolumeLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetVolumesId200ApplicationJsonVolumeLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], GetVolumesId200ApplicationJsonVolumeLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], GetVolumesId200ApplicationJsonVolumeLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetVolumesId200ApplicationJsonVolumeLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], GetVolumesId200ApplicationJsonVolumeLocation.prototype, "networkZone", void 0);
    return GetVolumesId200ApplicationJsonVolumeLocation;
}(SpeakeasyBase));
export { GetVolumesId200ApplicationJsonVolumeLocation };
// GetVolumesId200ApplicationJsonVolumeProtection
/**
 * Protection configuration for the Resource
**/
var GetVolumesId200ApplicationJsonVolumeProtection = /** @class */ (function (_super) {
    __extends(GetVolumesId200ApplicationJsonVolumeProtection, _super);
    function GetVolumesId200ApplicationJsonVolumeProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], GetVolumesId200ApplicationJsonVolumeProtection.prototype, "delete", void 0);
    return GetVolumesId200ApplicationJsonVolumeProtection;
}(SpeakeasyBase));
export { GetVolumesId200ApplicationJsonVolumeProtection };
export var GetVolumesId200ApplicationJsonVolumeStatusEnum;
(function (GetVolumesId200ApplicationJsonVolumeStatusEnum) {
    GetVolumesId200ApplicationJsonVolumeStatusEnum["Creating"] = "creating";
    GetVolumesId200ApplicationJsonVolumeStatusEnum["Available"] = "available";
})(GetVolumesId200ApplicationJsonVolumeStatusEnum || (GetVolumesId200ApplicationJsonVolumeStatusEnum = {}));
var GetVolumesId200ApplicationJsonVolume = /** @class */ (function (_super) {
    __extends(GetVolumesId200ApplicationJsonVolume, _super);
    function GetVolumesId200ApplicationJsonVolume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetVolumesId200ApplicationJsonVolume.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], GetVolumesId200ApplicationJsonVolume.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetVolumesId200ApplicationJsonVolume.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetVolumesId200ApplicationJsonVolume.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linux_device" }),
        __metadata("design:type", String)
    ], GetVolumesId200ApplicationJsonVolume.prototype, "linuxDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", GetVolumesId200ApplicationJsonVolumeLocation)
    ], GetVolumesId200ApplicationJsonVolume.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetVolumesId200ApplicationJsonVolume.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", GetVolumesId200ApplicationJsonVolumeProtection)
    ], GetVolumesId200ApplicationJsonVolume.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", Number)
    ], GetVolumesId200ApplicationJsonVolume.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], GetVolumesId200ApplicationJsonVolume.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetVolumesId200ApplicationJsonVolume.prototype, "status", void 0);
    return GetVolumesId200ApplicationJsonVolume;
}(SpeakeasyBase));
export { GetVolumesId200ApplicationJsonVolume };
var GetVolumesId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetVolumesId200ApplicationJson, _super);
    function GetVolumesId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volume" }),
        __metadata("design:type", GetVolumesId200ApplicationJsonVolume)
    ], GetVolumesId200ApplicationJson.prototype, "volume", void 0);
    return GetVolumesId200ApplicationJson;
}(SpeakeasyBase));
export { GetVolumesId200ApplicationJson };
var GetVolumesIdRequest = /** @class */ (function (_super) {
    __extends(GetVolumesIdRequest, _super);
    function GetVolumesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumesIdPathParams)
    ], GetVolumesIdRequest.prototype, "pathParams", void 0);
    return GetVolumesIdRequest;
}(SpeakeasyBase));
export { GetVolumesIdRequest };
var GetVolumesIdResponse = /** @class */ (function (_super) {
    __extends(GetVolumesIdResponse, _super);
    function GetVolumesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVolumesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumesId200ApplicationJson)
    ], GetVolumesIdResponse.prototype, "getVolumesId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVolumesIdResponse.prototype, "statusCode", void 0);
    return GetVolumesIdResponse;
}(SpeakeasyBase));
export { GetVolumesIdResponse };
