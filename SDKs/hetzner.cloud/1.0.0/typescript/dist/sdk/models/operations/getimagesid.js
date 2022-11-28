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
var GetImagesIdPathParams = /** @class */ (function (_super) {
    __extends(GetImagesIdPathParams, _super);
    function GetImagesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetImagesIdPathParams.prototype, "id", void 0);
    return GetImagesIdPathParams;
}(SpeakeasyBase));
export { GetImagesIdPathParams };
// GetImagesId200ApplicationJsonImageCreatedFrom
/**
 * Information about the Server the Image was created from
**/
var GetImagesId200ApplicationJsonImageCreatedFrom = /** @class */ (function (_super) {
    __extends(GetImagesId200ApplicationJsonImageCreatedFrom, _super);
    function GetImagesId200ApplicationJsonImageCreatedFrom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetImagesId200ApplicationJsonImageCreatedFrom.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetImagesId200ApplicationJsonImageCreatedFrom.prototype, "name", void 0);
    return GetImagesId200ApplicationJsonImageCreatedFrom;
}(SpeakeasyBase));
export { GetImagesId200ApplicationJsonImageCreatedFrom };
export var GetImagesId200ApplicationJsonImageOsFlavorEnum;
(function (GetImagesId200ApplicationJsonImageOsFlavorEnum) {
    GetImagesId200ApplicationJsonImageOsFlavorEnum["Ubuntu"] = "ubuntu";
    GetImagesId200ApplicationJsonImageOsFlavorEnum["Centos"] = "centos";
    GetImagesId200ApplicationJsonImageOsFlavorEnum["Debian"] = "debian";
    GetImagesId200ApplicationJsonImageOsFlavorEnum["Fedora"] = "fedora";
    GetImagesId200ApplicationJsonImageOsFlavorEnum["Unknown"] = "unknown";
})(GetImagesId200ApplicationJsonImageOsFlavorEnum || (GetImagesId200ApplicationJsonImageOsFlavorEnum = {}));
// GetImagesId200ApplicationJsonImageProtection
/**
 * Protection configuration for the Resource
**/
var GetImagesId200ApplicationJsonImageProtection = /** @class */ (function (_super) {
    __extends(GetImagesId200ApplicationJsonImageProtection, _super);
    function GetImagesId200ApplicationJsonImageProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], GetImagesId200ApplicationJsonImageProtection.prototype, "delete", void 0);
    return GetImagesId200ApplicationJsonImageProtection;
}(SpeakeasyBase));
export { GetImagesId200ApplicationJsonImageProtection };
export var GetImagesId200ApplicationJsonImageStatusEnum;
(function (GetImagesId200ApplicationJsonImageStatusEnum) {
    GetImagesId200ApplicationJsonImageStatusEnum["Available"] = "available";
    GetImagesId200ApplicationJsonImageStatusEnum["Creating"] = "creating";
    GetImagesId200ApplicationJsonImageStatusEnum["Unavailable"] = "unavailable";
})(GetImagesId200ApplicationJsonImageStatusEnum || (GetImagesId200ApplicationJsonImageStatusEnum = {}));
export var GetImagesId200ApplicationJsonImageTypeEnum;
(function (GetImagesId200ApplicationJsonImageTypeEnum) {
    GetImagesId200ApplicationJsonImageTypeEnum["System"] = "system";
    GetImagesId200ApplicationJsonImageTypeEnum["App"] = "app";
    GetImagesId200ApplicationJsonImageTypeEnum["Snapshot"] = "snapshot";
    GetImagesId200ApplicationJsonImageTypeEnum["Backup"] = "backup";
    GetImagesId200ApplicationJsonImageTypeEnum["Temporary"] = "temporary";
})(GetImagesId200ApplicationJsonImageTypeEnum || (GetImagesId200ApplicationJsonImageTypeEnum = {}));
var GetImagesId200ApplicationJsonImage = /** @class */ (function (_super) {
    __extends(GetImagesId200ApplicationJsonImage, _super);
    function GetImagesId200ApplicationJsonImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bound_to" }),
        __metadata("design:type", Number)
    ], GetImagesId200ApplicationJsonImage.prototype, "boundTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build_id" }),
        __metadata("design:type", String)
    ], GetImagesId200ApplicationJsonImage.prototype, "buildId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetImagesId200ApplicationJsonImage.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_from" }),
        __metadata("design:type", GetImagesId200ApplicationJsonImageCreatedFrom)
    ], GetImagesId200ApplicationJsonImage.prototype, "createdFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", String)
    ], GetImagesId200ApplicationJsonImage.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], GetImagesId200ApplicationJsonImage.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetImagesId200ApplicationJsonImage.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk_size" }),
        __metadata("design:type", Number)
    ], GetImagesId200ApplicationJsonImage.prototype, "diskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetImagesId200ApplicationJsonImage.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_size" }),
        __metadata("design:type", Number)
    ], GetImagesId200ApplicationJsonImage.prototype, "imageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetImagesId200ApplicationJsonImage.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetImagesId200ApplicationJsonImage.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_flavor" }),
        __metadata("design:type", String)
    ], GetImagesId200ApplicationJsonImage.prototype, "osFlavor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_version" }),
        __metadata("design:type", String)
    ], GetImagesId200ApplicationJsonImage.prototype, "osVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", GetImagesId200ApplicationJsonImageProtection)
    ], GetImagesId200ApplicationJsonImage.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rapid_deploy" }),
        __metadata("design:type", Boolean)
    ], GetImagesId200ApplicationJsonImage.prototype, "rapidDeploy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetImagesId200ApplicationJsonImage.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetImagesId200ApplicationJsonImage.prototype, "type", void 0);
    return GetImagesId200ApplicationJsonImage;
}(SpeakeasyBase));
export { GetImagesId200ApplicationJsonImage };
var GetImagesId200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetImagesId200ApplicationJson, _super);
    function GetImagesId200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", GetImagesId200ApplicationJsonImage)
    ], GetImagesId200ApplicationJson.prototype, "image", void 0);
    return GetImagesId200ApplicationJson;
}(SpeakeasyBase));
export { GetImagesId200ApplicationJson };
var GetImagesIdRequest = /** @class */ (function (_super) {
    __extends(GetImagesIdRequest, _super);
    function GetImagesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagesIdPathParams)
    ], GetImagesIdRequest.prototype, "pathParams", void 0);
    return GetImagesIdRequest;
}(SpeakeasyBase));
export { GetImagesIdRequest };
var GetImagesIdResponse = /** @class */ (function (_super) {
    __extends(GetImagesIdResponse, _super);
    function GetImagesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetImagesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagesId200ApplicationJson)
    ], GetImagesIdResponse.prototype, "getImagesId200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetImagesIdResponse.prototype, "statusCode", void 0);
    return GetImagesIdResponse;
}(SpeakeasyBase));
export { GetImagesIdResponse };
