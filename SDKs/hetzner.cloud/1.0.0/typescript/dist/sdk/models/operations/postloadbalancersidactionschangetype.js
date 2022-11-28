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
var PostLoadBalancersIdActionsChangeTypePathParams = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeTypePathParams, _super);
    function PostLoadBalancersIdActionsChangeTypePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeTypePathParams.prototype, "id", void 0);
    return PostLoadBalancersIdActionsChangeTypePathParams;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeTypePathParams };
var PostLoadBalancersIdActionsChangeTypeChangeTypeRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeTypeChangeTypeRequest, _super);
    function PostLoadBalancersIdActionsChangeTypeChangeTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancer_type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeTypeChangeTypeRequest.prototype, "loadBalancerType", void 0);
    return PostLoadBalancersIdActionsChangeTypeChangeTypeRequest;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeTypeChangeTypeRequest };
// PostLoadBalancersIdActionsChangeTypeActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostLoadBalancersIdActionsChangeTypeActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeTypeActionResponseActionError, _super);
    function PostLoadBalancersIdActionsChangeTypeActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeTypeActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeTypeActionResponseActionError.prototype, "message", void 0);
    return PostLoadBalancersIdActionsChangeTypeActionResponseActionError;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeTypeActionResponseActionError };
var PostLoadBalancersIdActionsChangeTypeActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeTypeActionResponseActionResources, _super);
    function PostLoadBalancersIdActionsChangeTypeActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeTypeActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeTypeActionResponseActionResources.prototype, "type", void 0);
    return PostLoadBalancersIdActionsChangeTypeActionResponseActionResources;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeTypeActionResponseActionResources };
export var PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum;
(function (PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum) {
    PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum["Success"] = "success";
    PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum["Running"] = "running";
    PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum["Error"] = "error";
})(PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum || (PostLoadBalancersIdActionsChangeTypeActionResponseActionStatusEnum = {}));
var PostLoadBalancersIdActionsChangeTypeActionResponseAction = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeTypeActionResponseAction, _super);
    function PostLoadBalancersIdActionsChangeTypeActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeTypeActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostLoadBalancersIdActionsChangeTypeActionResponseActionError)
    ], PostLoadBalancersIdActionsChangeTypeActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeTypeActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeTypeActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeTypeActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsChangeTypeActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsChangeTypeActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeTypeActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeTypeActionResponseAction.prototype, "status", void 0);
    return PostLoadBalancersIdActionsChangeTypeActionResponseAction;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeTypeActionResponseAction };
var PostLoadBalancersIdActionsChangeTypeActionResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeTypeActionResponse, _super);
    function PostLoadBalancersIdActionsChangeTypeActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostLoadBalancersIdActionsChangeTypeActionResponseAction)
    ], PostLoadBalancersIdActionsChangeTypeActionResponse.prototype, "action", void 0);
    return PostLoadBalancersIdActionsChangeTypeActionResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeTypeActionResponse };
var PostLoadBalancersIdActionsChangeTypeRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeTypeRequest, _super);
    function PostLoadBalancersIdActionsChangeTypeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsChangeTypePathParams)
    ], PostLoadBalancersIdActionsChangeTypeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLoadBalancersIdActionsChangeTypeChangeTypeRequest)
    ], PostLoadBalancersIdActionsChangeTypeRequest.prototype, "request", void 0);
    return PostLoadBalancersIdActionsChangeTypeRequest;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeTypeRequest };
var PostLoadBalancersIdActionsChangeTypeResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeTypeResponse, _super);
    function PostLoadBalancersIdActionsChangeTypeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsChangeTypeActionResponse)
    ], PostLoadBalancersIdActionsChangeTypeResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeTypeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeTypeResponse.prototype, "statusCode", void 0);
    return PostLoadBalancersIdActionsChangeTypeResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeTypeResponse };
