import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudVisionV1p2beta1ImageSource
/** 
 * External image source (Google Cloud Storage or web URL image location).
**/
export class GoogleCloudVisionV1p2beta1ImageSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsImageUri" })
  gcsImageUri?: string;

  @Metadata({ data: "json, name=imageUri" })
  imageUri?: string;
}
