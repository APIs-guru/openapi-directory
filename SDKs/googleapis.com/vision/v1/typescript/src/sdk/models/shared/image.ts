import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageSource } from "./imagesource";


// Image
/** 
 * Client image to perform Google Cloud Vision API tasks over.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=source" })
  source?: ImageSource;
}
