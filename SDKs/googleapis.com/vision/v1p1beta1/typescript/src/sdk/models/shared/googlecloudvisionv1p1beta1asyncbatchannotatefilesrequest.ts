import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest } from "./googlecloudvisionv1p1beta1asyncannotatefilerequest";


// GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest
/** 
 * Multiple async file annotation requests are batched into a single service call.
**/
export class GoogleCloudVisionV1p1beta1AsyncBatchAnnotateFilesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=requests", elemType: shared.GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest })
  requests?: GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest[];
}
