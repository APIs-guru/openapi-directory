import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Encryption } from "./encryption";
import { SegmentSettings } from "./segmentsettings";



// MuxStream
/** 
 * Multiplexing settings for output stream.
**/
export class MuxStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=elementaryStreams" })
  elementaryStreams?: string[];

  @SpeakeasyMetadata({ data: "json, name=encryption" })
  encryption?: Encryption;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=segmentSettings" })
  segmentSettings?: SegmentSettings;
}
