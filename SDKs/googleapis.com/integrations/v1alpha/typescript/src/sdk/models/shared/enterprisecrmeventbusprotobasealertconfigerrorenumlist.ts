import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum {
    DefaultInclusive = "DEFAULT_INCLUSIVE",
    Exclusive = "EXCLUSIVE"
}


// EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList
/** 
 * List of error enums for alerts.
**/
export class EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enumStrings" })
  enumStrings?: string[];

  @SpeakeasyMetadata({ data: "json, name=filterType" })
  filterType?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterTypeEnum;
}
