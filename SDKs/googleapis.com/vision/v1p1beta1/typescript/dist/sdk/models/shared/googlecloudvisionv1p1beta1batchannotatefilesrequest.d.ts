import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1AnnotateFileRequest } from "./googlecloudvisionv1p1beta1annotatefilerequest";
/**
 * A list of requests to annotate files using the BatchAnnotateFiles API.
**/
export declare class GoogleCloudVisionV1p1beta1BatchAnnotateFilesRequest extends SpeakeasyBase {
    parent?: string;
    requests?: GoogleCloudVisionV1p1beta1AnnotateFileRequest[];
}
