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
var PostLoadBalancersIdActionsDisablePublicInterfacePathParams = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDisablePublicInterfacePathParams, _super);
    function PostLoadBalancersIdActionsDisablePublicInterfacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDisablePublicInterfacePathParams.prototype, "id", void 0);
    return PostLoadBalancersIdActionsDisablePublicInterfacePathParams;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDisablePublicInterfacePathParams };
// PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError, _super);
    function PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError.prototype, "message", void 0);
    return PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError };
var PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources, _super);
    function PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources.prototype, "type", void 0);
    return PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources };
export var PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum;
(function (PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum) {
    PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum["Success"] = "success";
    PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum["Running"] = "running";
    PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum["Error"] = "error";
})(PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum || (PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionStatusEnum = {}));
var PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction, _super);
    function PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionError)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction.prototype, "status", void 0);
    return PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction };
var PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse, _super);
    function PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostLoadBalancersIdActionsDisablePublicInterfaceActionResponseAction)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse.prototype, "action", void 0);
    return PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse };
var PostLoadBalancersIdActionsDisablePublicInterfaceRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDisablePublicInterfaceRequest, _super);
    function PostLoadBalancersIdActionsDisablePublicInterfaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsDisablePublicInterfacePathParams)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceRequest.prototype, "pathParams", void 0);
    return PostLoadBalancersIdActionsDisablePublicInterfaceRequest;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDisablePublicInterfaceRequest };
var PostLoadBalancersIdActionsDisablePublicInterfaceResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsDisablePublicInterfaceResponse, _super);
    function PostLoadBalancersIdActionsDisablePublicInterfaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsDisablePublicInterfaceResponse.prototype, "statusCode", void 0);
    return PostLoadBalancersIdActionsDisablePublicInterfaceResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsDisablePublicInterfaceResponse };
