import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StackdriverLoggingConfig
/** 
 * Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/).
**/
export class StackdriverLoggingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=samplingRatio" })
  samplingRatio?: number;
}
