import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TypedValue } from "./typedvalue";

export enum CollectdValueDataSourceTypeEnum {
    UnspecifiedDataSourceType = "UNSPECIFIED_DATA_SOURCE_TYPE"
,    Gauge = "GAUGE"
,    Counter = "COUNTER"
,    Derive = "DERIVE"
,    Absolute = "ABSOLUTE"
}


// CollectdValue
/** 
 * A single data point from a collectd-based plugin.
**/
export class CollectdValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceName" })
  dataSourceName?: string;

  @Metadata({ data: "json, name=dataSourceType" })
  dataSourceType?: CollectdValueDataSourceTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: TypedValue;
}
