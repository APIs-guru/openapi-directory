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
var PostServersIdActionsRequestConsolePathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRequestConsolePathParams, _super);
    function PostServersIdActionsRequestConsolePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRequestConsolePathParams.prototype, "id", void 0);
    return PostServersIdActionsRequestConsolePathParams;
}(SpeakeasyBase));
export { PostServersIdActionsRequestConsolePathParams };
// PostServersIdActionsRequestConsole201ApplicationJsonActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsRequestConsole201ApplicationJsonActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRequestConsole201ApplicationJsonActionError, _super);
    function PostServersIdActionsRequestConsole201ApplicationJsonActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRequestConsole201ApplicationJsonActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRequestConsole201ApplicationJsonActionError.prototype, "message", void 0);
    return PostServersIdActionsRequestConsole201ApplicationJsonActionError;
}(SpeakeasyBase));
export { PostServersIdActionsRequestConsole201ApplicationJsonActionError };
var PostServersIdActionsRequestConsole201ApplicationJsonActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRequestConsole201ApplicationJsonActionResources, _super);
    function PostServersIdActionsRequestConsole201ApplicationJsonActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRequestConsole201ApplicationJsonActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRequestConsole201ApplicationJsonActionResources.prototype, "type", void 0);
    return PostServersIdActionsRequestConsole201ApplicationJsonActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsRequestConsole201ApplicationJsonActionResources };
export var PostServersIdActionsRequestConsole201ApplicationJsonActionStatusEnum;
(function (PostServersIdActionsRequestConsole201ApplicationJsonActionStatusEnum) {
    PostServersIdActionsRequestConsole201ApplicationJsonActionStatusEnum["Success"] = "success";
    PostServersIdActionsRequestConsole201ApplicationJsonActionStatusEnum["Running"] = "running";
    PostServersIdActionsRequestConsole201ApplicationJsonActionStatusEnum["Error"] = "error";
})(PostServersIdActionsRequestConsole201ApplicationJsonActionStatusEnum || (PostServersIdActionsRequestConsole201ApplicationJsonActionStatusEnum = {}));
var PostServersIdActionsRequestConsole201ApplicationJsonAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRequestConsole201ApplicationJsonAction, _super);
    function PostServersIdActionsRequestConsole201ApplicationJsonAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRequestConsole201ApplicationJsonAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsRequestConsole201ApplicationJsonActionError)
    ], PostServersIdActionsRequestConsole201ApplicationJsonAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRequestConsole201ApplicationJsonAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRequestConsole201ApplicationJsonAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRequestConsole201ApplicationJsonAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsRequestConsole201ApplicationJsonActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsRequestConsole201ApplicationJsonAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRequestConsole201ApplicationJsonAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRequestConsole201ApplicationJsonAction.prototype, "status", void 0);
    return PostServersIdActionsRequestConsole201ApplicationJsonAction;
}(SpeakeasyBase));
export { PostServersIdActionsRequestConsole201ApplicationJsonAction };
var PostServersIdActionsRequestConsole201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRequestConsole201ApplicationJson, _super);
    function PostServersIdActionsRequestConsole201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsRequestConsole201ApplicationJsonAction)
    ], PostServersIdActionsRequestConsole201ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRequestConsole201ApplicationJson.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wss_url" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRequestConsole201ApplicationJson.prototype, "wssUrl", void 0);
    return PostServersIdActionsRequestConsole201ApplicationJson;
}(SpeakeasyBase));
export { PostServersIdActionsRequestConsole201ApplicationJson };
var PostServersIdActionsRequestConsoleRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRequestConsoleRequest, _super);
    function PostServersIdActionsRequestConsoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsRequestConsolePathParams)
    ], PostServersIdActionsRequestConsoleRequest.prototype, "pathParams", void 0);
    return PostServersIdActionsRequestConsoleRequest;
}(SpeakeasyBase));
export { PostServersIdActionsRequestConsoleRequest };
var PostServersIdActionsRequestConsoleResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRequestConsoleResponse, _super);
    function PostServersIdActionsRequestConsoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsRequestConsoleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsRequestConsole201ApplicationJson)
    ], PostServersIdActionsRequestConsoleResponse.prototype, "postServersIdActionsRequestConsole201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsRequestConsoleResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsRequestConsoleResponse;
}(SpeakeasyBase));
export { PostServersIdActionsRequestConsoleResponse };
