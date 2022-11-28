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
var PostLoadBalancersIdActionsAttachToNetworkPathParams = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAttachToNetworkPathParams, _super);
    function PostLoadBalancersIdActionsAttachToNetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAttachToNetworkPathParams.prototype, "id", void 0);
    return PostLoadBalancersIdActionsAttachToNetworkPathParams;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAttachToNetworkPathParams };
var PostLoadBalancersIdActionsAttachToNetworkRequestBody = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAttachToNetworkRequestBody, _super);
    function PostLoadBalancersIdActionsAttachToNetworkRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAttachToNetworkRequestBody.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAttachToNetworkRequestBody.prototype, "network", void 0);
    return PostLoadBalancersIdActionsAttachToNetworkRequestBody;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAttachToNetworkRequestBody };
// PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError, _super);
    function PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError.prototype, "message", void 0);
    return PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError };
var PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources, _super);
    function PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources.prototype, "type", void 0);
    return PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources };
export var PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum;
(function (PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum) {
    PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum["Success"] = "success";
    PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum["Running"] = "running";
    PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum["Error"] = "error";
})(PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum || (PostLoadBalancersIdActionsAttachToNetworkActionResponseActionStatusEnum = {}));
var PostLoadBalancersIdActionsAttachToNetworkActionResponseAction = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAttachToNetworkActionResponseAction, _super);
    function PostLoadBalancersIdActionsAttachToNetworkActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAttachToNetworkActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostLoadBalancersIdActionsAttachToNetworkActionResponseActionError)
    ], PostLoadBalancersIdActionsAttachToNetworkActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAttachToNetworkActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAttachToNetworkActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAttachToNetworkActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsAttachToNetworkActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsAttachToNetworkActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAttachToNetworkActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAttachToNetworkActionResponseAction.prototype, "status", void 0);
    return PostLoadBalancersIdActionsAttachToNetworkActionResponseAction;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAttachToNetworkActionResponseAction };
var PostLoadBalancersIdActionsAttachToNetworkActionResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAttachToNetworkActionResponse, _super);
    function PostLoadBalancersIdActionsAttachToNetworkActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostLoadBalancersIdActionsAttachToNetworkActionResponseAction)
    ], PostLoadBalancersIdActionsAttachToNetworkActionResponse.prototype, "action", void 0);
    return PostLoadBalancersIdActionsAttachToNetworkActionResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAttachToNetworkActionResponse };
var PostLoadBalancersIdActionsAttachToNetworkRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAttachToNetworkRequest, _super);
    function PostLoadBalancersIdActionsAttachToNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsAttachToNetworkPathParams)
    ], PostLoadBalancersIdActionsAttachToNetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLoadBalancersIdActionsAttachToNetworkRequestBody)
    ], PostLoadBalancersIdActionsAttachToNetworkRequest.prototype, "request", void 0);
    return PostLoadBalancersIdActionsAttachToNetworkRequest;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAttachToNetworkRequest };
var PostLoadBalancersIdActionsAttachToNetworkResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAttachToNetworkResponse, _super);
    function PostLoadBalancersIdActionsAttachToNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsAttachToNetworkActionResponse)
    ], PostLoadBalancersIdActionsAttachToNetworkResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAttachToNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAttachToNetworkResponse.prototype, "statusCode", void 0);
    return PostLoadBalancersIdActionsAttachToNetworkResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAttachToNetworkResponse };
