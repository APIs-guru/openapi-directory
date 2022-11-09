import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VideoFileDetailsAudioStream } from "./videofiledetailsaudiostream";
import { VideoFileDetailsVideoStream } from "./videofiledetailsvideostream";

export enum VideoFileDetailsFileTypeEnum {
    Video = "video"
,    Audio = "audio"
,    Image = "image"
,    Archive = "archive"
,    Document = "document"
,    Project = "project"
,    Other = "other"
}


// VideoFileDetails
/** 
 * Describes original video file properties, including technical details about audio and video streams, but also metadata information like content length, digitization time, or geotagging information.
**/
export class VideoFileDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioStreams", elemType: shared.VideoFileDetailsAudioStream })
  audioStreams?: VideoFileDetailsAudioStream[];

  @Metadata({ data: "json, name=bitrateBps" })
  bitrateBps?: string;

  @Metadata({ data: "json, name=container" })
  container?: string;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=durationMs" })
  durationMs?: string;

  @Metadata({ data: "json, name=fileName" })
  fileName?: string;

  @Metadata({ data: "json, name=fileSize" })
  fileSize?: string;

  @Metadata({ data: "json, name=fileType" })
  fileType?: VideoFileDetailsFileTypeEnum;

  @Metadata({ data: "json, name=videoStreams", elemType: shared.VideoFileDetailsVideoStream })
  videoStreams?: VideoFileDetailsVideoStream[];
}
