import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1AnnotateFileResponse } from "./googlecloudvisionv1p1beta1annotatefileresponse";



// GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse
/** 
 * A list of file annotation responses.
**/
export class GoogleCloudVisionV1p1beta1BatchAnnotateFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: GoogleCloudVisionV1p1beta1AnnotateFileResponse })
  responses?: GoogleCloudVisionV1p1beta1AnnotateFileResponse[];
}
