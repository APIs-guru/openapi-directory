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
var PostLoadBalancersIdActionsDetachFromNetworkPathParams = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDetachFromNetworkPathParams, _super);
    function PostLoadBalancersIdActionsDetachFromNetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDetachFromNetworkPathParams.prototype, "id", void 0);
    return PostLoadBalancersIdActionsDetachFromNetworkPathParams;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDetachFromNetworkPathParams };
var PostLoadBalancersIdActionsDetachFromNetworkRequestBody = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDetachFromNetworkRequestBody, _super);
    function PostLoadBalancersIdActionsDetachFromNetworkRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDetachFromNetworkRequestBody.prototype, "network", void 0);
    return PostLoadBalancersIdActionsDetachFromNetworkRequestBody;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDetachFromNetworkRequestBody };
// PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError, _super);
    function PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError.prototype, "message", void 0);
    return PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError };
var PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources, _super);
    function PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources.prototype, "type", void 0);
    return PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources };
export var PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum;
(function (PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum) {
    PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum["Success"] = "success";
    PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum["Running"] = "running";
    PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum["Error"] = "error";
})(PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum || (PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionStatusEnum = {}));
var PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction, _super);
    function PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionError)
    ], PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsDetachFromNetworkActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction.prototype, "status", void 0);
    return PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction };
var PostLoadBalancersIdActionsDetachFromNetworkActionResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDetachFromNetworkActionResponse, _super);
    function PostLoadBalancersIdActionsDetachFromNetworkActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostLoadBalancersIdActionsDetachFromNetworkActionResponseAction)
    ], PostLoadBalancersIdActionsDetachFromNetworkActionResponse.prototype, "action", void 0);
    return PostLoadBalancersIdActionsDetachFromNetworkActionResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDetachFromNetworkActionResponse };
var PostLoadBalancersIdActionsDetachFromNetworkRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDetachFromNetworkRequest, _super);
    function PostLoadBalancersIdActionsDetachFromNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsDetachFromNetworkPathParams)
    ], PostLoadBalancersIdActionsDetachFromNetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLoadBalancersIdActionsDetachFromNetworkRequestBody)
    ], PostLoadBalancersIdActionsDetachFromNetworkRequest.prototype, "request", void 0);
    return PostLoadBalancersIdActionsDetachFromNetworkRequest;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDetachFromNetworkRequest };
var PostLoadBalancersIdActionsDetachFromNetworkResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDetachFromNetworkResponse, _super);
    function PostLoadBalancersIdActionsDetachFromNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsDetachFromNetworkActionResponse)
    ], PostLoadBalancersIdActionsDetachFromNetworkResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDetachFromNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDetachFromNetworkResponse.prototype, "statusCode", void 0);
    return PostLoadBalancersIdActionsDetachFromNetworkResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDetachFromNetworkResponse };
