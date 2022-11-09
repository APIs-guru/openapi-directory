import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StreamingConfig
/** 
 * The config for streaming-based notifications, which send each event as soon as it is detected.
**/
export class StreamingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;
}
