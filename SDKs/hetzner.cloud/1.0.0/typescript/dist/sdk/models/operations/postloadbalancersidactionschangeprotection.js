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
var PostLoadBalancersIdActionsChangeProtectionPathParams = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeProtectionPathParams, _super);
    function PostLoadBalancersIdActionsChangeProtectionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeProtectionPathParams.prototype, "id", void 0);
    return PostLoadBalancersIdActionsChangeProtectionPathParams;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeProtectionPathParams };
var PostLoadBalancersIdActionsChangeProtectionRequestBody = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeProtectionRequestBody, _super);
    function PostLoadBalancersIdActionsChangeProtectionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersIdActionsChangeProtectionRequestBody.prototype, "delete", void 0);
    return PostLoadBalancersIdActionsChangeProtectionRequestBody;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeProtectionRequestBody };
// PostLoadBalancersIdActionsChangeProtectionActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostLoadBalancersIdActionsChangeProtectionActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeProtectionActionResponseActionError, _super);
    function PostLoadBalancersIdActionsChangeProtectionActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeProtectionActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeProtectionActionResponseActionError.prototype, "message", void 0);
    return PostLoadBalancersIdActionsChangeProtectionActionResponseActionError;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeProtectionActionResponseActionError };
var PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources, _super);
    function PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources.prototype, "type", void 0);
    return PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources };
export var PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum;
(function (PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum) {
    PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum["Success"] = "success";
    PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum["Running"] = "running";
    PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum["Error"] = "error";
})(PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum || (PostLoadBalancersIdActionsChangeProtectionActionResponseActionStatusEnum = {}));
var PostLoadBalancersIdActionsChangeProtectionActionResponseAction = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeProtectionActionResponseAction, _super);
    function PostLoadBalancersIdActionsChangeProtectionActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeProtectionActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostLoadBalancersIdActionsChangeProtectionActionResponseActionError)
    ], PostLoadBalancersIdActionsChangeProtectionActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeProtectionActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeProtectionActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeProtectionActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsChangeProtectionActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsChangeProtectionActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeProtectionActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeProtectionActionResponseAction.prototype, "status", void 0);
    return PostLoadBalancersIdActionsChangeProtectionActionResponseAction;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeProtectionActionResponseAction };
var PostLoadBalancersIdActionsChangeProtectionActionResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeProtectionActionResponse, _super);
    function PostLoadBalancersIdActionsChangeProtectionActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostLoadBalancersIdActionsChangeProtectionActionResponseAction)
    ], PostLoadBalancersIdActionsChangeProtectionActionResponse.prototype, "action", void 0);
    return PostLoadBalancersIdActionsChangeProtectionActionResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeProtectionActionResponse };
var PostLoadBalancersIdActionsChangeProtectionRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeProtectionRequest, _super);
    function PostLoadBalancersIdActionsChangeProtectionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsChangeProtectionPathParams)
    ], PostLoadBalancersIdActionsChangeProtectionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLoadBalancersIdActionsChangeProtectionRequestBody)
    ], PostLoadBalancersIdActionsChangeProtectionRequest.prototype, "request", void 0);
    return PostLoadBalancersIdActionsChangeProtectionRequest;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeProtectionRequest };
var PostLoadBalancersIdActionsChangeProtectionResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeProtectionResponse, _super);
    function PostLoadBalancersIdActionsChangeProtectionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsChangeProtectionActionResponse)
    ], PostLoadBalancersIdActionsChangeProtectionResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeProtectionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeProtectionResponse.prototype, "statusCode", void 0);
    return PostLoadBalancersIdActionsChangeProtectionResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeProtectionResponse };
