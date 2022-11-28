import { SpeakeasyBase } from "../../../internal/utils";
import { EncodingContextEnum } from "./encodingcontextenum";
import { TranscodeSeekInfoEnum } from "./transcodeseekinfoenum";
import { DlnaProfileTypeEnum } from "./dlnaprofiletypeenum";
export declare class TranscodingProfile extends SpeakeasyBase {
    audioCodec?: string;
    breakOnNonKeyFrames?: boolean;
    container?: string;
    context?: EncodingContextEnum;
    copyTimestamps?: boolean;
    enableMpegtsM2TsMode?: boolean;
    enableSubtitlesInManifest?: boolean;
    estimateContentLength?: boolean;
    maxAudioChannels?: string;
    minSegments?: number;
    protocol?: string;
    segmentLength?: number;
    transcodeSeekInfo?: TranscodeSeekInfoEnum;
    type?: DlnaProfileTypeEnum;
    videoCodec?: string;
}
