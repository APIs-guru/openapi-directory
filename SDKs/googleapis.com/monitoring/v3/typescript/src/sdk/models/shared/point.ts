import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeInterval } from "./timeinterval";
import { TypedValue } from "./typedvalue";


// Point
/** 
 * A single data point in a time series.
**/
export class Point extends SpeakeasyBase {
  @Metadata({ data: "json, name=interval" })
  interval?: TimeInterval;

  @Metadata({ data: "json, name=value" })
  value?: TypedValue;
}
