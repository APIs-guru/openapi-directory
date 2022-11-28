import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";



// PerfSample
/** 
 * Resource representing a single performance measure or data point
**/
export class PerfSample extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sampleTime" })
  sampleTime?: Timestamp;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
