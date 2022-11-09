import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContentMatcher } from "./contentmatcher";
import { HttpCheck } from "./httpcheck";
import { InternalChecker } from "./internalchecker";
import { MonitoredResource } from "./monitoredresource";
import { ResourceGroup } from "./resourcegroup";
import { TcpCheck } from "./tcpcheck";

export enum UptimeCheckConfigCheckerTypeEnum {
    CheckerTypeUnspecified = "CHECKER_TYPE_UNSPECIFIED"
,    StaticIpCheckers = "STATIC_IP_CHECKERS"
,    VpcCheckers = "VPC_CHECKERS"
}

export enum UptimeCheckConfigSelectedRegionsEnum {
    RegionUnspecified = "REGION_UNSPECIFIED"
,    Usa = "USA"
,    Europe = "EUROPE"
,    SouthAmerica = "SOUTH_AMERICA"
,    AsiaPacific = "ASIA_PACIFIC"
}


// UptimeCheckConfig
/** 
 * This message configures which resources and services to monitor for availability.
**/
export class UptimeCheckConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkerType" })
  checkerType?: UptimeCheckConfigCheckerTypeEnum;

  @Metadata({ data: "json, name=contentMatchers", elemType: shared.ContentMatcher })
  contentMatchers?: ContentMatcher[];

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=httpCheck" })
  httpCheck?: HttpCheck;

  @Metadata({ data: "json, name=internalCheckers", elemType: shared.InternalChecker })
  internalCheckers?: InternalChecker[];

  @Metadata({ data: "json, name=isInternal" })
  isInternal?: boolean;

  @Metadata({ data: "json, name=monitoredResource" })
  monitoredResource?: MonitoredResource;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=period" })
  period?: string;

  @Metadata({ data: "json, name=resourceGroup" })
  resourceGroup?: ResourceGroup;

  @Metadata({ data: "json, name=selectedRegions" })
  selectedRegions?: UptimeCheckConfigSelectedRegionsEnum[];

  @Metadata({ data: "json, name=tcpCheck" })
  tcpCheck?: TcpCheck;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;

  @Metadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;
}
