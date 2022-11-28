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
var PostServersIdActionsChangeProtectionPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeProtectionPathParams, _super);
    function PostServersIdActionsChangeProtectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeProtectionPathParams.prototype, "id", void 0);
    return PostServersIdActionsChangeProtectionPathParams;
}(SpeakeasyBase));
export { PostServersIdActionsChangeProtectionPathParams };
var PostServersIdActionsChangeProtectionRequestBody = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeProtectionRequestBody, _super);
    function PostServersIdActionsChangeProtectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PostServersIdActionsChangeProtectionRequestBody.prototype, "delete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rebuild" }),
        __metadata("design:type", Boolean)
    ], PostServersIdActionsChangeProtectionRequestBody.prototype, "rebuild", void 0);
    return PostServersIdActionsChangeProtectionRequestBody;
}(SpeakeasyBase));
export { PostServersIdActionsChangeProtectionRequestBody };
// PostServersIdActionsChangeProtectionActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsChangeProtectionActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeProtectionActionResponseActionError, _super);
    function PostServersIdActionsChangeProtectionActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeProtectionActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeProtectionActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsChangeProtectionActionResponseActionError;
}(SpeakeasyBase));
export { PostServersIdActionsChangeProtectionActionResponseActionError };
var PostServersIdActionsChangeProtectionActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeProtectionActionResponseActionResources, _super);
    function PostServersIdActionsChangeProtectionActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeProtectionActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeProtectionActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsChangeProtectionActionResponseActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsChangeProtectionActionResponseActionResources };
export var PostServersIdActionsChangeProtectionActionResponseActionStatusEnum;
(function (PostServersIdActionsChangeProtectionActionResponseActionStatusEnum) {
    PostServersIdActionsChangeProtectionActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsChangeProtectionActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsChangeProtectionActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsChangeProtectionActionResponseActionStatusEnum || (PostServersIdActionsChangeProtectionActionResponseActionStatusEnum = {}));
var PostServersIdActionsChangeProtectionActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeProtectionActionResponseAction, _super);
    function PostServersIdActionsChangeProtectionActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeProtectionActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsChangeProtectionActionResponseActionError)
    ], PostServersIdActionsChangeProtectionActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeProtectionActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeProtectionActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeProtectionActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsChangeProtectionActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsChangeProtectionActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeProtectionActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeProtectionActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsChangeProtectionActionResponseAction;
}(SpeakeasyBase));
export { PostServersIdActionsChangeProtectionActionResponseAction };
var PostServersIdActionsChangeProtectionActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeProtectionActionResponse, _super);
    function PostServersIdActionsChangeProtectionActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsChangeProtectionActionResponseAction)
    ], PostServersIdActionsChangeProtectionActionResponse.prototype, "action", void 0);
    return PostServersIdActionsChangeProtectionActionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsChangeProtectionActionResponse };
var PostServersIdActionsChangeProtectionRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeProtectionRequest, _super);
    function PostServersIdActionsChangeProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsChangeProtectionPathParams)
    ], PostServersIdActionsChangeProtectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostServersIdActionsChangeProtectionRequestBody)
    ], PostServersIdActionsChangeProtectionRequest.prototype, "request", void 0);
    return PostServersIdActionsChangeProtectionRequest;
}(SpeakeasyBase));
export { PostServersIdActionsChangeProtectionRequest };
var PostServersIdActionsChangeProtectionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsChangeProtectionResponse, _super);
    function PostServersIdActionsChangeProtectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsChangeProtectionActionResponse)
    ], PostServersIdActionsChangeProtectionResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsChangeProtectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsChangeProtectionResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsChangeProtectionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsChangeProtectionResponse };
