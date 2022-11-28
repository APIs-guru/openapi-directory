import { SpeakeasyBase } from "../../../internal/utils";
import { ContentMatcher } from "./contentmatcher";
import { HttpCheck } from "./httpcheck";
import { InternalChecker } from "./internalchecker";
import { MonitoredResource } from "./monitoredresource";
import { ResourceGroup } from "./resourcegroup";
import { TcpCheck } from "./tcpcheck";
export declare enum UptimeCheckConfigCheckerTypeEnum {
    CheckerTypeUnspecified = "CHECKER_TYPE_UNSPECIFIED",
    StaticIpCheckers = "STATIC_IP_CHECKERS",
    VpcCheckers = "VPC_CHECKERS"
}
export declare enum UptimeCheckConfigSelectedRegionsEnum {
    RegionUnspecified = "REGION_UNSPECIFIED",
    Usa = "USA",
    Europe = "EUROPE",
    SouthAmerica = "SOUTH_AMERICA",
    AsiaPacific = "ASIA_PACIFIC"
}
/**
 * This message configures which resources and services to monitor for availability.
**/
export declare class UptimeCheckConfig extends SpeakeasyBase {
    checkerType?: UptimeCheckConfigCheckerTypeEnum;
    contentMatchers?: ContentMatcher[];
    displayName?: string;
    httpCheck?: HttpCheck;
    internalCheckers?: InternalChecker[];
    isInternal?: boolean;
    monitoredResource?: MonitoredResource;
    name?: string;
    period?: string;
    resourceGroup?: ResourceGroup;
    selectedRegions?: UptimeCheckConfigSelectedRegionsEnum[];
    tcpCheck?: TcpCheck;
    timeout?: string;
    userLabels?: Map<string, string>;
}
