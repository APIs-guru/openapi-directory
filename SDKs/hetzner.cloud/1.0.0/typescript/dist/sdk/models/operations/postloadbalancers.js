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
export var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum;
(function (PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum) {
    PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum["RoundRobin"] = "round_robin";
    PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum["LeastConnections"] = "least_connections";
})(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum || (PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithmTypeEnum = {}));
// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm
/**
 * Algorithm of the Load Balancer
**/
var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm, _super);
    function PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm.prototype, "type", void 0);
    return PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm };
// PostLoadBalancersCreateLoadBalancerRequestLabels
/**
 * User-defined labels (key-value pairs)
**/
var PostLoadBalancersCreateLoadBalancerRequestLabels = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequestLabels, _super);
    function PostLoadBalancersCreateLoadBalancerRequestLabels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labelkey" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequestLabels.prototype, "labelkey", void 0);
    return PostLoadBalancersCreateLoadBalancerRequestLabels;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequestLabels };
// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/**
 * Additional configuration for protocol http
**/
var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp, _super);
    function PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_codes" }),
        __metadata("design:type", Array)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "statusCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tls" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "tls", void 0);
    return PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp };
export var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
(function (PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum) {
    PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum["Tcp"] = "tcp";
    PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum["Http"] = "http";
})(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum || (PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = {}));
// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck
/**
 * Service health check
**/
var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck, _super);
    function PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http" }),
        __metadata("design:type", PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheckHttp)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "http", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interval" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retries" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "retries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "timeout", void 0);
    return PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck };
// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp
/**
 * Configuration option for protocols http and https
**/
var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp, _super);
    function PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificates" }),
        __metadata("design:type", Array)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp.prototype, "certificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookie_lifetime" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp.prototype, "cookieLifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookie_name" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp.prototype, "cookieName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_http" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp.prototype, "redirectHttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticky_sessions" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp.prototype, "stickySessions", void 0);
    return PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp };
export var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum;
(function (PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum) {
    PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum["Tcp"] = "tcp";
    PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum["Http"] = "http";
    PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum["Https"] = "https";
})(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum || (PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceProtocolEnum = {}));
var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService, _super);
    function PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService.prototype, "destinationPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_check" }),
        __metadata("design:type", PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceLoadBalancerServiceHealthCheck)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService.prototype, "healthCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http" }),
        __metadata("design:type", PostLoadBalancersCreateLoadBalancerRequestLoadBalancerServiceHttp)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService.prototype, "http", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyprotocol" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService.prototype, "proxyprotocol", void 0);
    return PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService };
var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus, _super);
    function PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus.prototype, "status", void 0);
    return PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus };
// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp, _super);
    function PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp.prototype, "ip", void 0);
    return PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp };
// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector
/**
 * Label selector and a list of selected targets
**/
var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector, _super);
    function PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector.prototype, "selector", void 0);
    return PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector };
// PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer
/**
 * Server where the traffic should be routed through
**/
var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer, _super);
    function PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer.prototype, "id", void 0);
    return PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer };
var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus, _super);
    function PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus.prototype, "status", void 0);
    return PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus };
var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer, _super);
    function PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer.prototype, "id", void 0);
    return PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer };
var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets, _super);
    function PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_status", elemType: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsHealthStatus }),
        __metadata("design:type", Array)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets.prototype, "healthStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargetsServer)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_private_ip" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets.prototype, "usePrivateIp", void 0);
    return PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets };
export var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum;
(function (PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum) {
    PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum["Server"] = "server";
    PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum["LabelSelector"] = "label_selector";
    PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum["Ip"] = "ip";
})(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum || (PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTypeEnum = {}));
var PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget, _super);
    function PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_status", elemType: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetHealthStatus }),
        __metadata("design:type", Array)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget.prototype, "healthStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetIp)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_selector" }),
        __metadata("design:type", PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLabelSelector)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetLoadBalancerTargetServer)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets", elemType: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTargetTargets }),
        __metadata("design:type", Array)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_private_ip" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget.prototype, "usePrivateIp", void 0);
    return PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget };
var PostLoadBalancersCreateLoadBalancerRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersCreateLoadBalancerRequest, _super);
    function PostLoadBalancersCreateLoadBalancerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", PostLoadBalancersCreateLoadBalancerRequestLoadBalancerAlgorithm)
    ], PostLoadBalancersCreateLoadBalancerRequest.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", PostLoadBalancersCreateLoadBalancerRequestLabels)
    ], PostLoadBalancersCreateLoadBalancerRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancer_type" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequest.prototype, "loadBalancerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequest.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Number)
    ], PostLoadBalancersCreateLoadBalancerRequest.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], PostLoadBalancersCreateLoadBalancerRequest.prototype, "networkZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_interface" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancersCreateLoadBalancerRequest.prototype, "publicInterface", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services", elemType: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerService }),
        __metadata("design:type", Array)
    ], PostLoadBalancersCreateLoadBalancerRequest.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets", elemType: PostLoadBalancersCreateLoadBalancerRequestLoadBalancerTarget }),
        __metadata("design:type", Array)
    ], PostLoadBalancersCreateLoadBalancerRequest.prototype, "targets", void 0);
    return PostLoadBalancersCreateLoadBalancerRequest;
}(SpeakeasyBase));
export { PostLoadBalancersCreateLoadBalancerRequest };
// PostLoadBalancers201ApplicationJsonActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostLoadBalancers201ApplicationJsonActionError = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonActionError, _super);
    function PostLoadBalancers201ApplicationJsonActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonActionError.prototype, "message", void 0);
    return PostLoadBalancers201ApplicationJsonActionError;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonActionError };
var PostLoadBalancers201ApplicationJsonActionResources = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonActionResources, _super);
    function PostLoadBalancers201ApplicationJsonActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonActionResources.prototype, "type", void 0);
    return PostLoadBalancers201ApplicationJsonActionResources;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonActionResources };
export var PostLoadBalancers201ApplicationJsonActionStatusEnum;
(function (PostLoadBalancers201ApplicationJsonActionStatusEnum) {
    PostLoadBalancers201ApplicationJsonActionStatusEnum["Success"] = "success";
    PostLoadBalancers201ApplicationJsonActionStatusEnum["Running"] = "running";
    PostLoadBalancers201ApplicationJsonActionStatusEnum["Error"] = "error";
})(PostLoadBalancers201ApplicationJsonActionStatusEnum || (PostLoadBalancers201ApplicationJsonActionStatusEnum = {}));
var PostLoadBalancers201ApplicationJsonAction = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonAction, _super);
    function PostLoadBalancers201ApplicationJsonAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonActionError)
    ], PostLoadBalancers201ApplicationJsonAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostLoadBalancers201ApplicationJsonActionResources }),
        __metadata("design:type", Array)
    ], PostLoadBalancers201ApplicationJsonAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonAction.prototype, "status", void 0);
    return PostLoadBalancers201ApplicationJsonAction;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonAction };
export var PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithmTypeEnum;
(function (PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithmTypeEnum) {
    PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithmTypeEnum["RoundRobin"] = "round_robin";
    PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithmTypeEnum["LeastConnections"] = "least_connections";
})(PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithmTypeEnum || (PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithmTypeEnum = {}));
// PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm
/**
 * Algorithm of the Load Balancer
**/
var PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm.prototype, "type", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm };
// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly
/**
 * Hourly costs for a Resource in this Location
**/
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly.prototype, "net", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly };
// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly
/**
 * Monthly costs for a Resource in this Location
**/
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gross" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly.prototype, "gross", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=net" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly.prototype, "net", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly };
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_hourly" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceHourly)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices.prototype, "priceHourly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=price_monthly" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePricesPriceMonthly)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices.prototype, "priceMonthly", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices };
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprecated" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType.prototype, "deprecated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_assigned_certificates" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType.prototype, "maxAssignedCertificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_connections" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType.prototype, "maxConnections", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_services" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType.prototype, "maxServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_targets" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType.prototype, "maxTargets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prices", elemType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTypePrices }),
        __metadata("design:type", Array)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType.prototype, "prices", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType };
var PostLoadBalancers201ApplicationJsonLoadBalancerLocation = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLocation, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLocation.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLocation.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLocation.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLocation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLocation.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLocation.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLocation.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_zone" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLocation.prototype, "networkZone", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLocation;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLocation };
var PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet.prototype, "network", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet };
// PostLoadBalancers201ApplicationJsonLoadBalancerProtection
/**
 * Protection configuration for the Resource
**/
var PostLoadBalancers201ApplicationJsonLoadBalancerProtection = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerProtection, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerProtection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delete" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerProtection.prototype, "delete", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerProtection;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerProtection };
// PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4
/**
 * IP address (v4)
**/
var PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4 = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4.prototype, "ip", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4 };
// PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6
/**
 * IP address (v6)
**/
var PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6 = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6.prototype, "ip", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6 };
// PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet
/**
 * Public network information
**/
var PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv4" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv4)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet.prototype, "ipv4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerPublicNetIpv6)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet.prototype, "ipv6", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet };
// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp
/**
 * Additional configuration for protocol http
**/
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=response" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "response", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status_codes" }),
        __metadata("design:type", Array)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "statusCodes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tls" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp.prototype, "tls", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp };
