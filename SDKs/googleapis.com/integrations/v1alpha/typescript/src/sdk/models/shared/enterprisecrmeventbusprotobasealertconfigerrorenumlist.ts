import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum {
    DefaultInclusive = "DEFAULT_INCLUSIVE"
,    Exclusive = "EXCLUSIVE"
}


// EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList
/** 
 * List of error enums for alerts.
**/
export class EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList extends SpeakeasyBase {
  @Metadata({ data: "json, name=enumStrings" })
  enumStrings?: string[];

  @Metadata({ data: "json, name=filterType" })
  filterType?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum;
}
