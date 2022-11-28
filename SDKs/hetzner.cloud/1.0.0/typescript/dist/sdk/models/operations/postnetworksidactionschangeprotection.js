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
var PostNetworksIdActionsChangeProtectionPathParams = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeProtectionPathParams, _super);
    function PostNetworksIdActionsChangeProtectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsChangeProtectionPathParams.prototype, "id", void 0);
    return PostNetworksIdActionsChangeProtectionPathParams;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeProtectionPathParams };
var PostNetworksIdActionsChangeProtectionChangeProtectionRequest = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeProtectionChangeProtectionRequest, _super);
    function PostNetworksIdActionsChangeProtectionChangeProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PostNetworksIdActionsChangeProtectionChangeProtectionRequest.prototype, "delete", void 0);
    return PostNetworksIdActionsChangeProtectionChangeProtectionRequest;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeProtectionChangeProtectionRequest };
// PostNetworksIdActionsChangeProtectionActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostNetworksIdActionsChangeProtectionActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeProtectionActionResponseActionError, _super);
    function PostNetworksIdActionsChangeProtectionActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeProtectionActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeProtectionActionResponseActionError.prototype, "message", void 0);
    return PostNetworksIdActionsChangeProtectionActionResponseActionError;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeProtectionActionResponseActionError };
var PostNetworksIdActionsChangeProtectionActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeProtectionActionResponseActionResources, _super);
    function PostNetworksIdActionsChangeProtectionActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsChangeProtectionActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeProtectionActionResponseActionResources.prototype, "type", void 0);
    return PostNetworksIdActionsChangeProtectionActionResponseActionResources;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeProtectionActionResponseActionResources };
export var PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum;
(function (PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum) {
    PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum["Success"] = "success";
    PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum["Running"] = "running";
    PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum["Error"] = "error";
})(PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum || (PostNetworksIdActionsChangeProtectionActionResponseActionStatusEnum = {}));
var PostNetworksIdActionsChangeProtectionActionResponseAction = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeProtectionActionResponseAction, _super);
    function PostNetworksIdActionsChangeProtectionActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeProtectionActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostNetworksIdActionsChangeProtectionActionResponseActionError)
    ], PostNetworksIdActionsChangeProtectionActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeProtectionActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsChangeProtectionActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsChangeProtectionActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostNetworksIdActionsChangeProtectionActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostNetworksIdActionsChangeProtectionActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeProtectionActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeProtectionActionResponseAction.prototype, "status", void 0);
    return PostNetworksIdActionsChangeProtectionActionResponseAction;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeProtectionActionResponseAction };
var PostNetworksIdActionsChangeProtectionActionResponse = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeProtectionActionResponse, _super);
    function PostNetworksIdActionsChangeProtectionActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostNetworksIdActionsChangeProtectionActionResponseAction)
    ], PostNetworksIdActionsChangeProtectionActionResponse.prototype, "action", void 0);
    return PostNetworksIdActionsChangeProtectionActionResponse;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeProtectionActionResponse };
var PostNetworksIdActionsChangeProtectionRequest = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeProtectionRequest, _super);
    function PostNetworksIdActionsChangeProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostNetworksIdActionsChangeProtectionPathParams)
    ], PostNetworksIdActionsChangeProtectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostNetworksIdActionsChangeProtectionChangeProtectionRequest)
    ], PostNetworksIdActionsChangeProtectionRequest.prototype, "request", void 0);
    return PostNetworksIdActionsChangeProtectionRequest;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeProtectionRequest };
var PostNetworksIdActionsChangeProtectionResponse = /** @class */ (function (_super) {
    __extends(PostNetworksIdActionsChangeProtectionResponse, _super);
    function PostNetworksIdActionsChangeProtectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostNetworksIdActionsChangeProtectionActionResponse)
    ], PostNetworksIdActionsChangeProtectionResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostNetworksIdActionsChangeProtectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostNetworksIdActionsChangeProtectionResponse.prototype, "statusCode", void 0);
    return PostNetworksIdActionsChangeProtectionResponse;
}(SpeakeasyBase));
export { PostNetworksIdActionsChangeProtectionResponse };
