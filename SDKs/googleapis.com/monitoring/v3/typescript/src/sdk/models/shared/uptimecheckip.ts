import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UptimeCheckIpRegionEnum {
    RegionUnspecified = "REGION_UNSPECIFIED",
    Usa = "USA",
    Europe = "EUROPE",
    SouthAmerica = "SOUTH_AMERICA",
    AsiaPacific = "ASIA_PACIFIC"
}


// UptimeCheckIp
/** 
 * Contains the region, location, and list of IP addresses where checkers in the location run from.
**/
export class UptimeCheckIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: UptimeCheckIpRegionEnum;
}
