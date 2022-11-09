import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { H264CodecSettings } from "./h264codecsettings";
import { H265CodecSettings } from "./h265codecsettings";
import { Vp9CodecSettings } from "./vp9codecsettings";


// VideoStream
/** 
 * Video stream resource.
**/
export class VideoStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=h264" })
  h264?: H264CodecSettings;

  @Metadata({ data: "json, name=h265" })
  h265?: H265CodecSettings;

  @Metadata({ data: "json, name=vp9" })
  vp9?: Vp9CodecSettings;
}
