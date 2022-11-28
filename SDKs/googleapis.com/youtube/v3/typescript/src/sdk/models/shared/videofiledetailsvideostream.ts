import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VideoFileDetailsVideoStreamRotationEnum {
    None = "none",
    Clockwise = "clockwise",
    UpsideDown = "upsideDown",
    CounterClockwise = "counterClockwise",
    Other = "other"
}


// VideoFileDetailsVideoStream
/** 
 * Information about a video stream.
**/
export class VideoFileDetailsVideoStream extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aspectRatio" })
  aspectRatio?: number;

  @SpeakeasyMetadata({ data: "json, name=bitrateBps" })
  bitrateBps?: string;

  @SpeakeasyMetadata({ data: "json, name=codec" })
  codec?: string;

  @SpeakeasyMetadata({ data: "json, name=frameRateFps" })
  frameRateFps?: number;

  @SpeakeasyMetadata({ data: "json, name=heightPixels" })
  heightPixels?: number;

  @SpeakeasyMetadata({ data: "json, name=rotation" })
  rotation?: VideoFileDetailsVideoStreamRotationEnum;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: string;

  @SpeakeasyMetadata({ data: "json, name=widthPixels" })
  widthPixels?: number;
}
