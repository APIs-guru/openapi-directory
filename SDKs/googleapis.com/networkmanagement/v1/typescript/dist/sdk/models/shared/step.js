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
import { AbortInfo } from "./abortinfo";
import { CloudFunctionInfo } from "./cloudfunctioninfo";
import { CloudSqlInstanceInfo } from "./cloudsqlinstanceinfo";
import { DeliverInfo } from "./deliverinfo";
import { DropInfo } from "./dropinfo";
import { EndpointInfo } from "./endpointinfo";
import { FirewallInfo } from "./firewallinfo";
import { ForwardInfo } from "./forwardinfo";
import { ForwardingRuleInfo } from "./forwardingruleinfo";
import { GkeMasterInfo } from "./gkemasterinfo";
import { InstanceInfo } from "./instanceinfo";
import { LoadBalancerInfo } from "./loadbalancerinfo";
import { NetworkInfo } from "./networkinfo";
import { RouteInfo } from "./routeinfo";
import { VpcConnectorInfo } from "./vpcconnectorinfo";
import { VpnGatewayInfo } from "./vpngatewayinfo";
import { VpnTunnelInfo } from "./vpntunnelinfo";
export var StepStateEnum;
(function (StepStateEnum) {
    StepStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    StepStateEnum["StartFromInstance"] = "START_FROM_INSTANCE";
    StepStateEnum["StartFromInternet"] = "START_FROM_INTERNET";
    StepStateEnum["StartFromPrivateNetwork"] = "START_FROM_PRIVATE_NETWORK";
    StepStateEnum["StartFromGkeMaster"] = "START_FROM_GKE_MASTER";
    StepStateEnum["StartFromCloudSqlInstance"] = "START_FROM_CLOUD_SQL_INSTANCE";
    StepStateEnum["StartFromCloudFunction"] = "START_FROM_CLOUD_FUNCTION";
    StepStateEnum["ApplyIngressFirewallRule"] = "APPLY_INGRESS_FIREWALL_RULE";
    StepStateEnum["ApplyEgressFirewallRule"] = "APPLY_EGRESS_FIREWALL_RULE";
    StepStateEnum["ApplyRoute"] = "APPLY_ROUTE";
    StepStateEnum["ApplyForwardingRule"] = "APPLY_FORWARDING_RULE";
    StepStateEnum["SpoofingApproved"] = "SPOOFING_APPROVED";
    StepStateEnum["ArriveAtInstance"] = "ARRIVE_AT_INSTANCE";
    StepStateEnum["ArriveAtInternalLoadBalancer"] = "ARRIVE_AT_INTERNAL_LOAD_BALANCER";
    StepStateEnum["ArriveAtExternalLoadBalancer"] = "ARRIVE_AT_EXTERNAL_LOAD_BALANCER";
    StepStateEnum["ArriveAtVpnGateway"] = "ARRIVE_AT_VPN_GATEWAY";
    StepStateEnum["ArriveAtVpnTunnel"] = "ARRIVE_AT_VPN_TUNNEL";
    StepStateEnum["ArriveAtVpcConnector"] = "ARRIVE_AT_VPC_CONNECTOR";
    StepStateEnum["Nat"] = "NAT";
    StepStateEnum["ProxyConnection"] = "PROXY_CONNECTION";
    StepStateEnum["Deliver"] = "DELIVER";
    StepStateEnum["Drop"] = "DROP";
    StepStateEnum["Forward"] = "FORWARD";
    StepStateEnum["Abort"] = "ABORT";
    StepStateEnum["ViewerPermissionMissing"] = "VIEWER_PERMISSION_MISSING";
})(StepStateEnum || (StepStateEnum = {}));
// Step
/**
 * A simulated forwarding path is composed of multiple steps. Each step has a well-defined state and an associated configuration.
**/
var Step = /** @class */ (function (_super) {
    __extends(Step, _super);
    function Step() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=abort" }),
        __metadata("design:type", AbortInfo)
    ], Step.prototype, "abort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=causesDrop" }),
        __metadata("design:type", Boolean)
    ], Step.prototype, "causesDrop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudFunction" }),
        __metadata("design:type", CloudFunctionInfo)
    ], Step.prototype, "cloudFunction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudSqlInstance" }),
        __metadata("design:type", CloudSqlInstanceInfo)
    ], Step.prototype, "cloudSqlInstance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deliver" }),
        __metadata("design:type", DeliverInfo)
    ], Step.prototype, "deliver", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Step.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=drop" }),
        __metadata("design:type", DropInfo)
    ], Step.prototype, "drop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoint" }),
        __metadata("design:type", EndpointInfo)
    ], Step.prototype, "endpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firewall" }),
        __metadata("design:type", FirewallInfo)
    ], Step.prototype, "firewall", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forward" }),
        __metadata("design:type", ForwardInfo)
    ], Step.prototype, "forward", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forwardingRule" }),
        __metadata("design:type", ForwardingRuleInfo)
    ], Step.prototype, "forwardingRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeMaster" }),
        __metadata("design:type", GkeMasterInfo)
    ], Step.prototype, "gkeMaster", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instance" }),
        __metadata("design:type", InstanceInfo)
    ], Step.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loadBalancer" }),
        __metadata("design:type", LoadBalancerInfo)
    ], Step.prototype, "loadBalancer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", NetworkInfo)
    ], Step.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], Step.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=route" }),
        __metadata("design:type", RouteInfo)
    ], Step.prototype, "route", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Step.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpcConnector" }),
        __metadata("design:type", VpcConnectorInfo)
    ], Step.prototype, "vpcConnector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpnGateway" }),
        __metadata("design:type", VpnGatewayInfo)
    ], Step.prototype, "vpnGateway", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vpnTunnel" }),
        __metadata("design:type", VpnTunnelInfo)
    ], Step.prototype, "vpnTunnel", void 0);
    return Step;
}(SpeakeasyBase));
export { Step };
