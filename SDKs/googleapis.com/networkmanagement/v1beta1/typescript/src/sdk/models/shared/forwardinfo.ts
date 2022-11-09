import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ForwardInfoTargetEnum {
    TargetUnspecified = "TARGET_UNSPECIFIED"
,    PeeringVpc = "PEERING_VPC"
,    VpnGateway = "VPN_GATEWAY"
,    Interconnect = "INTERCONNECT"
,    GkeMaster = "GKE_MASTER"
,    ImportedCustomRouteNextHop = "IMPORTED_CUSTOM_ROUTE_NEXT_HOP"
,    CloudSqlInstance = "CLOUD_SQL_INSTANCE"
,    AnotherProject = "ANOTHER_PROJECT"
}


// ForwardInfo
/** 
 * Details of the final state "forward" and associated resource.
**/
export class ForwardInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceUri" })
  resourceUri?: string;

  @Metadata({ data: "json, name=target" })
  target?: ForwardInfoTargetEnum;
}
