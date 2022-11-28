import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1ImagePayload
/** 
 * Container of information about an image.
**/
export class GoogleCloudDatalabelingV1beta1ImagePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageThumbnail" })
  imageThumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=signedUri" })
  signedUri?: string;
}
