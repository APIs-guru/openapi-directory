import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TypedValue } from "./typedvalue";


export enum CollectdValueDataSourceTypeEnum {
    UnspecifiedDataSourceType = "UNSPECIFIED_DATA_SOURCE_TYPE",
    Gauge = "GAUGE",
    Counter = "COUNTER",
    Derive = "DERIVE",
    Absolute = "ABSOLUTE"
}


// CollectdValue
/** 
 * A single data point from a collectd-based plugin.
**/
export class CollectdValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceName" })
  dataSourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=dataSourceType" })
  dataSourceType?: CollectdValueDataSourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: TypedValue;
}
