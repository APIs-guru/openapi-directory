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
var PostServersIdActionsRebootPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebootPathParams, _super);
    function PostServersIdActionsRebootPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRebootPathParams.prototype, "id", void 0);
    return PostServersIdActionsRebootPathParams;
}(SpeakeasyBase));
export { PostServersIdActionsRebootPathParams };
// PostServersIdActionsRebootActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsRebootActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebootActionResponseActionError, _super);
    function PostServersIdActionsRebootActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebootActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebootActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsRebootActionResponseActionError;
}(SpeakeasyBase));
export { PostServersIdActionsRebootActionResponseActionError };
var PostServersIdActionsRebootActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebootActionResponseActionResources, _super);
    function PostServersIdActionsRebootActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRebootActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebootActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsRebootActionResponseActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsRebootActionResponseActionResources };
export var PostServersIdActionsRebootActionResponseActionStatusEnum;
(function (PostServersIdActionsRebootActionResponseActionStatusEnum) {
    PostServersIdActionsRebootActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsRebootActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsRebootActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsRebootActionResponseActionStatusEnum || (PostServersIdActionsRebootActionResponseActionStatusEnum = {}));
var PostServersIdActionsRebootActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebootActionResponseAction, _super);
    function PostServersIdActionsRebootActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebootActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsRebootActionResponseActionError)
    ], PostServersIdActionsRebootActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebootActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRebootActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsRebootActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsRebootActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsRebootActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebootActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsRebootActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsRebootActionResponseAction;
}(SpeakeasyBase));
export { PostServersIdActionsRebootActionResponseAction };
var PostServersIdActionsRebootActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebootActionResponse, _super);
    function PostServersIdActionsRebootActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsRebootActionResponseAction)
    ], PostServersIdActionsRebootActionResponse.prototype, "action", void 0);
    return PostServersIdActionsRebootActionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsRebootActionResponse };
var PostServersIdActionsRebootRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebootRequest, _super);
    function PostServersIdActionsRebootRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsRebootPathParams)
    ], PostServersIdActionsRebootRequest.prototype, "pathParams", void 0);
    return PostServersIdActionsRebootRequest;
}(SpeakeasyBase));
export { PostServersIdActionsRebootRequest };
var PostServersIdActionsRebootResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsRebootResponse, _super);
    function PostServersIdActionsRebootResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsRebootActionResponse)
    ], PostServersIdActionsRebootResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsRebootResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsRebootResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsRebootResponse;
}(SpeakeasyBase));
export { PostServersIdActionsRebootResponse };
