import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudVisionV1p1beta1ImageSource
/** 
 * External image source (Google Cloud Storage or web URL image location).
**/
export class GoogleCloudVisionV1p1beta1ImageSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsImageUri" })
  gcsImageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;
}
