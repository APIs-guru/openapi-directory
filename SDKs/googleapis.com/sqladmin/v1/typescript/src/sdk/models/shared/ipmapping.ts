import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IpMappingTypeEnum {
    SqlIpAddressTypeUnspecified = "SQL_IP_ADDRESS_TYPE_UNSPECIFIED"
,    Primary = "PRIMARY"
,    Outgoing = "OUTGOING"
,    Private = "PRIVATE"
,    Migrated1StGen = "MIGRATED_1ST_GEN"
}


// IpMapping
/** 
 * Database instance IP Mapping.
**/
export class IpMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=timeToRetire" })
  timeToRetire?: string;

  @Metadata({ data: "json, name=type" })
  type?: IpMappingTypeEnum;
}
