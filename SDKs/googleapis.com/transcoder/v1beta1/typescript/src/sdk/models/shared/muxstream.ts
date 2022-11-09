import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Encryption } from "./encryption";
import { SegmentSettings } from "./segmentsettings";


// MuxStream
/** 
 * Multiplexing settings for output stream.
**/
export class MuxStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=container" })
  container?: string;

  @Metadata({ data: "json, name=elementaryStreams" })
  elementaryStreams?: string[];

  @Metadata({ data: "json, name=encryption" })
  encryption?: Encryption;

  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=segmentSettings" })
  segmentSettings?: SegmentSettings;
}
