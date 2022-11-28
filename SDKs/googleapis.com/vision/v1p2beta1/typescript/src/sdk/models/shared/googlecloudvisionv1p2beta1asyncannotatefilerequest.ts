import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1Feature } from "./googlecloudvisionv1p2beta1feature";
import { GoogleCloudVisionV1p2beta1ImageContext } from "./googlecloudvisionv1p2beta1imagecontext";
import { GoogleCloudVisionV1p2beta1InputConfig } from "./googlecloudvisionv1p2beta1inputconfig";
import { GoogleCloudVisionV1p2beta1OutputConfig } from "./googlecloudvisionv1p2beta1outputconfig";



// GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest
/** 
 * An offline file annotation request.
**/
export class GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=features", elemType: GoogleCloudVisionV1p2beta1Feature })
  features?: GoogleCloudVisionV1p2beta1Feature[];

  @SpeakeasyMetadata({ data: "json, name=imageContext" })
  imageContext?: GoogleCloudVisionV1p2beta1ImageContext;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: GoogleCloudVisionV1p2beta1OutputConfig;
}
