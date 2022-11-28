import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { GoogleCloudVisionV1p2beta1InputConfig } from "./googlecloudvisionv1p2beta1inputconfig";
import { GoogleCloudVisionV1p2beta1AnnotateImageResponse } from "./googlecloudvisionv1p2beta1annotateimageresponse";
/**
 * Response to a single file annotation request. A file may contain one or more images, which individually have their own responses.
**/
export declare class GoogleCloudVisionV1p2beta1AnnotateFileResponse extends SpeakeasyBase {
    error?: Status;
    inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;
    responses?: GoogleCloudVisionV1p2beta1AnnotateImageResponse[];
    totalPages?: number;
}
