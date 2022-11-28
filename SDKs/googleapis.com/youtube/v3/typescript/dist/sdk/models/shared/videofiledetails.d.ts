import { SpeakeasyBase } from "../../../internal/utils";
import { VideoFileDetailsAudioStream } from "./videofiledetailsaudiostream";
import { VideoFileDetailsVideoStream } from "./videofiledetailsvideostream";
export declare enum VideoFileDetailsFileTypeEnum {
    Video = "video",
    Audio = "audio",
    Image = "image",
    Archive = "archive",
    Document = "document",
    Project = "project",
    Other = "other"
}
/**
 * Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.
**/
export declare class VideoFileDetails extends SpeakeasyBase {
    audioStreams?: VideoFileDetailsAudioStream[];
    bitrateBps?: string;
    container?: string;
    creationTime?: string;
    durationMs?: string;
    fileName?: string;
    fileSize?: string;
    fileType?: VideoFileDetailsFileTypeEnum;
    videoStreams?: VideoFileDetailsVideoStream[];
}
