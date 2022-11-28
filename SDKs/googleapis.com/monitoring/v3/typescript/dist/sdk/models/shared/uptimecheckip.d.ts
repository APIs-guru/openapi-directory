import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UptimeCheckIpRegionEnum {
    RegionUnspecified = "REGION_UNSPECIFIED",
    Usa = "USA",
    Europe = "EUROPE",
    SouthAmerica = "SOUTH_AMERICA",
    AsiaPacific = "ASIA_PACIFIC"
}
/**
 * Contains the region, location, and list of IP addresses where checkers in the location run from.
**/
export declare class UptimeCheckIp extends SpeakeasyBase {
    ipAddress?: string;
    location?: string;
    region?: UptimeCheckIpRegionEnum;
}
