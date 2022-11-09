import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Feature } from "./feature";
import { Image } from "./image";
import { ImageContext } from "./imagecontext";


// AnnotateImageRequest
/** 
 * Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
**/
export class AnnotateImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=features", elemType: shared.Feature })
  features?: Feature[];

  @Metadata({ data: "json, name=image" })
  image?: Image;

  @Metadata({ data: "json, name=imageContext" })
  imageContext?: ImageContext;
}
