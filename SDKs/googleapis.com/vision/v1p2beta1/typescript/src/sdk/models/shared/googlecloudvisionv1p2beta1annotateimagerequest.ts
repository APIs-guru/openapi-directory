import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1Feature } from "./googlecloudvisionv1p2beta1feature";
import { GoogleCloudVisionV1p2beta1Image } from "./googlecloudvisionv1p2beta1image";
import { GoogleCloudVisionV1p2beta1ImageContext } from "./googlecloudvisionv1p2beta1imagecontext";


// GoogleCloudVisionV1p2beta1AnnotateImageRequest
/** 
 * Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
**/
export class GoogleCloudVisionV1p2beta1AnnotateImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=features", elemType: shared.GoogleCloudVisionV1p2beta1Feature })
  features?: GoogleCloudVisionV1p2beta1Feature[];

  @Metadata({ data: "json, name=image" })
  image?: GoogleCloudVisionV1p2beta1Image;

  @Metadata({ data: "json, name=imageContext" })
  imageContext?: GoogleCloudVisionV1p2beta1ImageContext;
}
