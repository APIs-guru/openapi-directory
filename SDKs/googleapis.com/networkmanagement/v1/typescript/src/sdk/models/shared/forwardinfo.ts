import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ForwardInfoTargetEnum {
    TargetUnspecified = "TARGET_UNSPECIFIED",
    PeeringVpc = "PEERING_VPC",
    VpnGateway = "VPN_GATEWAY",
    Interconnect = "INTERCONNECT",
    GkeMaster = "GKE_MASTER",
    ImportedCustomRouteNextHop = "IMPORTED_CUSTOM_ROUTE_NEXT_HOP",
    CloudSqlInstance = "CLOUD_SQL_INSTANCE",
    AnotherProject = "ANOTHER_PROJECT"
}


// ForwardInfo
/** 
 * Details of the final state "forward" and associated resource.
**/
export class ForwardInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceUri" })
  resourceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: ForwardInfoTargetEnum;
}
