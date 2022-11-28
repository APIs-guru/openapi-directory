import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";
import { Image } from "./image";
import { ImageContext } from "./imagecontext";



// AnnotateImageRequest
/** 
 * Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
**/
export class AnnotateImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=features", elemType: Feature })
  features?: Feature[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: Image;

  @SpeakeasyMetadata({ data: "json, name=imageContext" })
  imageContext?: ImageContext;
}
