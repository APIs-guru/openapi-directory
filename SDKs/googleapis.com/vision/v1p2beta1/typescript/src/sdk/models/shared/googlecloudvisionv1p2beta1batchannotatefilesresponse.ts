import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1AnnotateFileResponse } from "./googlecloudvisionv1p2beta1annotatefileresponse";



// GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse
/** 
 * A list of file annotation responses.
**/
export class GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: GoogleCloudVisionV1p2beta1AnnotateFileResponse })
  responses?: GoogleCloudVisionV1p2beta1AnnotateFileResponse[];
}
