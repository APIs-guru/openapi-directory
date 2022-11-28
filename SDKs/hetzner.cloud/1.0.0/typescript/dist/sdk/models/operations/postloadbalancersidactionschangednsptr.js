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
var PostLoadBalancersIdActionsChangeDnsPtrPathParams = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeDnsPtrPathParams, _super);
    function PostLoadBalancersIdActionsChangeDnsPtrPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeDnsPtrPathParams.prototype, "id", void 0);
    return PostLoadBalancersIdActionsChangeDnsPtrPathParams;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeDnsPtrPathParams };
var PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest, _super);
    function PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest.prototype, "ip", void 0);
    return PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest };
// PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError, _super);
    function PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError.prototype, "message", void 0);
    return PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError };
var PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources, _super);
    function PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources.prototype, "type", void 0);
    return PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources };
export var PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum;
(function (PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum) {
    PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum["Success"] = "success";
    PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum["Running"] = "running";
    PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum["Error"] = "error";
})(PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum || (PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionStatusEnum = {}));
var PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction, _super);
    function PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionError)
    ], PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsChangeDnsPtrActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction.prototype, "status", void 0);
    return PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction };
var PostLoadBalancersIdActionsChangeDnsPtrActionResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeDnsPtrActionResponse, _super);
    function PostLoadBalancersIdActionsChangeDnsPtrActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostLoadBalancersIdActionsChangeDnsPtrActionResponseAction)
    ], PostLoadBalancersIdActionsChangeDnsPtrActionResponse.prototype, "action", void 0);
    return PostLoadBalancersIdActionsChangeDnsPtrActionResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeDnsPtrActionResponse };
var PostLoadBalancersIdActionsChangeDnsPtrRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeDnsPtrRequest, _super);
    function PostLoadBalancersIdActionsChangeDnsPtrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsChangeDnsPtrPathParams)
    ], PostLoadBalancersIdActionsChangeDnsPtrRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLoadBalancersIdActionsChangeDnsPtrChangeLoadbalancerDnsPtrRequest)
    ], PostLoadBalancersIdActionsChangeDnsPtrRequest.prototype, "request", void 0);
    return PostLoadBalancersIdActionsChangeDnsPtrRequest;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeDnsPtrRequest };
var PostLoadBalancersIdActionsChangeDnsPtrResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsChangeDnsPtrResponse, _super);
    function PostLoadBalancersIdActionsChangeDnsPtrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsChangeDnsPtrActionResponse)
    ], PostLoadBalancersIdActionsChangeDnsPtrResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsChangeDnsPtrResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsChangeDnsPtrResponse.prototype, "statusCode", void 0);
    return PostLoadBalancersIdActionsChangeDnsPtrResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsChangeDnsPtrResponse };
