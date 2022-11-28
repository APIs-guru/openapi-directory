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
import { LoadBalancerBackend } from "./loadbalancerbackend";
export var LoadBalancerInfoBackendTypeEnum;
(function (LoadBalancerInfoBackendTypeEnum) {
    LoadBalancerInfoBackendTypeEnum["BackendTypeUnspecified"] = "BACKEND_TYPE_UNSPECIFIED";
    LoadBalancerInfoBackendTypeEnum["BackendService"] = "BACKEND_SERVICE";
    LoadBalancerInfoBackendTypeEnum["TargetPool"] = "TARGET_POOL";
    LoadBalancerInfoBackendTypeEnum["TargetInstance"] = "TARGET_INSTANCE";
})(LoadBalancerInfoBackendTypeEnum || (LoadBalancerInfoBackendTypeEnum = {}));
export var LoadBalancerInfoLoadBalancerTypeEnum;
(function (LoadBalancerInfoLoadBalancerTypeEnum) {
    LoadBalancerInfoLoadBalancerTypeEnum["LoadBalancerTypeUnspecified"] = "LOAD_BALANCER_TYPE_UNSPECIFIED";
    LoadBalancerInfoLoadBalancerTypeEnum["InternalTcpUdp"] = "INTERNAL_TCP_UDP";
    LoadBalancerInfoLoadBalancerTypeEnum["NetworkTcpUdp"] = "NETWORK_TCP_UDP";
    LoadBalancerInfoLoadBalancerTypeEnum["HttpProxy"] = "HTTP_PROXY";
    LoadBalancerInfoLoadBalancerTypeEnum["TcpProxy"] = "TCP_PROXY";
    LoadBalancerInfoLoadBalancerTypeEnum["SslProxy"] = "SSL_PROXY";
})(LoadBalancerInfoLoadBalancerTypeEnum || (LoadBalancerInfoLoadBalancerTypeEnum = {}));
// LoadBalancerInfo
/**
 * For display only. Metadata associated with a load balancer.
**/
var LoadBalancerInfo = /** @class */ (function (_super) {
    __extends(LoadBalancerInfo, _super);
    function LoadBalancerInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backendType" }),
        __metadata("design:type", String)
    ], LoadBalancerInfo.prototype, "backendType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backendUri" }),
        __metadata("design:type", String)
    ], LoadBalancerInfo.prototype, "backendUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backends", elemType: LoadBalancerBackend }),
        __metadata("design:type", Array)
    ], LoadBalancerInfo.prototype, "backends", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthCheckUri" }),
        __metadata("design:type", String)
    ], LoadBalancerInfo.prototype, "healthCheckUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loadBalancerType" }),
        __metadata("design:type", String)
    ], LoadBalancerInfo.prototype, "loadBalancerType", void 0);
    return LoadBalancerInfo;
}(SpeakeasyBase));
export { LoadBalancerInfo };
