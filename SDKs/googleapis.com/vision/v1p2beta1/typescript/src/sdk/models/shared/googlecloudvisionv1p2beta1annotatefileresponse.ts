import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";
import { GoogleCloudVisionV1p2beta1InputConfig } from "./googlecloudvisionv1p2beta1inputconfig";
import { GoogleCloudVisionV1p2beta1AnnotateImageResponse } from "./googlecloudvisionv1p2beta1annotateimageresponse";


// GoogleCloudVisionV1p2beta1AnnotateFileResponse
/** 
 * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
**/
export class GoogleCloudVisionV1p2beta1AnnotateFileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;

  @Metadata({ data: "json, name=responses", elemType: shared.GoogleCloudVisionV1p2beta1AnnotateImageResponse })
  responses?: GoogleCloudVisionV1p2beta1AnnotateImageResponse[];

  @Metadata({ data: "json, name=totalPages" })
  totalPages?: number;
}
