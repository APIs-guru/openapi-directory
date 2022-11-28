import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1ImageSource } from "./googlecloudvisionv1p1beta1imagesource";



// GoogleCloudVisionV1p1beta1Image
/** 
 * Client image to perform Google Cloud Vision API tasks over.
**/
export class GoogleCloudVisionV1p1beta1Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GoogleCloudVisionV1p1beta1ImageSource;
}
