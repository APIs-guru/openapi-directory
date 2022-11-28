import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1VideoThumbnail } from "./googleclouddatalabelingv1beta1videothumbnail";



// GoogleCloudDatalabelingV1beta1VideoPayload
/** 
 * Container of information of a video.
**/
export class GoogleCloudDatalabelingV1beta1VideoPayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frameRate" })
  frameRate?: number;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=signedUri" })
  signedUri?: string;

  @SpeakeasyMetadata({ data: "json, name=videoThumbnails", elemType: GoogleCloudDatalabelingV1beta1VideoThumbnail })
  videoThumbnails?: GoogleCloudDatalabelingV1beta1VideoThumbnail[];

  @SpeakeasyMetadata({ data: "json, name=videoUri" })
  videoUri?: string;
}
