import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StreamingConfig
/** 
 * The config for streaming-based notifications, which send each event as soon as it is detected.
**/
export class StreamingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;
}
