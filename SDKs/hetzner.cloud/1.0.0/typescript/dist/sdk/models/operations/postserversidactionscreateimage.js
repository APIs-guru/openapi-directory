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
var PostServersIdActionsCreateImagePathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsCreateImagePathParams, _super);
    function PostServersIdActionsCreateImagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsCreateImagePathParams.prototype, "id", void 0);
    return PostServersIdActionsCreateImagePathParams;
}(SpeakeasyBase));
export { PostServersIdActionsCreateImagePathParams };
// PostServersIdActionsCreateImageCreateImageRequestLabels
/**
 * User-defined labels (key-value pairs)
**/
var PostServersIdActionsCreateImageCreateImageRequestLabels = /** @class */ (function (_super) {
    __extends(PostServersIdActionsCreateImageCreateImageRequestLabels, _super);
    function PostServersIdActionsCreateImageCreateImageRequestLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelkey" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImageCreateImageRequestLabels.prototype, "labelkey", void 0);
    return PostServersIdActionsCreateImageCreateImageRequestLabels;
}(SpeakeasyBase));
export { PostServersIdActionsCreateImageCreateImageRequestLabels };
export var PostServersIdActionsCreateImageCreateImageRequestTypeEnum;
(function (PostServersIdActionsCreateImageCreateImageRequestTypeEnum) {
    PostServersIdActionsCreateImageCreateImageRequestTypeEnum["Snapshot"] = "snapshot";
    PostServersIdActionsCreateImageCreateImageRequestTypeEnum["Backup"] = "backup";
})(PostServersIdActionsCreateImageCreateImageRequestTypeEnum || (PostServersIdActionsCreateImageCreateImageRequestTypeEnum = {}));
var PostServersIdActionsCreateImageCreateImageRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsCreateImageCreateImageRequest, _super);
    function PostServersIdActionsCreateImageCreateImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImageCreateImageRequest.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", PostServersIdActionsCreateImageCreateImageRequestLabels)
    ], PostServersIdActionsCreateImageCreateImageRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImageCreateImageRequest.prototype, "type", void 0);
    return PostServersIdActionsCreateImageCreateImageRequest;
}(SpeakeasyBase));
export { PostServersIdActionsCreateImageCreateImageRequest };
// PostServersIdActionsCreateImage201ApplicationJsonActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsCreateImage201ApplicationJsonActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsCreateImage201ApplicationJsonActionError, _super);
    function PostServersIdActionsCreateImage201ApplicationJsonActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonActionError.prototype, "message", void 0);
    return PostServersIdActionsCreateImage201ApplicationJsonActionError;
}(SpeakeasyBase));
export { PostServersIdActionsCreateImage201ApplicationJsonActionError };
var PostServersIdActionsCreateImage201ApplicationJsonActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsCreateImage201ApplicationJsonActionResources, _super);
    function PostServersIdActionsCreateImage201ApplicationJsonActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsCreateImage201ApplicationJsonActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonActionResources.prototype, "type", void 0);
    return PostServersIdActionsCreateImage201ApplicationJsonActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsCreateImage201ApplicationJsonActionResources };
