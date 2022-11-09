import { SpeakeasyBase } from "../../../internal/utils/utils";
import { H264CodecSettings } from "./h264codecsettings";
import { H265CodecSettings } from "./h265codecsettings";
import { Vp9CodecSettings } from "./vp9codecsettings";
/**
 * Video stream resource.
**/
export declare class VideoStream extends SpeakeasyBase {
    h264?: H264CodecSettings;
    h265?: H265CodecSettings;
    vp9?: Vp9CodecSettings;
}
