import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1AnnotateFileRequest } from "./googlecloudvisionv1p1beta1annotatefilerequest";



// GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest
/** 
 * A list of requests to annotate files using the BatchAnnotateFiles API.
**/
export class GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleCloudVisionV1p1beta1AnnotateFileRequest })
  requests?: GoogleCloudVisionV1p1beta1AnnotateFileRequest[];
}
