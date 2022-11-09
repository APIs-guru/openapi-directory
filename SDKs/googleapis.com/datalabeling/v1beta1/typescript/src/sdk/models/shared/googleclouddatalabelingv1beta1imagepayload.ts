import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1ImagePayload
/** 
 * Container of information about an image.
**/
export class GoogleCloudDatalabelingV1beta1ImagePayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageThumbnail" })
  imageThumbnail?: string;

  @Metadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=signedUri" })
  signedUri?: string;
}
