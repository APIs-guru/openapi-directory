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
export var DropInfoCauseEnum;
(function (DropInfoCauseEnum) {
    DropInfoCauseEnum["CauseUnspecified"] = "CAUSE_UNSPECIFIED";
    DropInfoCauseEnum["UnknownExternalAddress"] = "UNKNOWN_EXTERNAL_ADDRESS";
    DropInfoCauseEnum["ForeignIpDisallowed"] = "FOREIGN_IP_DISALLOWED";
    DropInfoCauseEnum["FirewallRule"] = "FIREWALL_RULE";
    DropInfoCauseEnum["NoRoute"] = "NO_ROUTE";
    DropInfoCauseEnum["RouteBlackhole"] = "ROUTE_BLACKHOLE";
    DropInfoCauseEnum["RouteWrongNetwork"] = "ROUTE_WRONG_NETWORK";
    DropInfoCauseEnum["PrivateTrafficToInternet"] = "PRIVATE_TRAFFIC_TO_INTERNET";
    DropInfoCauseEnum["PrivateGoogleAccessDisallowed"] = "PRIVATE_GOOGLE_ACCESS_DISALLOWED";
    DropInfoCauseEnum["NoExternalAddress"] = "NO_EXTERNAL_ADDRESS";
    DropInfoCauseEnum["UnknownInternalAddress"] = "UNKNOWN_INTERNAL_ADDRESS";
    DropInfoCauseEnum["ForwardingRuleMismatch"] = "FORWARDING_RULE_MISMATCH";
    DropInfoCauseEnum["ForwardingRuleRegionMismatch"] = "FORWARDING_RULE_REGION_MISMATCH";
    DropInfoCauseEnum["ForwardingRuleNoInstances"] = "FORWARDING_RULE_NO_INSTANCES";
    DropInfoCauseEnum["FirewallBlockingLoadBalancerBackendHealthCheck"] = "FIREWALL_BLOCKING_LOAD_BALANCER_BACKEND_HEALTH_CHECK";
    DropInfoCauseEnum["InstanceNotRunning"] = "INSTANCE_NOT_RUNNING";
    DropInfoCauseEnum["GkeClusterNotRunning"] = "GKE_CLUSTER_NOT_RUNNING";
    DropInfoCauseEnum["CloudSqlInstanceNotRunning"] = "CLOUD_SQL_INSTANCE_NOT_RUNNING";
    DropInfoCauseEnum["TrafficTypeBlocked"] = "TRAFFIC_TYPE_BLOCKED";
    DropInfoCauseEnum["GkeMasterUnauthorizedAccess"] = "GKE_MASTER_UNAUTHORIZED_ACCESS";
    DropInfoCauseEnum["CloudSqlInstanceUnauthorizedAccess"] = "CLOUD_SQL_INSTANCE_UNAUTHORIZED_ACCESS";
    DropInfoCauseEnum["DroppedInsideGkeService"] = "DROPPED_INSIDE_GKE_SERVICE";
    DropInfoCauseEnum["DroppedInsideCloudSqlService"] = "DROPPED_INSIDE_CLOUD_SQL_SERVICE";
    DropInfoCauseEnum["GoogleManagedServiceNoPeering"] = "GOOGLE_MANAGED_SERVICE_NO_PEERING";
    DropInfoCauseEnum["GkePscEndpointMissing"] = "GKE_PSC_ENDPOINT_MISSING";
    DropInfoCauseEnum["CloudSqlInstanceNoIpAddress"] = "CLOUD_SQL_INSTANCE_NO_IP_ADDRESS";
    DropInfoCauseEnum["GkeControlPlaneRegionMismatch"] = "GKE_CONTROL_PLANE_REGION_MISMATCH";
    DropInfoCauseEnum["PublicGkeControlPlaneToPrivateDestination"] = "PUBLIC_GKE_CONTROL_PLANE_TO_PRIVATE_DESTINATION";
    DropInfoCauseEnum["GkeControlPlaneNoRoute"] = "GKE_CONTROL_PLANE_NO_ROUTE";
    DropInfoCauseEnum["CloudSqlInstanceNotConfiguredForExternalTraffic"] = "CLOUD_SQL_INSTANCE_NOT_CONFIGURED_FOR_EXTERNAL_TRAFFIC";
    DropInfoCauseEnum["PublicCloudSqlInstanceToPrivateDestination"] = "PUBLIC_CLOUD_SQL_INSTANCE_TO_PRIVATE_DESTINATION";
    DropInfoCauseEnum["CloudSqlInstanceNoRoute"] = "CLOUD_SQL_INSTANCE_NO_ROUTE";
    DropInfoCauseEnum["CloudFunctionNotActive"] = "CLOUD_FUNCTION_NOT_ACTIVE";
    DropInfoCauseEnum["VpcConnectorNotSet"] = "VPC_CONNECTOR_NOT_SET";
    DropInfoCauseEnum["VpcConnectorNotRunning"] = "VPC_CONNECTOR_NOT_RUNNING";
    DropInfoCauseEnum["PscConnectionNotAccepted"] = "PSC_CONNECTION_NOT_ACCEPTED";
    DropInfoCauseEnum["CloudRunRevisionNotReady"] = "CLOUD_RUN_REVISION_NOT_READY";
})(DropInfoCauseEnum || (DropInfoCauseEnum = {}));
// DropInfo
/**
 * Details of the final state "drop" and associated resource.
**/
var DropInfo = /** @class */ (function (_super) {
    __extends(DropInfo, _super);
    function DropInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cause" }),
        __metadata("design:type", String)
    ], DropInfo.prototype, "cause", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceUri" }),
        __metadata("design:type", String)
    ], DropInfo.prototype, "resourceUri", void 0);
    return DropInfo;
}(SpeakeasyBase));
export { DropInfo };
