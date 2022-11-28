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
var PostVolumesIdActionsDetachPathParams = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsDetachPathParams, _super);
    function PostVolumesIdActionsDetachPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsDetachPathParams.prototype, "id", void 0);
    return PostVolumesIdActionsDetachPathParams;
}(SpeakeasyBase));
export { PostVolumesIdActionsDetachPathParams };
// PostVolumesIdActionsDetachActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostVolumesIdActionsDetachActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsDetachActionResponseActionError, _super);
    function PostVolumesIdActionsDetachActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsDetachActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsDetachActionResponseActionError.prototype, "message", void 0);
    return PostVolumesIdActionsDetachActionResponseActionError;
}(SpeakeasyBase));
export { PostVolumesIdActionsDetachActionResponseActionError };
var PostVolumesIdActionsDetachActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsDetachActionResponseActionResources, _super);
    function PostVolumesIdActionsDetachActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsDetachActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsDetachActionResponseActionResources.prototype, "type", void 0);
    return PostVolumesIdActionsDetachActionResponseActionResources;
}(SpeakeasyBase));
export { PostVolumesIdActionsDetachActionResponseActionResources };
export var PostVolumesIdActionsDetachActionResponseActionStatusEnum;
(function (PostVolumesIdActionsDetachActionResponseActionStatusEnum) {
    PostVolumesIdActionsDetachActionResponseActionStatusEnum["Success"] = "success";
    PostVolumesIdActionsDetachActionResponseActionStatusEnum["Running"] = "running";
    PostVolumesIdActionsDetachActionResponseActionStatusEnum["Error"] = "error";
})(PostVolumesIdActionsDetachActionResponseActionStatusEnum || (PostVolumesIdActionsDetachActionResponseActionStatusEnum = {}));
var PostVolumesIdActionsDetachActionResponseAction = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsDetachActionResponseAction, _super);
    function PostVolumesIdActionsDetachActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsDetachActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostVolumesIdActionsDetachActionResponseActionError)
    ], PostVolumesIdActionsDetachActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsDetachActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsDetachActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsDetachActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostVolumesIdActionsDetachActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostVolumesIdActionsDetachActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsDetachActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostVolumesIdActionsDetachActionResponseAction.prototype, "status", void 0);
    return PostVolumesIdActionsDetachActionResponseAction;
}(SpeakeasyBase));
export { PostVolumesIdActionsDetachActionResponseAction };
var PostVolumesIdActionsDetachActionResponse = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsDetachActionResponse, _super);
    function PostVolumesIdActionsDetachActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostVolumesIdActionsDetachActionResponseAction)
    ], PostVolumesIdActionsDetachActionResponse.prototype, "action", void 0);
    return PostVolumesIdActionsDetachActionResponse;
}(SpeakeasyBase));
export { PostVolumesIdActionsDetachActionResponse };
var PostVolumesIdActionsDetachRequest = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsDetachRequest, _super);
    function PostVolumesIdActionsDetachRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVolumesIdActionsDetachPathParams)
    ], PostVolumesIdActionsDetachRequest.prototype, "pathParams", void 0);
    return PostVolumesIdActionsDetachRequest;
}(SpeakeasyBase));
export { PostVolumesIdActionsDetachRequest };
var PostVolumesIdActionsDetachResponse = /** @class */ (function (_super) {
    __extends(PostVolumesIdActionsDetachResponse, _super);
    function PostVolumesIdActionsDetachResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostVolumesIdActionsDetachActionResponse)
    ], PostVolumesIdActionsDetachResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostVolumesIdActionsDetachResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostVolumesIdActionsDetachResponse.prototype, "statusCode", void 0);
    return PostVolumesIdActionsDetachResponse;
}(SpeakeasyBase));
export { PostVolumesIdActionsDetachResponse };
