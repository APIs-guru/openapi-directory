import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1AnnotateFileResponse } from "./googlecloudvisionv1p2beta1annotatefileresponse";


// GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse
/** 
 * A list of file annotation responses.
**/
export class GoogleCloudVisionV1p2beta1BatchAnnotateFilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.GoogleCloudVisionV1p2beta1AnnotateFileResponse })
  responses?: GoogleCloudVisionV1p2beta1AnnotateFileResponse[];
}
