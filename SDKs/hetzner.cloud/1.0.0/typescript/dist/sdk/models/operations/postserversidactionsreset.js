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
var PostServersIdActionsResetPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsResetPathParams, _super);
    function PostServersIdActionsResetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsResetPathParams.prototype, "id", void 0);
    return PostServersIdActionsResetPathParams;
}(SpeakeasyBase));
export { PostServersIdActionsResetPathParams };
// PostServersIdActionsResetActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsResetActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsResetActionResponseActionError, _super);
    function PostServersIdActionsResetActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsResetActionResponseActionError;
}(SpeakeasyBase));
export { PostServersIdActionsResetActionResponseActionError };
var PostServersIdActionsResetActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsResetActionResponseActionResources, _super);
    function PostServersIdActionsResetActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsResetActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsResetActionResponseActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsResetActionResponseActionResources };
export var PostServersIdActionsResetActionResponseActionStatusEnum;
(function (PostServersIdActionsResetActionResponseActionStatusEnum) {
    PostServersIdActionsResetActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsResetActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsResetActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsResetActionResponseActionStatusEnum || (PostServersIdActionsResetActionResponseActionStatusEnum = {}));
var PostServersIdActionsResetActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsResetActionResponseAction, _super);
    function PostServersIdActionsResetActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsResetActionResponseActionError)
    ], PostServersIdActionsResetActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsResetActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsResetActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsResetActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsResetActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsResetActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsResetActionResponseAction;
}(SpeakeasyBase));
export { PostServersIdActionsResetActionResponseAction };
var PostServersIdActionsResetActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsResetActionResponse, _super);
    function PostServersIdActionsResetActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsResetActionResponseAction)
    ], PostServersIdActionsResetActionResponse.prototype, "action", void 0);
    return PostServersIdActionsResetActionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsResetActionResponse };
var PostServersIdActionsResetRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsResetRequest, _super);
    function PostServersIdActionsResetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsResetPathParams)
    ], PostServersIdActionsResetRequest.prototype, "pathParams", void 0);
    return PostServersIdActionsResetRequest;
}(SpeakeasyBase));
export { PostServersIdActionsResetRequest };
var PostServersIdActionsResetResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsResetResponse, _super);
    function PostServersIdActionsResetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsResetActionResponse)
    ], PostServersIdActionsResetResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsResetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsResetResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsResetResponse;
}(SpeakeasyBase));
export { PostServersIdActionsResetResponse };
