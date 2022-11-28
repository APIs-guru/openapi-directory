import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest } from "./googlecloudvisionv1p2beta1asyncannotatefilerequest";
/**
 * Multiple async file annotation requests are batched into a single service call.
**/
export declare class GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest extends SpeakeasyBase {
    parent?: string;
    requests?: GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest[];
}
