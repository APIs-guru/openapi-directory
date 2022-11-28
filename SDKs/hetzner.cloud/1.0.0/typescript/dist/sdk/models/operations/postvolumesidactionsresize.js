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
var PostVolumesIdActionsResizePathParams = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsResizePathParams, _super);
    function PostVolumesIdActionsResizePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsResizePathParams.prototype, "id", void 0);
    return PostVolumesIdActionsResizePathParams;
}(SpeakeasyBase));
export { PostVolumesIdActionsResizePathParams };
var PostVolumesIdActionsResizeRequestBody = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsResizeRequestBody, _super);
    function PostVolumesIdActionsResizeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsResizeRequestBody.prototype, "size", void 0);
    return PostVolumesIdActionsResizeRequestBody;
}(SpeakeasyBase));
export { PostVolumesIdActionsResizeRequestBody };
// PostVolumesIdActionsResizeActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostVolumesIdActionsResizeActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsResizeActionResponseActionError, _super);
    function PostVolumesIdActionsResizeActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsResizeActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsResizeActionResponseActionError.prototype, "message", void 0);
    return PostVolumesIdActionsResizeActionResponseActionError;
}(SpeakeasyBase));
export { PostVolumesIdActionsResizeActionResponseActionError };
var PostVolumesIdActionsResizeActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsResizeActionResponseActionResources, _super);
    function PostVolumesIdActionsResizeActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsResizeActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsResizeActionResponseActionResources.prototype, "type", void 0);
    return PostVolumesIdActionsResizeActionResponseActionResources;
}(SpeakeasyBase));
export { PostVolumesIdActionsResizeActionResponseActionResources };
export var PostVolumesIdActionsResizeActionResponseActionStatusEnum;
(function (PostVolumesIdActionsResizeActionResponseActionStatusEnum) {
    PostVolumesIdActionsResizeActionResponseActionStatusEnum["Success"] = "success";
    PostVolumesIdActionsResizeActionResponseActionStatusEnum["Running"] = "running";
    PostVolumesIdActionsResizeActionResponseActionStatusEnum["Error"] = "error";
})(PostVolumesIdActionsResizeActionResponseActionStatusEnum || (PostVolumesIdActionsResizeActionResponseActionStatusEnum = {}));
var PostVolumesIdActionsResizeActionResponseAction = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsResizeActionResponseAction, _super);
    function PostVolumesIdActionsResizeActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsResizeActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostVolumesIdActionsResizeActionResponseActionError)
    ], PostVolumesIdActionsResizeActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsResizeActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsResizeActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsResizeActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostVolumesIdActionsResizeActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostVolumesIdActionsResizeActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsResizeActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsResizeActionResponseAction.prototype, "status", void 0);
    return PostVolumesIdActionsResizeActionResponseAction;
}(SpeakeasyBase));
export { PostVolumesIdActionsResizeActionResponseAction };
var PostVolumesIdActionsResizeActionResponse = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsResizeActionResponse, _super);
    function PostVolumesIdActionsResizeActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostVolumesIdActionsResizeActionResponseAction)
    ], PostVolumesIdActionsResizeActionResponse.prototype, "action", void 0);
    return PostVolumesIdActionsResizeActionResponse;
}(SpeakeasyBase));
export { PostVolumesIdActionsResizeActionResponse };
var PostVolumesIdActionsResizeRequest = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsResizeRequest, _super);
    function PostVolumesIdActionsResizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVolumesIdActionsResizePathParams)
    ], PostVolumesIdActionsResizeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostVolumesIdActionsResizeRequestBody)
    ], PostVolumesIdActionsResizeRequest.prototype, "request", void 0);
    return PostVolumesIdActionsResizeRequest;
}(SpeakeasyBase));
export { PostVolumesIdActionsResizeRequest };
var PostVolumesIdActionsResizeResponse = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsResizeResponse, _super);
    function PostVolumesIdActionsResizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVolumesIdActionsResizeActionResponse)
    ], PostVolumesIdActionsResizeResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostVolumesIdActionsResizeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsResizeResponse.prototype, "statusCode", void 0);
    return PostVolumesIdActionsResizeResponse;
}(SpeakeasyBase));
export { PostVolumesIdActionsResizeResponse };
