import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageSource } from "./imagesource";



// Image
/** 
 * Client image to perform Google Cloud Vision API tasks over.
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: ImageSource;
}
