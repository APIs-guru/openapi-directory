import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1VideoThumbnail } from "./googleclouddatalabelingv1beta1videothumbnail";


// GoogleCloudDatalabelingV1beta1VideoPayload
/** 
 * Container of information of a video.
**/
export class GoogleCloudDatalabelingV1beta1VideoPayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=frameRate" })
  frameRate?: number;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=signedUri" })
  signedUri?: string;

  @Metadata({ data: "json, name=videoThumbnails", elemType: shared.GoogleCloudDatalabelingV1beta1VideoThumbnail })
  videoThumbnails?: GoogleCloudDatalabelingV1beta1VideoThumbnail[];

  @Metadata({ data: "json, name=videoUri" })
  videoUri?: string;
}
