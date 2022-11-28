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
var PostServersIdActionsDisableBackupPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDisableBackupPathParams, _super);
    function PostServersIdActionsDisableBackupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDisableBackupPathParams.prototype, "id", void 0);
    return PostServersIdActionsDisableBackupPathParams;
}(SpeakeasyBase));
export { PostServersIdActionsDisableBackupPathParams };
// PostServersIdActionsDisableBackupActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsDisableBackupActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDisableBackupActionResponseActionError, _super);
    function PostServersIdActionsDisableBackupActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableBackupActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableBackupActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsDisableBackupActionResponseActionError;
}(SpeakeasyBase));
export { PostServersIdActionsDisableBackupActionResponseActionError };
var PostServersIdActionsDisableBackupActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDisableBackupActionResponseActionResources, _super);
    function PostServersIdActionsDisableBackupActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDisableBackupActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableBackupActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsDisableBackupActionResponseActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsDisableBackupActionResponseActionResources };
export var PostServersIdActionsDisableBackupActionResponseActionStatusEnum;
(function (PostServersIdActionsDisableBackupActionResponseActionStatusEnum) {
    PostServersIdActionsDisableBackupActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsDisableBackupActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsDisableBackupActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsDisableBackupActionResponseActionStatusEnum || (PostServersIdActionsDisableBackupActionResponseActionStatusEnum = {}));
var PostServersIdActionsDisableBackupActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDisableBackupActionResponseAction, _super);
    function PostServersIdActionsDisableBackupActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableBackupActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsDisableBackupActionResponseActionError)
    ], PostServersIdActionsDisableBackupActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableBackupActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDisableBackupActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDisableBackupActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsDisableBackupActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsDisableBackupActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableBackupActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableBackupActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsDisableBackupActionResponseAction;
}(SpeakeasyBase));
export { PostServersIdActionsDisableBackupActionResponseAction };
var PostServersIdActionsDisableBackupActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDisableBackupActionResponse, _super);
    function PostServersIdActionsDisableBackupActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsDisableBackupActionResponseAction)
    ], PostServersIdActionsDisableBackupActionResponse.prototype, "action", void 0);
    return PostServersIdActionsDisableBackupActionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsDisableBackupActionResponse };
var PostServersIdActionsDisableBackupRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDisableBackupRequest, _super);
    function PostServersIdActionsDisableBackupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsDisableBackupPathParams)
    ], PostServersIdActionsDisableBackupRequest.prototype, "pathParams", void 0);
    return PostServersIdActionsDisableBackupRequest;
}(SpeakeasyBase));
export { PostServersIdActionsDisableBackupRequest };
var PostServersIdActionsDisableBackupResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDisableBackupResponse, _super);
    function PostServersIdActionsDisableBackupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsDisableBackupActionResponse)
    ], PostServersIdActionsDisableBackupResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableBackupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsDisableBackupResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsDisableBackupResponse;
}(SpeakeasyBase));
export { PostServersIdActionsDisableBackupResponse };
