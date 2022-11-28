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
var PostFloatingIpsIdActionsChangeProtectionPathParams = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeProtectionPathParams, _super);
    function PostFloatingIpsIdActionsChangeProtectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsChangeProtectionPathParams.prototype, "id", void 0);
    return PostFloatingIpsIdActionsChangeProtectionPathParams;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeProtectionPathParams };
var PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest, _super);
    function PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest.prototype, "delete", void 0);
    return PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest };
// PostFloatingIpsIdActionsChangeProtectionActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostFloatingIpsIdActionsChangeProtectionActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeProtectionActionResponseActionError, _super);
    function PostFloatingIpsIdActionsChangeProtectionActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeProtectionActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeProtectionActionResponseActionError.prototype, "message", void 0);
    return PostFloatingIpsIdActionsChangeProtectionActionResponseActionError;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeProtectionActionResponseActionError };
var PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources, _super);
    function PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources.prototype, "type", void 0);
    return PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources };
export var PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum;
(function (PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum) {
    PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum["Success"] = "success";
    PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum["Running"] = "running";
    PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum["Error"] = "error";
})(PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum || (PostFloatingIpsIdActionsChangeProtectionActionResponseActionStatusEnum = {}));
var PostFloatingIpsIdActionsChangeProtectionActionResponseAction = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeProtectionActionResponseAction, _super);
    function PostFloatingIpsIdActionsChangeProtectionActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeProtectionActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostFloatingIpsIdActionsChangeProtectionActionResponseActionError)
    ], PostFloatingIpsIdActionsChangeProtectionActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeProtectionActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsChangeProtectionActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsChangeProtectionActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFloatingIpsIdActionsChangeProtectionActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostFloatingIpsIdActionsChangeProtectionActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeProtectionActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeProtectionActionResponseAction.prototype, "status", void 0);
    return PostFloatingIpsIdActionsChangeProtectionActionResponseAction;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeProtectionActionResponseAction };
var PostFloatingIpsIdActionsChangeProtectionActionResponse = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeProtectionActionResponse, _super);
    function PostFloatingIpsIdActionsChangeProtectionActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostFloatingIpsIdActionsChangeProtectionActionResponseAction)
    ], PostFloatingIpsIdActionsChangeProtectionActionResponse.prototype, "action", void 0);
    return PostFloatingIpsIdActionsChangeProtectionActionResponse;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeProtectionActionResponse };
var PostFloatingIpsIdActionsChangeProtectionRequest = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeProtectionRequest, _super);
    function PostFloatingIpsIdActionsChangeProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFloatingIpsIdActionsChangeProtectionPathParams)
    ], PostFloatingIpsIdActionsChangeProtectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostFloatingIpsIdActionsChangeProtectionChangeProtectionRequest)
    ], PostFloatingIpsIdActionsChangeProtectionRequest.prototype, "request", void 0);
    return PostFloatingIpsIdActionsChangeProtectionRequest;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeProtectionRequest };
var PostFloatingIpsIdActionsChangeProtectionResponse = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeProtectionResponse, _super);
    function PostFloatingIpsIdActionsChangeProtectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFloatingIpsIdActionsChangeProtectionActionResponse)
    ], PostFloatingIpsIdActionsChangeProtectionResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeProtectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsChangeProtectionResponse.prototype, "statusCode", void 0);
    return PostFloatingIpsIdActionsChangeProtectionResponse;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeProtectionResponse };
