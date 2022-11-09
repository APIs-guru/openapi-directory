import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1VideoThumbnail
/** 
 * Container of information of a video thumbnail.
**/
export class GoogleCloudDatalabelingV1beta1VideoThumbnail extends SpeakeasyBase {
  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;

  @Metadata({ data: "json, name=timeOffset" })
  timeOffset?: string;
}
