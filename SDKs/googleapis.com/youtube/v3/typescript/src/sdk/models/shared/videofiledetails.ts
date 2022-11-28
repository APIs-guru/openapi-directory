import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoFileDetailsAudioStream } from "./videofiledetailsaudiostream";
import { VideoFileDetailsVideoStream } from "./videofiledetailsvideostream";


export enum VideoFileDetailsFileTypeEnum {
    Video = "video",
    Audio = "audio",
    Image = "image",
    Archive = "archive",
    Document = "document",
    Project = "project",
    Other = "other"
}


// VideoFileDetails
/** 
 * Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.
**/
export class VideoFileDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioStreams", elemType: VideoFileDetailsAudioStream })
  audioStreams?: VideoFileDetailsAudioStream[];

  @SpeakeasyMetadata({ data: "json, name=bitrateBps" })
  bitrateBps?: string;

  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=durationMs" })
  durationMs?: string;

  @SpeakeasyMetadata({ data: "json, name=fileName" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=fileSize" })
  fileSize?: string;

  @SpeakeasyMetadata({ data: "json, name=fileType" })
  fileType?: VideoFileDetailsFileTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=videoStreams", elemType: VideoFileDetailsVideoStream })
  videoStreams?: VideoFileDetailsVideoStream[];
}
