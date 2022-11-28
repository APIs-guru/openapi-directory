import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1Feature } from "./googlecloudvisionv1p1beta1feature";
import { GoogleCloudVisionV1p1beta1ImageContext } from "./googlecloudvisionv1p1beta1imagecontext";
import { GoogleCloudVisionV1p1beta1InputConfig } from "./googlecloudvisionv1p1beta1inputconfig";
import { GoogleCloudVisionV1p1beta1OutputConfig } from "./googlecloudvisionv1p1beta1outputconfig";



// GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest
/** 
 * An offline file annotation request.
**/
export class GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=features", elemType: GoogleCloudVisionV1p1beta1Feature })
  features?: GoogleCloudVisionV1p1beta1Feature[];

  @SpeakeasyMetadata({ data: "json, name=imageContext" })
  imageContext?: GoogleCloudVisionV1p1beta1ImageContext;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudVisionV1p1beta1InputConfig;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: GoogleCloudVisionV1p1beta1OutputConfig;
}
