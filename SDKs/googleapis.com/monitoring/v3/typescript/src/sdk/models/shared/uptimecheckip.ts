import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UptimeCheckIpRegionEnum {
    RegionUnspecified = "REGION_UNSPECIFIED"
,    Usa = "USA"
,    Europe = "EUROPE"
,    SouthAmerica = "SOUTH_AMERICA"
,    AsiaPacific = "ASIA_PACIFIC"
}


// UptimeCheckIp
/** 
 * Contains the region, location, and list of IP addresses where checkers in the location run from.
**/
export class UptimeCheckIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=region" })
  region?: UptimeCheckIpRegionEnum;
}
