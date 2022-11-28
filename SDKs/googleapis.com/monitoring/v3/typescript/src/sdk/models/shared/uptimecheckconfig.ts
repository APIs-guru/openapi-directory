import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentMatcher } from "./contentmatcher";
import { HttpCheck } from "./httpcheck";
import { InternalChecker } from "./internalchecker";
import { MonitoredResource } from "./monitoredresource";
import { ResourceGroup } from "./resourcegroup";
import { TcpCheck } from "./tcpcheck";


export enum UptimeCheckConfigCheckerTypeEnum {
    CheckerTypeUnspecified = "CHECKER_TYPE_UNSPECIFIED",
    StaticIpCheckers = "STATIC_IP_CHECKERS",
    VpcCheckers = "VPC_CHECKERS"
}

export enum UptimeCheckConfigSelectedRegionsEnum {
    RegionUnspecified = "REGION_UNSPECIFIED",
    Usa = "USA",
    Europe = "EUROPE",
    SouthAmerica = "SOUTH_AMERICA",
    AsiaPacific = "ASIA_PACIFIC"
}


// UptimeCheckConfig
/** 
 * This message configures which resources and services to monitor for availability.
**/
export class UptimeCheckConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkerType" })
  checkerType?: UptimeCheckConfigCheckerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=contentMatchers", elemType: ContentMatcher })
  contentMatchers?: ContentMatcher[];

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=httpCheck" })
  httpCheck?: HttpCheck;

  @SpeakeasyMetadata({ data: "json, name=internalCheckers", elemType: InternalChecker })
  internalCheckers?: InternalChecker[];

  @SpeakeasyMetadata({ data: "json, name=isInternal" })
  isInternal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=monitoredResource" })
  monitoredResource?: MonitoredResource;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceGroup" })
  resourceGroup?: ResourceGroup;

  @SpeakeasyMetadata({ data: "json, name=selectedRegions" })
  selectedRegions?: UptimeCheckConfigSelectedRegionsEnum[];

  @SpeakeasyMetadata({ data: "json, name=tcpCheck" })
  tcpCheck?: TcpCheck;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;

  @SpeakeasyMetadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;
}
