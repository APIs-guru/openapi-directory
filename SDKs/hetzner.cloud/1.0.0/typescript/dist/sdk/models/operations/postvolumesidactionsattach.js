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
var PostVolumesIdActionsAttachPathParams = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsAttachPathParams, _super);
    function PostVolumesIdActionsAttachPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsAttachPathParams.prototype, "id", void 0);
    return PostVolumesIdActionsAttachPathParams;
}(SpeakeasyBase));
export { PostVolumesIdActionsAttachPathParams };
var PostVolumesIdActionsAttachAttachVolumeRequest = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsAttachAttachVolumeRequest, _super);
    function PostVolumesIdActionsAttachAttachVolumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=automount" }),
        __metadata("design:type", Boolean)
    ], PostVolumesIdActionsAttachAttachVolumeRequest.prototype, "automount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsAttachAttachVolumeRequest.prototype, "server", void 0);
    return PostVolumesIdActionsAttachAttachVolumeRequest;
}(SpeakeasyBase));
export { PostVolumesIdActionsAttachAttachVolumeRequest };
// PostVolumesIdActionsAttachActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostVolumesIdActionsAttachActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsAttachActionResponseActionError, _super);
    function PostVolumesIdActionsAttachActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsAttachActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsAttachActionResponseActionError.prototype, "message", void 0);
    return PostVolumesIdActionsAttachActionResponseActionError;
}(SpeakeasyBase));
export { PostVolumesIdActionsAttachActionResponseActionError };
var PostVolumesIdActionsAttachActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsAttachActionResponseActionResources, _super);
    function PostVolumesIdActionsAttachActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsAttachActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsAttachActionResponseActionResources.prototype, "type", void 0);
    return PostVolumesIdActionsAttachActionResponseActionResources;
}(SpeakeasyBase));
export { PostVolumesIdActionsAttachActionResponseActionResources };
export var PostVolumesIdActionsAttachActionResponseActionStatusEnum;
(function (PostVolumesIdActionsAttachActionResponseActionStatusEnum) {
    PostVolumesIdActionsAttachActionResponseActionStatusEnum["Success"] = "success";
    PostVolumesIdActionsAttachActionResponseActionStatusEnum["Running"] = "running";
    PostVolumesIdActionsAttachActionResponseActionStatusEnum["Error"] = "error";
})(PostVolumesIdActionsAttachActionResponseActionStatusEnum || (PostVolumesIdActionsAttachActionResponseActionStatusEnum = {}));
var PostVolumesIdActionsAttachActionResponseAction = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsAttachActionResponseAction, _super);
    function PostVolumesIdActionsAttachActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsAttachActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostVolumesIdActionsAttachActionResponseActionError)
    ], PostVolumesIdActionsAttachActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsAttachActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsAttachActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsAttachActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostVolumesIdActionsAttachActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostVolumesIdActionsAttachActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsAttachActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsAttachActionResponseAction.prototype, "status", void 0);
    return PostVolumesIdActionsAttachActionResponseAction;
}(SpeakeasyBase));
export { PostVolumesIdActionsAttachActionResponseAction };
var PostVolumesIdActionsAttachActionResponse = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsAttachActionResponse, _super);
    function PostVolumesIdActionsAttachActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostVolumesIdActionsAttachActionResponseAction)
    ], PostVolumesIdActionsAttachActionResponse.prototype, "action", void 0);
    return PostVolumesIdActionsAttachActionResponse;
}(SpeakeasyBase));
export { PostVolumesIdActionsAttachActionResponse };
var PostVolumesIdActionsAttachRequest = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsAttachRequest, _super);
    function PostVolumesIdActionsAttachRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVolumesIdActionsAttachPathParams)
    ], PostVolumesIdActionsAttachRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostVolumesIdActionsAttachAttachVolumeRequest)
    ], PostVolumesIdActionsAttachRequest.prototype, "request", void 0);
    return PostVolumesIdActionsAttachRequest;
}(SpeakeasyBase));
export { PostVolumesIdActionsAttachRequest };
var PostVolumesIdActionsAttachResponse = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsAttachResponse, _super);
    function PostVolumesIdActionsAttachResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVolumesIdActionsAttachActionResponse)
    ], PostVolumesIdActionsAttachResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostVolumesIdActionsAttachResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsAttachResponse.prototype, "statusCode", void 0);
    return PostVolumesIdActionsAttachResponse;
}(SpeakeasyBase));
export { PostVolumesIdActionsAttachResponse };
