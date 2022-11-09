import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VideoFileDetailsVideoStreamRotationEnum {
    None = "none"
,    Clockwise = "clockwise"
,    UpsideDown = "upsideDown"
,    CounterClockwise = "counterClockwise"
,    Other = "other"
}


// VideoFileDetailsVideoStream
/** 
 * Information about a video stream.
**/
export class VideoFileDetailsVideoStream extends SpeakeasyBase {
  @Metadata({ data: "json, name=aspectRatio" })
  aspectRatio?: number;

  @Metadata({ data: "json, name=bitrateBps" })
  bitrateBps?: string;

  @Metadata({ data: "json, name=codec" })
  codec?: string;

  @Metadata({ data: "json, name=frameRateFps" })
  frameRateFps?: number;

  @Metadata({ data: "json, name=heightPixels" })
  heightPixels?: number;

  @Metadata({ data: "json, name=rotation" })
  rotation?: VideoFileDetailsVideoStreamRotationEnum;

  @Metadata({ data: "json, name=vendor" })
  vendor?: string;

  @Metadata({ data: "json, name=widthPixels" })
  widthPixels?: number;
}
