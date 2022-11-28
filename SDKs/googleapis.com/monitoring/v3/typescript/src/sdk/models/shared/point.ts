import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeInterval } from "./timeinterval";
import { TypedValue } from "./typedvalue";



// Point
/** 
 * A single data point in a time series.
**/
export class Point extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: TimeInterval;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: TypedValue;
}
