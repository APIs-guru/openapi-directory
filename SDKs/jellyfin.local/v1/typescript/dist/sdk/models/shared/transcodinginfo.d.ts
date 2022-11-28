import { SpeakeasyBase } from "../../../internal/utils";
import { TranscodeReasonEnum } from "./transcodereasonenum";
export declare class TranscodingInfo extends SpeakeasyBase {
    audioChannels?: number;
    audioCodec?: string;
    bitrate?: number;
    completionPercentage?: number;
    container?: string;
    framerate?: number;
    height?: number;
    isAudioDirect?: boolean;
    isVideoDirect?: boolean;
    transcodeReasons?: TranscodeReasonEnum[];
    videoCodec?: string;
    width?: number;
}
