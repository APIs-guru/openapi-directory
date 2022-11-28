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
var PostServersIdActionsShutdownPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsShutdownPathParams, _super);
    function PostServersIdActionsShutdownPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsShutdownPathParams.prototype, "id", void 0);
    return PostServersIdActionsShutdownPathParams;
}(SpeakeasyBase));
export { PostServersIdActionsShutdownPathParams };
// PostServersIdActionsShutdownActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsShutdownActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsShutdownActionResponseActionError, _super);
    function PostServersIdActionsShutdownActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsShutdownActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsShutdownActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsShutdownActionResponseActionError;
}(SpeakeasyBase));
export { PostServersIdActionsShutdownActionResponseActionError };
var PostServersIdActionsShutdownActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsShutdownActionResponseActionResources, _super);
    function PostServersIdActionsShutdownActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsShutdownActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsShutdownActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsShutdownActionResponseActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsShutdownActionResponseActionResources };
export var PostServersIdActionsShutdownActionResponseActionStatusEnum;
(function (PostServersIdActionsShutdownActionResponseActionStatusEnum) {
    PostServersIdActionsShutdownActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsShutdownActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsShutdownActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsShutdownActionResponseActionStatusEnum || (PostServersIdActionsShutdownActionResponseActionStatusEnum = {}));
var PostServersIdActionsShutdownActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsShutdownActionResponseAction, _super);
    function PostServersIdActionsShutdownActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsShutdownActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsShutdownActionResponseActionError)
    ], PostServersIdActionsShutdownActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsShutdownActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsShutdownActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsShutdownActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsShutdownActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsShutdownActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsShutdownActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsShutdownActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsShutdownActionResponseAction;
}(SpeakeasyBase));
export { PostServersIdActionsShutdownActionResponseAction };
var PostServersIdActionsShutdownActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsShutdownActionResponse, _super);
    function PostServersIdActionsShutdownActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsShutdownActionResponseAction)
    ], PostServersIdActionsShutdownActionResponse.prototype, "action", void 0);
    return PostServersIdActionsShutdownActionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsShutdownActionResponse };
var PostServersIdActionsShutdownRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsShutdownRequest, _super);
    function PostServersIdActionsShutdownRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsShutdownPathParams)
    ], PostServersIdActionsShutdownRequest.prototype, "pathParams", void 0);
    return PostServersIdActionsShutdownRequest;
}(SpeakeasyBase));
export { PostServersIdActionsShutdownRequest };
var PostServersIdActionsShutdownResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsShutdownResponse, _super);
    function PostServersIdActionsShutdownResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsShutdownActionResponse)
    ], PostServersIdActionsShutdownResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsShutdownResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsShutdownResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsShutdownResponse;
}(SpeakeasyBase));
export { PostServersIdActionsShutdownResponse };