export var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum;
(function (PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum) {
    PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum["Tcp"] = "tcp";
    PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum["Http"] = "http";
})(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum || (PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckProtocolEnum = {}));
// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck
/**
 * Service health check
**/
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheckHttp)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "http", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interval" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "interval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retries" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "retries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck.prototype, "timeout", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck };
// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp
/**
 * Configuration option for protocols http and https
**/
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificates" }),
        __metadata("design:type", Array)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "certificates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookie_lifetime" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "cookieLifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cookie_name" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "cookieName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirect_http" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "redirectHttp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sticky_sessions" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp.prototype, "stickySessions", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp };
export var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum;
(function (PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum) {
    PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum["Tcp"] = "tcp";
    PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum["Http"] = "http";
    PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum["Https"] = "https";
})(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum || (PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceProtocolEnum = {}));
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destination_port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService.prototype, "destinationPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_check" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceLoadBalancerServiceHealthCheck)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService.prototype, "healthCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerServiceHttp)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService.prototype, "http", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxyprotocol" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService.prototype, "proxyprotocol", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService };
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus.prototype, "status", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus };
// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp
/**
 * IP targets where the traffic should be routed through. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well.
**/
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp.prototype, "ip", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp };
// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector
/**
 * Label selector and a list of selected targets
**/
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selector" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector.prototype, "selector", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector };
// PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer
/**
 * Server where the traffic should be routed through
**/
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer.prototype, "id", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer };
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listen_port" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus.prototype, "listenPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus.prototype, "status", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus };
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer.prototype, "id", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer };
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_status", elemType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsHealthStatus }),
        __metadata("design:type", Array)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets.prototype, "healthStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargetsServer)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_private_ip" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets.prototype, "usePrivateIp", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets };
export var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum;
(function (PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum) {
    PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum["Server"] = "server";
    PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum["LabelSelector"] = "label_selector";
    PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum["Ip"] = "ip";
})(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum || (PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTypeEnum = {}));
var PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=health_status", elemType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetHealthStatus }),
        __metadata("design:type", Array)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "healthStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetIp)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label_selector" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLabelSelector)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=server" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetLoadBalancerTargetServer)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "server", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets", elemType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTargetTargets }),
        __metadata("design:type", Array)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_private_ip" }),
        __metadata("design:type", Boolean)
    ], PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget.prototype, "usePrivateIp", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget };
var PostLoadBalancers201ApplicationJsonLoadBalancer = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJsonLoadBalancer, _super);
    function PostLoadBalancers201ApplicationJsonLoadBalancer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=algorithm" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerAlgorithm)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "algorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=included_traffic" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "includedTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ingoing_traffic" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "ingoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancer_type" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerType)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "loadBalancerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerLocation)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outgoing_traffic" }),
        __metadata("design:type", Number)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "outgoingTraffic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_net", elemType: PostLoadBalancers201ApplicationJsonLoadBalancerPrivateNet }),
        __metadata("design:type", Array)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "privateNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protection" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerProtection)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "protection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_net" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancerPublicNet)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "publicNet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services", elemType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerService }),
        __metadata("design:type", Array)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets", elemType: PostLoadBalancers201ApplicationJsonLoadBalancerLoadBalancerTarget }),
        __metadata("design:type", Array)
    ], PostLoadBalancers201ApplicationJsonLoadBalancer.prototype, "targets", void 0);
    return PostLoadBalancers201ApplicationJsonLoadBalancer;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJsonLoadBalancer };
var PostLoadBalancers201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostLoadBalancers201ApplicationJson, _super);
    function PostLoadBalancers201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonAction)
    ], PostLoadBalancers201ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=load_balancer" }),
        __metadata("design:type", PostLoadBalancers201ApplicationJsonLoadBalancer)
    ], PostLoadBalancers201ApplicationJson.prototype, "loadBalancer", void 0);
    return PostLoadBalancers201ApplicationJson;
}(SpeakeasyBase));
export { PostLoadBalancers201ApplicationJson };
var PostLoadBalancersRequest = /** @class */ (function (_super) {
    __extends(PostLoadBalancersRequest, _super);
    function PostLoadBalancersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostLoadBalancersCreateLoadBalancerRequest)
    ], PostLoadBalancersRequest.prototype, "request", void 0);
    return PostLoadBalancersRequest;
}(SpeakeasyBase));
export { PostLoadBalancersRequest };
var PostLoadBalancersResponse = /** @class */ (function (_super) {
    __extends(PostLoadBalancersResponse, _super);
    function PostLoadBalancersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLoadBalancersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLoadBalancers201ApplicationJson)
    ], PostLoadBalancersResponse.prototype, "postLoadBalancers201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLoadBalancersResponse.prototype, "statusCode", void 0);
    return PostLoadBalancersResponse;
}(SpeakeasyBase));
export { PostLoadBalancersResponse };
