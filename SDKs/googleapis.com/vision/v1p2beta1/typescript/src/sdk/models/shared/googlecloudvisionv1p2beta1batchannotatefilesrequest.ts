import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p2beta1AnnotateFileRequest } from "./googlecloudvisionv1p2beta1annotatefilerequest";


// GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest
/** 
 * A list of requests to annotate files using the BatchAnnotateFiles API.
**/
export class GoogleCloudVisionV1p2beta1BatchAnnotateFilesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=requests", elemType: shared.GoogleCloudVisionV1p2beta1AnnotateFileRequest })
  requests?: GoogleCloudVisionV1p2beta1AnnotateFileRequest[];
}
