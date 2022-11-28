import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImageSource
/** 
 * External image source (Google Cloud Storage or web URL image location).
**/
export class ImageSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsImageUri" })
  gcsImageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUri" })
  imageUri?: string;
}
