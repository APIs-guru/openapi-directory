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
var PostLoadBalancersIdActionsRemoveTargetPathParams = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsRemoveTargetPathParams, _super);
    function PostLoadBalancersIdActionsRemoveTargetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsRemoveTargetPathParams.prototype, "id", void 0);
    return PostLoadBalancersIdActionsRemoveTargetPathParams;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsRemoveTargetPathParams };
// PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
var PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp, _super);
    function PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp.prototype, "ip", void 0);
    return PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp };
// PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector
/**
 * Configuration for label selector targets, required if type is `label_selector`
**/
var PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector, _super);
    function PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector.prototype, "selector", void 0);
    return PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector };
// PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer
/**
 * Configuration for type Server, required if type is `server`
**/
var PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer, _super);
    function PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer.prototype, "id", void 0);
    return PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer };
export var PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum;
(function (PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum) {
    PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum["Server"] = "server";
    PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum["LabelSelector"] = "label_selector";
    PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum["Ip"] = "ip";
})(PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum || (PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestTypeEnum = {}));
var PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest, _super);
    function PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestIp)
    ], PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_selector" }),
        __metadata("design:type", PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestLabelSelector)
    ], PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequestServer)
    ], PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest.prototype, "type", void 0);
    return PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest };
// PostLoadBalancersIdActionsRemoveTargetActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostLoadBalancersIdActionsRemoveTargetActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsRemoveTargetActionResponseActionError, _super);
    function PostLoadBalancersIdActionsRemoveTargetActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsRemoveTargetActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsRemoveTargetActionResponseActionError.prototype, "message", void 0);
    return PostLoadBalancersIdActionsRemoveTargetActionResponseActionError;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsRemoveTargetActionResponseActionError };
var PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources, _super);
    function PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources.prototype, "type", void 0);
    return PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources };
export var PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum;
(function (PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum) {
    PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum["Success"] = "success";
    PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum["Running"] = "running";
    PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum["Error"] = "error";
})(PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum || (PostLoadBalancersIdActionsRemoveTargetActionResponseActionStatusEnum = {}));
var PostLoadBalancersIdActionsRemoveTargetActionResponseAction = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsRemoveTargetActionResponseAction, _super);
    function PostLoadBalancersIdActionsRemoveTargetActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsRemoveTargetActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostLoadBalancersIdActionsRemoveTargetActionResponseActionError)
    ], PostLoadBalancersIdActionsRemoveTargetActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsRemoveTargetActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsRemoveTargetActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsRemoveTargetActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsRemoveTargetActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsRemoveTargetActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsRemoveTargetActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsRemoveTargetActionResponseAction.prototype, "status", void 0);
    return PostLoadBalancersIdActionsRemoveTargetActionResponseAction;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsRemoveTargetActionResponseAction };
var PostLoadBalancersIdActionsRemoveTargetActionResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsRemoveTargetActionResponse, _super);
    function PostLoadBalancersIdActionsRemoveTargetActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostLoadBalancersIdActionsRemoveTargetActionResponseAction)
    ], PostLoadBalancersIdActionsRemoveTargetActionResponse.prototype, "action", void 0);
    return PostLoadBalancersIdActionsRemoveTargetActionResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsRemoveTargetActionResponse };
var PostLoadBalancersIdActionsRemoveTargetRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsRemoveTargetRequest, _super);
    function PostLoadBalancersIdActionsRemoveTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsRemoveTargetPathParams)
    ], PostLoadBalancersIdActionsRemoveTargetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLoadBalancersIdActionsRemoveTargetRemoveTargetRequest)
    ], PostLoadBalancersIdActionsRemoveTargetRequest.prototype, "request", void 0);
    return PostLoadBalancersIdActionsRemoveTargetRequest;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsRemoveTargetRequest };
var PostLoadBalancersIdActionsRemoveTargetResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsRemoveTargetResponse, _super);
    function PostLoadBalancersIdActionsRemoveTargetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsRemoveTargetActionResponse)
    ], PostLoadBalancersIdActionsRemoveTargetResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsRemoveTargetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsRemoveTargetResponse.prototype, "statusCode", void 0);
    return PostLoadBalancersIdActionsRemoveTargetResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsRemoveTargetResponse };
