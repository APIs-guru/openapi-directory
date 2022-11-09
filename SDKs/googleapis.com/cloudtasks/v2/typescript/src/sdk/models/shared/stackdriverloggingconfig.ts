import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StackdriverLoggingConfig
/** 
 * Configuration options for writing logs to [Stackdriver Logging](https://cloud.google.com/logging/docs/).
**/
export class StackdriverLoggingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=samplingRatio" })
  samplingRatio?: number;
}
