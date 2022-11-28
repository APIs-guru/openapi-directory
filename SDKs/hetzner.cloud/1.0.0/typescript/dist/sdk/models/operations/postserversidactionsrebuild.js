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
var PostServersIdActionsRebuildPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebuildPathParams, _super);
    function PostServersIdActionsRebuildPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRebuildPathParams.prototype, "id", void 0);
    return PostServersIdActionsRebuildPathParams;
}(SpeakeasyBase));
export { PostServersIdActionsRebuildPathParams };
var PostServersIdActionsRebuildRebuildServerRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebuildRebuildServerRequest, _super);
    function PostServersIdActionsRebuildRebuildServerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebuildRebuildServerRequest.prototype, "image", void 0);
    return PostServersIdActionsRebuildRebuildServerRequest;
}(SpeakeasyBase));
export { PostServersIdActionsRebuildRebuildServerRequest };
// PostServersIdActionsRebuild201ApplicationJsonActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsRebuild201ApplicationJsonActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebuild201ApplicationJsonActionError, _super);
    function PostServersIdActionsRebuild201ApplicationJsonActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebuild201ApplicationJsonActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebuild201ApplicationJsonActionError.prototype, "message", void 0);
    return PostServersIdActionsRebuild201ApplicationJsonActionError;
}(SpeakeasyBase));
export { PostServersIdActionsRebuild201ApplicationJsonActionError };
var PostServersIdActionsRebuild201ApplicationJsonActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebuild201ApplicationJsonActionResources, _super);
    function PostServersIdActionsRebuild201ApplicationJsonActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRebuild201ApplicationJsonActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebuild201ApplicationJsonActionResources.prototype, "type", void 0);
    return PostServersIdActionsRebuild201ApplicationJsonActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsRebuild201ApplicationJsonActionResources };
export var PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum;
(function (PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum) {
    PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum["Success"] = "success";
    PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum["Running"] = "running";
    PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum["Error"] = "error";
})(PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum || (PostServersIdActionsRebuild201ApplicationJsonActionStatusEnum = {}));
var PostServersIdActionsRebuild201ApplicationJsonAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebuild201ApplicationJsonAction, _super);
    function PostServersIdActionsRebuild201ApplicationJsonAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebuild201ApplicationJsonAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsRebuild201ApplicationJsonActionError)
    ], PostServersIdActionsRebuild201ApplicationJsonAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebuild201ApplicationJsonAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRebuild201ApplicationJsonAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRebuild201ApplicationJsonAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsRebuild201ApplicationJsonActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsRebuild201ApplicationJsonAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebuild201ApplicationJsonAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebuild201ApplicationJsonAction.prototype, "status", void 0);
    return PostServersIdActionsRebuild201ApplicationJsonAction;
}(SpeakeasyBase));
export { PostServersIdActionsRebuild201ApplicationJsonAction };
var PostServersIdActionsRebuild201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebuild201ApplicationJson, _super);
    function PostServersIdActionsRebuild201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsRebuild201ApplicationJsonAction)
    ], PostServersIdActionsRebuild201ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=root_password" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebuild201ApplicationJson.prototype, "rootPassword", void 0);
    return PostServersIdActionsRebuild201ApplicationJson;
}(SpeakeasyBase));
export { PostServersIdActionsRebuild201ApplicationJson };
var PostServersIdActionsRebuildRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebuildRequest, _super);
    function PostServersIdActionsRebuildRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsRebuildPathParams)
    ], PostServersIdActionsRebuildRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostServersIdActionsRebuildRebuildServerRequest)
    ], PostServersIdActionsRebuildRequest.prototype, "request", void 0);
    return PostServersIdActionsRebuildRequest;
}(SpeakeasyBase));
export { PostServersIdActionsRebuildRequest };
var PostServersIdActionsRebuildResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebuildResponse, _super);
    function PostServersIdActionsRebuildResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsRebuildResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsRebuild201ApplicationJson)
    ], PostServersIdActionsRebuildResponse.prototype, "postServersIdActionsRebuild201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsRebuildResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsRebuildResponse;
}(SpeakeasyBase));
export { PostServersIdActionsRebuildResponse };
