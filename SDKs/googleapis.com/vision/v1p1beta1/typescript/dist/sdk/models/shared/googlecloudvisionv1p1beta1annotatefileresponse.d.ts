import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { GoogleCloudVisionV1p1beta1InputConfig } from "./googlecloudvisionv1p1beta1inputconfig";
import { GoogleCloudVisionV1p1beta1AnnotateImageResponse } from "./googlecloudvisionv1p1beta1annotateimageresponse";
/**
 * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
**/
export declare class GoogleCloudVisionV1p1beta1AnnotateFileResponse extends SpeakeasyBase {
    error?: Status;
    inputConfig?: GoogleCloudVisionV1p1beta1InputConfig;
    responses?: GoogleCloudVisionV1p1beta1AnnotateImageResponse[];
    totalPages?: number;
}
