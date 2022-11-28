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
var PostImagesIdActionsChangeProtectionPathParams = /** @class */ (function (_super) {
    __extends(PostImagesIdActionsChangeProtectionPathParams, _super);
    function PostImagesIdActionsChangeProtectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostImagesIdActionsChangeProtectionPathParams.prototype, "id", void 0);
    return PostImagesIdActionsChangeProtectionPathParams;
}(SpeakeasyBase));
export { PostImagesIdActionsChangeProtectionPathParams };
var PostImagesIdActionsChangeProtectionRequestBody = /** @class */ (function (_super) {
    __extends(PostImagesIdActionsChangeProtectionRequestBody, _super);
    function PostImagesIdActionsChangeProtectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PostImagesIdActionsChangeProtectionRequestBody.prototype, "delete", void 0);
    return PostImagesIdActionsChangeProtectionRequestBody;
}(SpeakeasyBase));
export { PostImagesIdActionsChangeProtectionRequestBody };
// PostImagesIdActionsChangeProtectionActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostImagesIdActionsChangeProtectionActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostImagesIdActionsChangeProtectionActionResponseActionError, _super);
    function PostImagesIdActionsChangeProtectionActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostImagesIdActionsChangeProtectionActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostImagesIdActionsChangeProtectionActionResponseActionError.prototype, "message", void 0);
    return PostImagesIdActionsChangeProtectionActionResponseActionError;
}(SpeakeasyBase));
export { PostImagesIdActionsChangeProtectionActionResponseActionError };
var PostImagesIdActionsChangeProtectionActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostImagesIdActionsChangeProtectionActionResponseActionResources, _super);
    function PostImagesIdActionsChangeProtectionActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostImagesIdActionsChangeProtectionActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostImagesIdActionsChangeProtectionActionResponseActionResources.prototype, "type", void 0);
    return PostImagesIdActionsChangeProtectionActionResponseActionResources;
}(SpeakeasyBase));
export { PostImagesIdActionsChangeProtectionActionResponseActionResources };
export var PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum;
(function (PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum) {
    PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum["Success"] = "success";
    PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum["Running"] = "running";
    PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum["Error"] = "error";
})(PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum || (PostImagesIdActionsChangeProtectionActionResponseActionStatusEnum = {}));
var PostImagesIdActionsChangeProtectionActionResponseAction = /** @class */ (function (_super) {
    __extends(PostImagesIdActionsChangeProtectionActionResponseAction, _super);
    function PostImagesIdActionsChangeProtectionActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostImagesIdActionsChangeProtectionActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostImagesIdActionsChangeProtectionActionResponseActionError)
    ], PostImagesIdActionsChangeProtectionActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostImagesIdActionsChangeProtectionActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostImagesIdActionsChangeProtectionActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostImagesIdActionsChangeProtectionActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostImagesIdActionsChangeProtectionActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostImagesIdActionsChangeProtectionActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostImagesIdActionsChangeProtectionActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostImagesIdActionsChangeProtectionActionResponseAction.prototype, "status", void 0);
    return PostImagesIdActionsChangeProtectionActionResponseAction;
}(SpeakeasyBase));
export { PostImagesIdActionsChangeProtectionActionResponseAction };
var PostImagesIdActionsChangeProtectionActionResponse = /** @class */ (function (_super) {
    __extends(PostImagesIdActionsChangeProtectionActionResponse, _super);
    function PostImagesIdActionsChangeProtectionActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostImagesIdActionsChangeProtectionActionResponseAction)
    ], PostImagesIdActionsChangeProtectionActionResponse.prototype, "action", void 0);
    return PostImagesIdActionsChangeProtectionActionResponse;
}(SpeakeasyBase));
export { PostImagesIdActionsChangeProtectionActionResponse };
var PostImagesIdActionsChangeProtectionRequest = /** @class */ (function (_super) {
    __extends(PostImagesIdActionsChangeProtectionRequest, _super);
    function PostImagesIdActionsChangeProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostImagesIdActionsChangeProtectionPathParams)
    ], PostImagesIdActionsChangeProtectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostImagesIdActionsChangeProtectionRequestBody)
    ], PostImagesIdActionsChangeProtectionRequest.prototype, "request", void 0);
    return PostImagesIdActionsChangeProtectionRequest;
}(SpeakeasyBase));
export { PostImagesIdActionsChangeProtectionRequest };
var PostImagesIdActionsChangeProtectionResponse = /** @class */ (function (_super) {
    __extends(PostImagesIdActionsChangeProtectionResponse, _super);
    function PostImagesIdActionsChangeProtectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostImagesIdActionsChangeProtectionActionResponse)
    ], PostImagesIdActionsChangeProtectionResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostImagesIdActionsChangeProtectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostImagesIdActionsChangeProtectionResponse.prototype, "statusCode", void 0);
    return PostImagesIdActionsChangeProtectionResponse;
}(SpeakeasyBase));
export { PostImagesIdActionsChangeProtectionResponse };
