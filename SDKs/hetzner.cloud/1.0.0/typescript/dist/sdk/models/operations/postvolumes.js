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
var PostVolumesCreateVolumeRequest = /** @class */ (function (_super) {
    __extends(PostVolumesCreateVolumeRequest, _super);
    function PostVolumesCreateVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automount" }),
        __metadata("design:type", Boolean)
    ], PostVolumesCreateVolumeRequest.prototype, "automount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PostVolumesCreateVolumeRequest.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PostVolumesCreateVolumeRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], PostVolumesCreateVolumeRequest.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostVolumesCreateVolumeRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", Number)
    ], PostVolumesCreateVolumeRequest.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], PostVolumesCreateVolumeRequest.prototype, "size", void 0);
    return PostVolumesCreateVolumeRequest;
}(SpeakeasyBase));
export { PostVolumesCreateVolumeRequest };
// PostVolumes201ApplicationJsonActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostVolumes201ApplicationJsonActionError = /** @class */ (function (_super) {
    __extends(PostVolumes201ApplicationJsonActionError, _super);
    function PostVolumes201ApplicationJsonActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonActionError.prototype, "message", void 0);
    return PostVolumes201ApplicationJsonActionError;
}(SpeakeasyBase));
export { PostVolumes201ApplicationJsonActionError };
var PostVolumes201ApplicationJsonActionResources = /** @class */ (function (_super) {
    __extends(PostVolumes201ApplicationJsonActionResources, _super);
    function PostVolumes201ApplicationJsonActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostVolumes201ApplicationJsonActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonActionResources.prototype, "type", void 0);
    return PostVolumes201ApplicationJsonActionResources;
}(SpeakeasyBase));
export { PostVolumes201ApplicationJsonActionResources };
export var PostVolumes201ApplicationJsonActionStatusEnum;
(function (PostVolumes201ApplicationJsonActionStatusEnum) {
    PostVolumes201ApplicationJsonActionStatusEnum["Success"] = "success";
    PostVolumes201ApplicationJsonActionStatusEnum["Running"] = "running";
    PostVolumes201ApplicationJsonActionStatusEnum["Error"] = "error";
})(PostVolumes201ApplicationJsonActionStatusEnum || (PostVolumes201ApplicationJsonActionStatusEnum = {}));
var PostVolumes201ApplicationJsonAction = /** @class */ (function (_super) {
    __extends(PostVolumes201ApplicationJsonAction, _super);
    function PostVolumes201ApplicationJsonAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostVolumes201ApplicationJsonActionError)
    ], PostVolumes201ApplicationJsonAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostVolumes201ApplicationJsonAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostVolumes201ApplicationJsonAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostVolumes201ApplicationJsonActionResources }),
        __metadata("design:type", Array)
    ], PostVolumes201ApplicationJsonAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonAction.prototype, "status", void 0);
    return PostVolumes201ApplicationJsonAction;
}(SpeakeasyBase));
export { PostVolumes201ApplicationJsonAction };
// PostVolumes201ApplicationJsonVolumeLocation
/**
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
var PostVolumes201ApplicationJsonVolumeLocation = /** @class */ (function (_super) {
    __extends(PostVolumes201ApplicationJsonVolumeLocation, _super);
    function PostVolumes201ApplicationJsonVolumeLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonVolumeLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonVolumeLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonVolumeLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostVolumes201ApplicationJsonVolumeLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], PostVolumes201ApplicationJsonVolumeLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], PostVolumes201ApplicationJsonVolumeLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonVolumeLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonVolumeLocation.prototype, "networkZone", void 0);
    return PostVolumes201ApplicationJsonVolumeLocation;
}(SpeakeasyBase));
export { PostVolumes201ApplicationJsonVolumeLocation };
// PostVolumes201ApplicationJsonVolumeProtection
/**
 * Protection configuration for the Resource
**/
var PostVolumes201ApplicationJsonVolumeProtection = /** @class */ (function (_super) {
    __extends(PostVolumes201ApplicationJsonVolumeProtection, _super);
    function PostVolumes201ApplicationJsonVolumeProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PostVolumes201ApplicationJsonVolumeProtection.prototype, "delete", void 0);
    return PostVolumes201ApplicationJsonVolumeProtection;
}(SpeakeasyBase));
export { PostVolumes201ApplicationJsonVolumeProtection };
export var PostVolumes201ApplicationJsonVolumeStatusEnum;
(function (PostVolumes201ApplicationJsonVolumeStatusEnum) {
    PostVolumes201ApplicationJsonVolumeStatusEnum["Creating"] = "creating";
    PostVolumes201ApplicationJsonVolumeStatusEnum["Available"] = "available";
})(PostVolumes201ApplicationJsonVolumeStatusEnum || (PostVolumes201ApplicationJsonVolumeStatusEnum = {}));
var PostVolumes201ApplicationJsonVolume = /** @class */ (function (_super) {
    __extends(PostVolumes201ApplicationJsonVolume, _super);
    function PostVolumes201ApplicationJsonVolume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonVolume.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonVolume.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostVolumes201ApplicationJsonVolume.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PostVolumes201ApplicationJsonVolume.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linux_device" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonVolume.prototype, "linuxDevice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", PostVolumes201ApplicationJsonVolumeLocation)
    ], PostVolumes201ApplicationJsonVolume.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonVolume.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", PostVolumes201ApplicationJsonVolumeProtection)
    ], PostVolumes201ApplicationJsonVolume.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", Number)
    ], PostVolumes201ApplicationJsonVolume.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], PostVolumes201ApplicationJsonVolume.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostVolumes201ApplicationJsonVolume.prototype, "status", void 0);
    return PostVolumes201ApplicationJsonVolume;
}(SpeakeasyBase));
export { PostVolumes201ApplicationJsonVolume };
var PostVolumes201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostVolumes201ApplicationJson, _super);
    function PostVolumes201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostVolumes201ApplicationJsonAction)
    ], PostVolumes201ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_actions", elemType: PostVolumes201ApplicationJsonAction }),
        __metadata("design:type", Array)
    ], PostVolumes201ApplicationJson.prototype, "nextActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volume" }),
        __metadata("design:type", PostVolumes201ApplicationJsonVolume)
    ], PostVolumes201ApplicationJson.prototype, "volume", void 0);
    return PostVolumes201ApplicationJson;
}(SpeakeasyBase));
export { PostVolumes201ApplicationJson };
var PostVolumesRequest = /** @class */ (function (_super) {
    __extends(PostVolumesRequest, _super);
    function PostVolumesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostVolumesCreateVolumeRequest)
    ], PostVolumesRequest.prototype, "request", void 0);
    return PostVolumesRequest;
}(SpeakeasyBase));
export { PostVolumesRequest };
var PostVolumesResponse = /** @class */ (function (_super) {
    __extends(PostVolumesResponse, _super);
    function PostVolumesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostVolumesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVolumes201ApplicationJson)
    ], PostVolumesResponse.prototype, "postVolumes201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostVolumesResponse.prototype, "statusCode", void 0);
    return PostVolumesResponse;
}(SpeakeasyBase));
export { PostVolumesResponse };
