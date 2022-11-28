import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ForwardInfoTargetEnum {
    TargetUnspecified = "TARGET_UNSPECIFIED",
    PeeringVpc = "PEERING_VPC",
    VpnGateway = "VPN_GATEWAY",
    Interconnect = "INTERCONNECT",
    GkeMaster = "GKE_MASTER",
    ImportedCustomRouteNextHop = "IMPORTED_CUSTOM_ROUTE_NEXT_HOP",
    CloudSqlInstance = "CLOUD_SQL_INSTANCE",
    AnotherProject = "ANOTHER_PROJECT"
}
/**
 * Details of the final state "forward" and associated resource.
**/
export declare class ForwardInfo extends SpeakeasyBase {
    resourceUri?: string;
    target?: ForwardInfoTargetEnum;
}
