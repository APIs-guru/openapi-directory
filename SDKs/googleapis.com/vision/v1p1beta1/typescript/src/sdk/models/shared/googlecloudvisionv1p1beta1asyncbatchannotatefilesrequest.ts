import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest } from "./googlecloudvisionv1p1beta1asyncannotatefilerequest";



// GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest
/** 
 * Multiple async file annotation requests are batched into a single service call.
**/
export class GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=requests", elemType: GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest })
  requests?: GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest[];
}
