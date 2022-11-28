import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IpMappingTypeEnum {
    SqlIpAddressTypeUnspecified = "SQL_IP_ADDRESS_TYPE_UNSPECIFIED",
    Primary = "PRIMARY",
    Outgoing = "OUTGOING",
    Private = "PRIVATE",
    Migrated1StGen = "MIGRATED_1ST_GEN"
}
/**
 * Database instance IP Mapping.
**/
export declare class IpMapping extends SpeakeasyBase {
    ipAddress?: string;
    timeToRetire?: string;
    type?: IpMappingTypeEnum;
}