export var PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum;
(function (PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum) {
    PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum["Success"] = "success";
    PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum["Running"] = "running";
    PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum["Error"] = "error";
})(PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum || (PostServersIdActionsCreateImage201ApplicationJsonActionStatusEnum = {}));
var PostServersIdActionsCreateImage201ApplicationJsonAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsCreateImage201ApplicationJsonAction, _super);
    function PostServersIdActionsCreateImage201ApplicationJsonAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsCreateImage201ApplicationJsonActionError)
    ], PostServersIdActionsCreateImage201ApplicationJsonAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsCreateImage201ApplicationJsonAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsCreateImage201ApplicationJsonAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsCreateImage201ApplicationJsonActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsCreateImage201ApplicationJsonAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonAction.prototype, "status", void 0);
    return PostServersIdActionsCreateImage201ApplicationJsonAction;
}(SpeakeasyBase));
export { PostServersIdActionsCreateImage201ApplicationJsonAction };
// PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom
/**
 * Information about the Server the Image was created from
**/
var PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom = /** @class */ (function (_super) {
    __extends(PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom, _super);
    function PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom.prototype, "name", void 0);
    return PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom;
}(SpeakeasyBase));
export { PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom };
export var PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum;
(function (PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum) {
    PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum["Ubuntu"] = "ubuntu";
    PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum["Centos"] = "centos";
    PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum["Debian"] = "debian";
    PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum["Fedora"] = "fedora";
    PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum["Unknown"] = "unknown";
})(PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum || (PostServersIdActionsCreateImage201ApplicationJsonImageOsFlavorEnum = {}));
// PostServersIdActionsCreateImage201ApplicationJsonImageProtection
/**
 * Protection configuration for the Resource
**/
var PostServersIdActionsCreateImage201ApplicationJsonImageProtection = /** @class */ (function (_super) {
    __extends(PostServersIdActionsCreateImage201ApplicationJsonImageProtection, _super);
    function PostServersIdActionsCreateImage201ApplicationJsonImageProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PostServersIdActionsCreateImage201ApplicationJsonImageProtection.prototype, "delete", void 0);
    return PostServersIdActionsCreateImage201ApplicationJsonImageProtection;
}(SpeakeasyBase));
export { PostServersIdActionsCreateImage201ApplicationJsonImageProtection };
export var PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum;
(function (PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum) {
    PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum["Available"] = "available";
    PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum["Creating"] = "creating";
    PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum["Unavailable"] = "unavailable";
})(PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum || (PostServersIdActionsCreateImage201ApplicationJsonImageStatusEnum = {}));
export var PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum;
(function (PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum) {
    PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum["System"] = "system";
    PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum["App"] = "app";
    PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum["Snapshot"] = "snapshot";
    PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum["Backup"] = "backup";
    PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum["Temporary"] = "temporary";
})(PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum || (PostServersIdActionsCreateImage201ApplicationJsonImageTypeEnum = {}));
var PostServersIdActionsCreateImage201ApplicationJsonImage = /** @class */ (function (_super) {
    __extends(PostServersIdActionsCreateImage201ApplicationJsonImage, _super);
    function PostServersIdActionsCreateImage201ApplicationJsonImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bound_to" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "boundTo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=build_id" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "buildId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_from" }),
        __metadata("design:type", PostServersIdActionsCreateImage201ApplicationJsonImageCreatedFrom)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "createdFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deleted" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "deleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disk_size" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "diskSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_size" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "imageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_flavor" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "osFlavor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os_version" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "osVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", PostServersIdActionsCreateImage201ApplicationJsonImageProtection)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rapid_deploy" }),
        __metadata("design:type", Boolean)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "rapidDeploy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImage201ApplicationJsonImage.prototype, "type", void 0);
    return PostServersIdActionsCreateImage201ApplicationJsonImage;
}(SpeakeasyBase));
export { PostServersIdActionsCreateImage201ApplicationJsonImage };
var PostServersIdActionsCreateImage201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostServersIdActionsCreateImage201ApplicationJson, _super);
    function PostServersIdActionsCreateImage201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsCreateImage201ApplicationJsonAction)
    ], PostServersIdActionsCreateImage201ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", PostServersIdActionsCreateImage201ApplicationJsonImage)
    ], PostServersIdActionsCreateImage201ApplicationJson.prototype, "image", void 0);
    return PostServersIdActionsCreateImage201ApplicationJson;
}(SpeakeasyBase));
export { PostServersIdActionsCreateImage201ApplicationJson };
var PostServersIdActionsCreateImageRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsCreateImageRequest, _super);
    function PostServersIdActionsCreateImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsCreateImagePathParams)
    ], PostServersIdActionsCreateImageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostServersIdActionsCreateImageCreateImageRequest)
    ], PostServersIdActionsCreateImageRequest.prototype, "request", void 0);
    return PostServersIdActionsCreateImageRequest;
}(SpeakeasyBase));
export { PostServersIdActionsCreateImageRequest };
var PostServersIdActionsCreateImageResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsCreateImageResponse, _super);
    function PostServersIdActionsCreateImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsCreateImageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsCreateImage201ApplicationJson)
    ], PostServersIdActionsCreateImageResponse.prototype, "postServersIdActionsCreateImage201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsCreateImageResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsCreateImageResponse;
}(SpeakeasyBase));
export { PostServersIdActionsCreateImageResponse };
