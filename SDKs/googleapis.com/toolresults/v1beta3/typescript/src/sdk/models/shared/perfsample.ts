import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Timestamp } from "./timestamp";


// PerfSample
/** 
 * Resource representing a single performance measure or data point
**/
export class PerfSample extends SpeakeasyBase {
  @Metadata({ data: "json, name=sampleTime" })
  sampleTime?: Timestamp;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
