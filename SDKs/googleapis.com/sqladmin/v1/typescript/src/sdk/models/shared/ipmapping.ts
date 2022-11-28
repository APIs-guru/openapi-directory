import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IpMappingTypeEnum {
    SqlIpAddressTypeUnspecified = "SQL_IP_ADDRESS_TYPE_UNSPECIFIED",
    Primary = "PRIMARY",
    Outgoing = "OUTGOING",
    Private = "PRIVATE",
    Migrated1StGen = "MIGRATED_1ST_GEN"
}


// IpMapping
/** 
 * Database instance IP Mapping.
**/
export class IpMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=timeToRetire" })
  timeToRetire?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: IpMappingTypeEnum;
}
