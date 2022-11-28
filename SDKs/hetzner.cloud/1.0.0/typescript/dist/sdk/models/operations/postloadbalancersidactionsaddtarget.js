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
var PostLoadBalancersIdActionsAddTargetPathParams = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddTargetPathParams, _super);
    function PostLoadBalancersIdActionsAddTargetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddTargetPathParams.prototype, "id", void 0);
    return PostLoadBalancersIdActionsAddTargetPathParams;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAddTargetPathParams };
// PostLoadBalancersIdActionsAddTargetAddTargetRequestIp
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
var PostLoadBalancersIdActionsAddTargetAddTargetRequestIp = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddTargetAddTargetRequestIp, _super);
    function PostLoadBalancersIdActionsAddTargetAddTargetRequestIp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddTargetAddTargetRequestIp.prototype, "ip", void 0);
    return PostLoadBalancersIdActionsAddTargetAddTargetRequestIp;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAddTargetAddTargetRequestIp };
// PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector
/**
 * Configuration for label selector targets, required if type is `label_selector`
**/
var PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector, _super);
    function PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector.prototype, "selector", void 0);
    return PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector };
// PostLoadBalancersIdActionsAddTargetAddTargetRequestServer
/**
 * Configuration for type Server, required if type is `server`
**/
var PostLoadBalancersIdActionsAddTargetAddTargetRequestServer = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddTargetAddTargetRequestServer, _super);
    function PostLoadBalancersIdActionsAddTargetAddTargetRequestServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddTargetAddTargetRequestServer.prototype, "id", void 0);
    return PostLoadBalancersIdActionsAddTargetAddTargetRequestServer;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAddTargetAddTargetRequestServer };
export var PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum;
(function (PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum) {
    PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum["Server"] = "server";
    PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum["LabelSelector"] = "label_selector";
    PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum["Ip"] = "ip";
})(PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum || (PostLoadBalancersIdActionsAddTargetAddTargetRequestTypeEnum = {}));
var PostLoadBalancersIdActionsAddTargetAddTargetRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddTargetAddTargetRequest, _super);
    function PostLoadBalancersIdActionsAddTargetAddTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", PostLoadBalancersIdActionsAddTargetAddTargetRequestIp)
    ], PostLoadBalancersIdActionsAddTargetAddTargetRequest.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_selector" }),
        __metadata("design:type", PostLoadBalancersIdActionsAddTargetAddTargetRequestLabelSelector)
    ], PostLoadBalancersIdActionsAddTargetAddTargetRequest.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", PostLoadBalancersIdActionsAddTargetAddTargetRequestServer)
    ], PostLoadBalancersIdActionsAddTargetAddTargetRequest.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddTargetAddTargetRequest.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_private_ip" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersIdActionsAddTargetAddTargetRequest.prototype, "usePrivateIp", void 0);
    return PostLoadBalancersIdActionsAddTargetAddTargetRequest;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAddTargetAddTargetRequest };
// PostLoadBalancersIdActionsAddTargetActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostLoadBalancersIdActionsAddTargetActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddTargetActionResponseActionError, _super);
    function PostLoadBalancersIdActionsAddTargetActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddTargetActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddTargetActionResponseActionError.prototype, "message", void 0);
    return PostLoadBalancersIdActionsAddTargetActionResponseActionError;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAddTargetActionResponseActionError };
var PostLoadBalancersIdActionsAddTargetActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddTargetActionResponseActionResources, _super);
    function PostLoadBalancersIdActionsAddTargetActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddTargetActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddTargetActionResponseActionResources.prototype, "type", void 0);
    return PostLoadBalancersIdActionsAddTargetActionResponseActionResources;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAddTargetActionResponseActionResources };
export var PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum;
(function (PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum) {
    PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum["Success"] = "success";
    PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum["Running"] = "running";
    PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum["Error"] = "error";
})(PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum || (PostLoadBalancersIdActionsAddTargetActionResponseActionStatusEnum = {}));
var PostLoadBalancersIdActionsAddTargetActionResponseAction = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddTargetActionResponseAction, _super);
    function PostLoadBalancersIdActionsAddTargetActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddTargetActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostLoadBalancersIdActionsAddTargetActionResponseActionError)
    ], PostLoadBalancersIdActionsAddTargetActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddTargetActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddTargetActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddTargetActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancersIdActionsAddTargetActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostLoadBalancersIdActionsAddTargetActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddTargetActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddTargetActionResponseAction.prototype, "status", void 0);
    return PostLoadBalancersIdActionsAddTargetActionResponseAction;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAddTargetActionResponseAction };
var PostLoadBalancersIdActionsAddTargetActionResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddTargetActionResponse, _super);
    function PostLoadBalancersIdActionsAddTargetActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostLoadBalancersIdActionsAddTargetActionResponseAction)
    ], PostLoadBalancersIdActionsAddTargetActionResponse.prototype, "action", void 0);
    return PostLoadBalancersIdActionsAddTargetActionResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAddTargetActionResponse };
var PostLoadBalancersIdActionsAddTargetRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddTargetRequest, _super);
    function PostLoadBalancersIdActionsAddTargetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsAddTargetPathParams)
    ], PostLoadBalancersIdActionsAddTargetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLoadBalancersIdActionsAddTargetAddTargetRequest)
    ], PostLoadBalancersIdActionsAddTargetRequest.prototype, "request", void 0);
    return PostLoadBalancersIdActionsAddTargetRequest;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAddTargetRequest };
var PostLoadBalancersIdActionsAddTargetResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersIdActionsAddTargetResponse, _super);
    function PostLoadBalancersIdActionsAddTargetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancersIdActionsAddTargetActionResponse)
    ], PostLoadBalancersIdActionsAddTargetResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLoadBalancersIdActionsAddTargetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLoadBalancersIdActionsAddTargetResponse.prototype, "statusCode", void 0);
    return PostLoadBalancersIdActionsAddTargetResponse;
}(SpeakeasyBase));
export { PostLoadBalancersIdActionsAddTargetResponse };
