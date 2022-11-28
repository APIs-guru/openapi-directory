import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1Feature } from "./googlecloudvisionv1p2beta1feature";
import { GoogleCloudVisionV1p2beta1Image } from "./googlecloudvisionv1p2beta1image";
import { GoogleCloudVisionV1p2beta1ImageContext } from "./googlecloudvisionv1p2beta1imagecontext";



// GoogleCloudVisionV1p2beta1AnnotateImageRequest
/** 
 * Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
**/
export class GoogleCloudVisionV1p2beta1AnnotateImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=features", elemType: GoogleCloudVisionV1p2beta1Feature })
  features?: GoogleCloudVisionV1p2beta1Feature[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: GoogleCloudVisionV1p2beta1Image;

  @SpeakeasyMetadata({ data: "json, name=imageContext" })
  imageContext?: GoogleCloudVisionV1p2beta1ImageContext;
}
