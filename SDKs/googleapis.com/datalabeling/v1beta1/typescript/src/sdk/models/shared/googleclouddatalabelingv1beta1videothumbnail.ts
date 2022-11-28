import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1VideoThumbnail
/** 
 * Container of information of a video thumbnail.
**/
export class GoogleCloudDatalabelingV1beta1VideoThumbnail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=timeOffset" })
  timeOffset?: string;
}
