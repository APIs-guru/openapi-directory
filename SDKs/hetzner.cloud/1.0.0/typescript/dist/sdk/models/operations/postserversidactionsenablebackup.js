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
var PostServersIdActionsEnableBackupPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableBackupPathParams, _super);
    function PostServersIdActionsEnableBackupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsEnableBackupPathParams.prototype, "id", void 0);
    return PostServersIdActionsEnableBackupPathParams;
}(SpeakeasyBase));
export { PostServersIdActionsEnableBackupPathParams };
// PostServersIdActionsEnableBackupActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsEnableBackupActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableBackupActionResponseActionError, _super);
    function PostServersIdActionsEnableBackupActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableBackupActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableBackupActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsEnableBackupActionResponseActionError;
}(SpeakeasyBase));
export { PostServersIdActionsEnableBackupActionResponseActionError };
var PostServersIdActionsEnableBackupActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableBackupActionResponseActionResources, _super);
    function PostServersIdActionsEnableBackupActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsEnableBackupActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableBackupActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsEnableBackupActionResponseActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsEnableBackupActionResponseActionResources };
export var PostServersIdActionsEnableBackupActionResponseActionStatusEnum;
(function (PostServersIdActionsEnableBackupActionResponseActionStatusEnum) {
    PostServersIdActionsEnableBackupActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsEnableBackupActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsEnableBackupActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsEnableBackupActionResponseActionStatusEnum || (PostServersIdActionsEnableBackupActionResponseActionStatusEnum = {}));
var PostServersIdActionsEnableBackupActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableBackupActionResponseAction, _super);
    function PostServersIdActionsEnableBackupActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableBackupActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsEnableBackupActionResponseActionError)
    ], PostServersIdActionsEnableBackupActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableBackupActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsEnableBackupActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsEnableBackupActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsEnableBackupActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsEnableBackupActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableBackupActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableBackupActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsEnableBackupActionResponseAction;
}(SpeakeasyBase));
export { PostServersIdActionsEnableBackupActionResponseAction };
var PostServersIdActionsEnableBackupActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableBackupActionResponse, _super);
    function PostServersIdActionsEnableBackupActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsEnableBackupActionResponseAction)
    ], PostServersIdActionsEnableBackupActionResponse.prototype, "action", void 0);
    return PostServersIdActionsEnableBackupActionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsEnableBackupActionResponse };
var PostServersIdActionsEnableBackupRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableBackupRequest, _super);
    function PostServersIdActionsEnableBackupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsEnableBackupPathParams)
    ], PostServersIdActionsEnableBackupRequest.prototype, "pathParams", void 0);
    return PostServersIdActionsEnableBackupRequest;
}(SpeakeasyBase));
export { PostServersIdActionsEnableBackupRequest };
var PostServersIdActionsEnableBackupResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsEnableBackupResponse, _super);
    function PostServersIdActionsEnableBackupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsEnableBackupActionResponse)
    ], PostServersIdActionsEnableBackupResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsEnableBackupResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsEnableBackupResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsEnableBackupResponse;
}(SpeakeasyBase));
export { PostServersIdActionsEnableBackupResponse };
