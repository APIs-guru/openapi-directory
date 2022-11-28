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
var PutVolumesIdPathParams = /** @class */ (function (_super) {
    __extends(PutVolumesIdPathParams, _super);
    function PutVolumesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutVolumesIdPathParams.prototype, "id", void 0);
    return PutVolumesIdPathParams;
}(SpeakeasyBase));
export { PutVolumesIdPathParams };
// PutVolumesIdUpdateVolumeRequestLabels
/**
 * User-defined labels (key-value pairs)
**/
var PutVolumesIdUpdateVolumeRequestLabels = /** @class */ (function (_super) {
    __extends(PutVolumesIdUpdateVolumeRequestLabels, _super);
    function PutVolumesIdUpdateVolumeRequestLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelkey" }),
        __metadata("design:type", String)
    ], PutVolumesIdUpdateVolumeRequestLabels.prototype, "labelkey", void 0);
    return PutVolumesIdUpdateVolumeRequestLabels;
}(SpeakeasyBase));
export { PutVolumesIdUpdateVolumeRequestLabels };
var PutVolumesIdUpdateVolumeRequest = /** @class */ (function (_super) {
    __extends(PutVolumesIdUpdateVolumeRequest, _super);
    function PutVolumesIdUpdateVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", PutVolumesIdUpdateVolumeRequestLabels)
    ], PutVolumesIdUpdateVolumeRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutVolumesIdUpdateVolumeRequest.prototype, "name", void 0);
    return PutVolumesIdUpdateVolumeRequest;
}(SpeakeasyBase));
export { PutVolumesIdUpdateVolumeRequest };
// PutVolumesId200ApplicationJsonVolumeLocation
/**
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
var PutVolumesId200ApplicationJsonVolumeLocation = /** @class */ (function (_super) {
    __extends(PutVolumesId200ApplicationJsonVolumeLocation, _super);
    function PutVolumesId200ApplicationJsonVolumeLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], PutVolumesId200ApplicationJsonVolumeLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PutVolumesId200ApplicationJsonVolumeLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutVolumesId200ApplicationJsonVolumeLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutVolumesId200ApplicationJsonVolumeLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], PutVolumesId200ApplicationJsonVolumeLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], PutVolumesId200ApplicationJsonVolumeLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutVolumesId200ApplicationJsonVolumeLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], PutVolumesId200ApplicationJsonVolumeLocation.prototype, "networkZone", void 0);
    return PutVolumesId200ApplicationJsonVolumeLocation;
}(SpeakeasyBase));
export { PutVolumesId200ApplicationJsonVolumeLocation };
// PutVolumesId200ApplicationJsonVolumeProtection
/**
 * Protection configuration for the Resource
**/
var PutVolumesId200ApplicationJsonVolumeProtection = /** @class */ (function (_super) {
    __extends(PutVolumesId200ApplicationJsonVolumeProtection, _super);
    function PutVolumesId200ApplicationJsonVolumeProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PutVolumesId200ApplicationJsonVolumeProtection.prototype, "delete", void 0);
    return PutVolumesId200ApplicationJsonVolumeProtection;
}(SpeakeasyBase));
export { PutVolumesId200ApplicationJsonVolumeProtection };
export var PutVolumesId200ApplicationJsonVolumeStatusEnum;
(function (PutVolumesId200ApplicationJsonVolumeStatusEnum) {
    PutVolumesId200ApplicationJsonVolumeStatusEnum["Creating"] = "creating";
    PutVolumesId200ApplicationJsonVolumeStatusEnum["Available"] = "available";
})(PutVolumesId200ApplicationJsonVolumeStatusEnum || (PutVolumesId200ApplicationJsonVolumeStatusEnum = {}));
var PutVolumesId200ApplicationJsonVolume = /** @class */ (function (_super) {
    __extends(PutVolumesId200ApplicationJsonVolume, _super);
    function PutVolumesId200ApplicationJsonVolume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PutVolumesId200ApplicationJsonVolume.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PutVolumesId200ApplicationJsonVolume.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutVolumesId200ApplicationJsonVolume.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutVolumesId200ApplicationJsonVolume.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linux_device" }),
        __metadata("design:type", String)
    ], PutVolumesId200ApplicationJsonVolume.prototype, "linuxDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", PutVolumesId200ApplicationJsonVolumeLocation)
    ], PutVolumesId200ApplicationJsonVolume.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutVolumesId200ApplicationJsonVolume.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", PutVolumesId200ApplicationJsonVolumeProtection)
    ], PutVolumesId200ApplicationJsonVolume.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", Number)
    ], PutVolumesId200ApplicationJsonVolume.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], PutVolumesId200ApplicationJsonVolume.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PutVolumesId200ApplicationJsonVolume.prototype, "status", void 0);
    return PutVolumesId200ApplicationJsonVolume;
}(SpeakeasyBase));
export { PutVolumesId200ApplicationJsonVolume };
var PutVolumesId200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutVolumesId200ApplicationJson, _super);
    function PutVolumesId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volume" }),
        __metadata("design:type", PutVolumesId200ApplicationJsonVolume)
    ], PutVolumesId200ApplicationJson.prototype, "volume", void 0);
    return PutVolumesId200ApplicationJson;
}(SpeakeasyBase));
export { PutVolumesId200ApplicationJson };
var PutVolumesIdRequest = /** @class */ (function (_super) {
    __extends(PutVolumesIdRequest, _super);
    function PutVolumesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutVolumesIdPathParams)
    ], PutVolumesIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutVolumesIdUpdateVolumeRequest)
    ], PutVolumesIdRequest.prototype, "request", void 0);
    return PutVolumesIdRequest;
}(SpeakeasyBase));
export { PutVolumesIdRequest };
var PutVolumesIdResponse = /** @class */ (function (_super) {
    __extends(PutVolumesIdResponse, _super);
    function PutVolumesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutVolumesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutVolumesId200ApplicationJson)
    ], PutVolumesIdResponse.prototype, "putVolumesId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutVolumesIdResponse.prototype, "statusCode", void 0);
    return PutVolumesIdResponse;
}(SpeakeasyBase));
export { PutVolumesIdResponse };
