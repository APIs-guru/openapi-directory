import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { GoogleCloudVisionV1p1beta1InputConfig } from "./googlecloudvisionv1p1beta1inputconfig";
import { GoogleCloudVisionV1p1beta1AnnotateImageResponse } from "./googlecloudvisionv1p1beta1annotateimageresponse";



// GoogleCloudVisionV1p1beta1AnnotateFileResponse
/** 
 * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
**/
export class GoogleCloudVisionV1p1beta1AnnotateFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudVisionV1p1beta1InputConfig;

  @SpeakeasyMetadata({ data: "json, name=responses", elemType: GoogleCloudVisionV1p1beta1AnnotateImageResponse })
  responses?: GoogleCloudVisionV1p1beta1AnnotateImageResponse[];

  @SpeakeasyMetadata({ data: "json, name=totalPages" })
  totalPages?: number;
}
