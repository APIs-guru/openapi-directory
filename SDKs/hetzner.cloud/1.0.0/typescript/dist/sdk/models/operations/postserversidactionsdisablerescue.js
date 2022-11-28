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
var PostServersIdActionsDisableRescuePathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDisableRescuePathParams, _super);
    function PostServersIdActionsDisableRescuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDisableRescuePathParams.prototype, "id", void 0);
    return PostServersIdActionsDisableRescuePathParams;
}(SpeakeasyBase));
export { PostServersIdActionsDisableRescuePathParams };
// PostServersIdActionsDisableRescueActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsDisableRescueActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDisableRescueActionResponseActionError, _super);
    function PostServersIdActionsDisableRescueActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableRescueActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableRescueActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsDisableRescueActionResponseActionError;
}(SpeakeasyBase));
export { PostServersIdActionsDisableRescueActionResponseActionError };
var PostServersIdActionsDisableRescueActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDisableRescueActionResponseActionResources, _super);
    function PostServersIdActionsDisableRescueActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDisableRescueActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableRescueActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsDisableRescueActionResponseActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsDisableRescueActionResponseActionResources };
export var PostServersIdActionsDisableRescueActionResponseActionStatusEnum;
(function (PostServersIdActionsDisableRescueActionResponseActionStatusEnum) {
    PostServersIdActionsDisableRescueActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsDisableRescueActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsDisableRescueActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsDisableRescueActionResponseActionStatusEnum || (PostServersIdActionsDisableRescueActionResponseActionStatusEnum = {}));
var PostServersIdActionsDisableRescueActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDisableRescueActionResponseAction, _super);
    function PostServersIdActionsDisableRescueActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableRescueActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsDisableRescueActionResponseActionError)
    ], PostServersIdActionsDisableRescueActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableRescueActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDisableRescueActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsDisableRescueActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsDisableRescueActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsDisableRescueActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableRescueActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableRescueActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsDisableRescueActionResponseAction;
}(SpeakeasyBase));
export { PostServersIdActionsDisableRescueActionResponseAction };
var PostServersIdActionsDisableRescueActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDisableRescueActionResponse, _super);
    function PostServersIdActionsDisableRescueActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsDisableRescueActionResponseAction)
    ], PostServersIdActionsDisableRescueActionResponse.prototype, "action", void 0);
    return PostServersIdActionsDisableRescueActionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsDisableRescueActionResponse };
var PostServersIdActionsDisableRescueRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDisableRescueRequest, _super);
    function PostServersIdActionsDisableRescueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsDisableRescuePathParams)
    ], PostServersIdActionsDisableRescueRequest.prototype, "pathParams", void 0);
    return PostServersIdActionsDisableRescueRequest;
}(SpeakeasyBase));
export { PostServersIdActionsDisableRescueRequest };
var PostServersIdActionsDisableRescueResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsDisableRescueResponse, _super);
    function PostServersIdActionsDisableRescueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsDisableRescueActionResponse)
    ], PostServersIdActionsDisableRescueResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsDisableRescueResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsDisableRescueResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsDisableRescueResponse;
}(SpeakeasyBase));
export { PostServersIdActionsDisableRescueResponse };
