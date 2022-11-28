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
var PostLoadBalancersIdActionsEnablePublicInterfacePathParams = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsEnablePublicInterfacePathParams, _super);
    function PostLoadBalancersIdActionsEnablePublicInterfacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsEnablePublicInterfacePathParams.prototype, "id", void 0);
    return PostLoadBalancersIdActionsEnablePublicInterfacePathParams;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsEnablePublicInterfacePathParams };
// PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError, _super);
    function PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError.prototype, "message", void 0);
    return PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError };
var PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources, _super);
    function PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources.prototype, "type", void 0);
    return PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources };
export var PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum;
(function (PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum) {
    PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum["Success"] = "success";
    PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum["Running"] = "running";
    PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum["Error"] = "error";
})(PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum || (PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionStatusEnum = {}));
var PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction, _super);
    function PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionError)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction.prototype, "status", void 0);
    return PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction };
var PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse, _super);
    function PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostLoadBalancersIdActionsEnablePublicInterfaceActionResponseAction)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse.prototype, "action", void 0);
    return PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse };
var PostLoadBalancersIdActionsEnablePublicInterfaceRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsEnablePublicInterfaceRequest, _super);
    function PostLoadBalancersIdActionsEnablePublicInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsEnablePublicInterfacePathParams)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceRequest.prototype, "pathParams", void 0);
    return PostLoadBalancersIdActionsEnablePublicInterfaceRequest;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsEnablePublicInterfaceRequest };
var PostLoadBalancersIdActionsEnablePublicInterfaceResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsEnablePublicInterfaceResponse, _super);
    function PostLoadBalancersIdActionsEnablePublicInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsEnablePublicInterfaceResponse.prototype, "statusCode", void 0);
    return PostLoadBalancersIdActionsEnablePublicInterfaceResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsEnablePublicInterfaceResponse };
