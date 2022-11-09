import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p1beta1Feature } from "./googlecloudvisionv1p1beta1feature";
import { GoogleCloudVisionV1p1beta1ImageContext } from "./googlecloudvisionv1p1beta1imagecontext";
import { GoogleCloudVisionV1p1beta1InputConfig } from "./googlecloudvisionv1p1beta1inputconfig";
import { GoogleCloudVisionV1p1beta1OutputConfig } from "./googlecloudvisionv1p1beta1outputconfig";


// GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest
/** 
 * An offline file annotation request.
**/
export class GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=features", elemType: shared.GoogleCloudVisionV1p1beta1Feature })
  features?: GoogleCloudVisionV1p1beta1Feature[];

  @Metadata({ data: "json, name=imageContext" })
  imageContext?: GoogleCloudVisionV1p1beta1ImageContext;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudVisionV1p1beta1InputConfig;

  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: GoogleCloudVisionV1p1beta1OutputConfig;
}
