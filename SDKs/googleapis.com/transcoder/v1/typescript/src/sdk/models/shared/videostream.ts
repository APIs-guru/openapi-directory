import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { H264CodecSettings } from "./h264codecsettings";
import { H265CodecSettings } from "./h265codecsettings";
import { Vp9CodecSettings } from "./vp9codecsettings";



// VideoStream
/** 
 * Video stream resource.
**/
export class VideoStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=h264" })
  h264?: H264CodecSettings;

  @SpeakeasyMetadata({ data: "json, name=h265" })
  h265?: H265CodecSettings;

  @SpeakeasyMetadata({ data: "json, name=vp9" })
  vp9?: Vp9CodecSettings;
}
