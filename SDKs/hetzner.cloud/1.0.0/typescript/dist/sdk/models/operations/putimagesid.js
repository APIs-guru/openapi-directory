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
var PutImagesIdPathParams = /** @class */ (function (_super) {
    __extends(PutImagesIdPathParams, _super);
    function PutImagesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutImagesIdPathParams.prototype, "id", void 0);
    return PutImagesIdPathParams;
}(SpeakeasyBase));
export { PutImagesIdPathParams };
export var PutImagesIdUpdateImageRequestTypeEnum;
(function (PutImagesIdUpdateImageRequestTypeEnum) {
    PutImagesIdUpdateImageRequestTypeEnum["Snapshot"] = "snapshot";
})(PutImagesIdUpdateImageRequestTypeEnum || (PutImagesIdUpdateImageRequestTypeEnum = {}));
var PutImagesIdUpdateImageRequest = /** @class */ (function (_super) {
    __extends(PutImagesIdUpdateImageRequest, _super);
    function PutImagesIdUpdateImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutImagesIdUpdateImageRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutImagesIdUpdateImageRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutImagesIdUpdateImageRequest.prototype, "type", void 0);
    return PutImagesIdUpdateImageRequest;
}(SpeakeasyBase));
export { PutImagesIdUpdateImageRequest };
// PutImagesId200ApplicationJsonImageCreatedFrom
/**
 * Information about the Server the Image was created from
**/
var PutImagesId200ApplicationJsonImageCreatedFrom = /** @class */ (function (_super) {
    __extends(PutImagesId200ApplicationJsonImageCreatedFrom, _super);
    function PutImagesId200ApplicationJsonImageCreatedFrom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutImagesId200ApplicationJsonImageCreatedFrom.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutImagesId200ApplicationJsonImageCreatedFrom.prototype, "name", void 0);
    return PutImagesId200ApplicationJsonImageCreatedFrom;
}(SpeakeasyBase));
export { PutImagesId200ApplicationJsonImageCreatedFrom };
export var PutImagesId200ApplicationJsonImageOsFlavorEnum;
(function (PutImagesId200ApplicationJsonImageOsFlavorEnum) {
    PutImagesId200ApplicationJsonImageOsFlavorEnum["Ubuntu"] = "ubuntu";
    PutImagesId200ApplicationJsonImageOsFlavorEnum["Centos"] = "centos";
    PutImagesId200ApplicationJsonImageOsFlavorEnum["Debian"] = "debian";
    PutImagesId200ApplicationJsonImageOsFlavorEnum["Fedora"] = "fedora";
    PutImagesId200ApplicationJsonImageOsFlavorEnum["Unknown"] = "unknown";
})(PutImagesId200ApplicationJsonImageOsFlavorEnum || (PutImagesId200ApplicationJsonImageOsFlavorEnum = {}));
// PutImagesId200ApplicationJsonImageProtection
/**
 * Protection configuration for the Resource
**/
var PutImagesId200ApplicationJsonImageProtection = /** @class */ (function (_super) {
    __extends(PutImagesId200ApplicationJsonImageProtection, _super);
    function PutImagesId200ApplicationJsonImageProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PutImagesId200ApplicationJsonImageProtection.prototype, "delete", void 0);
    return PutImagesId200ApplicationJsonImageProtection;
}(SpeakeasyBase));
export { PutImagesId200ApplicationJsonImageProtection };
export var PutImagesId200ApplicationJsonImageStatusEnum;
(function (PutImagesId200ApplicationJsonImageStatusEnum) {
    PutImagesId200ApplicationJsonImageStatusEnum["Available"] = "available";
    PutImagesId200ApplicationJsonImageStatusEnum["Creating"] = "creating";
    PutImagesId200ApplicationJsonImageStatusEnum["Unavailable"] = "unavailable";
})(PutImagesId200ApplicationJsonImageStatusEnum || (PutImagesId200ApplicationJsonImageStatusEnum = {}));
export var PutImagesId200ApplicationJsonImageTypeEnum;
(function (PutImagesId200ApplicationJsonImageTypeEnum) {
    PutImagesId200ApplicationJsonImageTypeEnum["System"] = "system";
    PutImagesId200ApplicationJsonImageTypeEnum["App"] = "app";
    PutImagesId200ApplicationJsonImageTypeEnum["Snapshot"] = "snapshot";
    PutImagesId200ApplicationJsonImageTypeEnum["Backup"] = "backup";
    PutImagesId200ApplicationJsonImageTypeEnum["Temporary"] = "temporary";
})(PutImagesId200ApplicationJsonImageTypeEnum || (PutImagesId200ApplicationJsonImageTypeEnum = {}));
var PutImagesId200ApplicationJsonImage = /** @class */ (function (_super) {
    __extends(PutImagesId200ApplicationJsonImage, _super);
    function PutImagesId200ApplicationJsonImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bound_to" }),
        __metadata("design:type", Number)
    ], PutImagesId200ApplicationJsonImage.prototype, "boundTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build_id" }),
        __metadata("design:type", String)
    ], PutImagesId200ApplicationJsonImage.prototype, "buildId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PutImagesId200ApplicationJsonImage.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_from" }),
        __metadata("design:type", PutImagesId200ApplicationJsonImageCreatedFrom)
    ], PutImagesId200ApplicationJsonImage.prototype, "createdFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", String)
    ], PutImagesId200ApplicationJsonImage.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], PutImagesId200ApplicationJsonImage.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PutImagesId200ApplicationJsonImage.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk_size" }),
        __metadata("design:type", Number)
    ], PutImagesId200ApplicationJsonImage.prototype, "diskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutImagesId200ApplicationJsonImage.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_size" }),
        __metadata("design:type", Number)
    ], PutImagesId200ApplicationJsonImage.prototype, "imageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutImagesId200ApplicationJsonImage.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutImagesId200ApplicationJsonImage.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_flavor" }),
        __metadata("design:type", String)
    ], PutImagesId200ApplicationJsonImage.prototype, "osFlavor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_version" }),
        __metadata("design:type", String)
    ], PutImagesId200ApplicationJsonImage.prototype, "osVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", PutImagesId200ApplicationJsonImageProtection)
    ], PutImagesId200ApplicationJsonImage.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rapid_deploy" }),
        __metadata("design:type", Boolean)
    ], PutImagesId200ApplicationJsonImage.prototype, "rapidDeploy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PutImagesId200ApplicationJsonImage.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutImagesId200ApplicationJsonImage.prototype, "type", void 0);
    return PutImagesId200ApplicationJsonImage;
}(SpeakeasyBase));
export { PutImagesId200ApplicationJsonImage };
var PutImagesId200ApplicationJson = /** @class */ (function (_super) {
    __extends(PutImagesId200ApplicationJson, _super);
    function PutImagesId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", PutImagesId200ApplicationJsonImage)
    ], PutImagesId200ApplicationJson.prototype, "image", void 0);
    return PutImagesId200ApplicationJson;
}(SpeakeasyBase));
export { PutImagesId200ApplicationJson };
var PutImagesIdRequest = /** @class */ (function (_super) {
    __extends(PutImagesIdRequest, _super);
    function PutImagesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutImagesIdPathParams)
    ], PutImagesIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutImagesIdUpdateImageRequest)
    ], PutImagesIdRequest.prototype, "request", void 0);
    return PutImagesIdRequest;
}(SpeakeasyBase));
export { PutImagesIdRequest };
var PutImagesIdResponse = /** @class */ (function (_super) {
    __extends(PutImagesIdResponse, _super);
    function PutImagesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutImagesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutImagesId200ApplicationJson)
    ], PutImagesIdResponse.prototype, "putImagesId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutImagesIdResponse.prototype, "statusCode", void 0);
    return PutImagesIdResponse;
}(SpeakeasyBase));
export { PutImagesIdResponse };
