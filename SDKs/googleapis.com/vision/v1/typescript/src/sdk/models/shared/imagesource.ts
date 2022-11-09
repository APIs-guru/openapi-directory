import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImageSource
/** 
 * External image source (Google Cloud Storage or web URL image location).
**/
export class ImageSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsImageUri" })
  gcsImageUri?: string;

  @Metadata({ data: "json, name=imageUri" })
  imageUri?: string;
}
