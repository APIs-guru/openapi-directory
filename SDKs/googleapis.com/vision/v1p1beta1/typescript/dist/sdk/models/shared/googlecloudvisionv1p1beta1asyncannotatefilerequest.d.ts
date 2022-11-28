import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1Feature } from "./googlecloudvisionv1p1beta1feature";
import { GoogleCloudVisionV1p1beta1ImageContext } from "./googlecloudvisionv1p1beta1imagecontext";
import { GoogleCloudVisionV1p1beta1InputConfig } from "./googlecloudvisionv1p1beta1inputconfig";
import { GoogleCloudVisionV1p1beta1OutputConfig } from "./googlecloudvisionv1p1beta1outputconfig";
/**
 * An offline file annotation request.
**/
export declare class GoogleCloudVisionV1p1beta1AsyncAnnotateFileRequest extends SpeakeasyBase {
    features?: GoogleCloudVisionV1p1beta1Feature[];
    imageContext?: GoogleCloudVisionV1p1beta1ImageContext;
    inputConfig?: GoogleCloudVisionV1p1beta1InputConfig;
    outputConfig?: GoogleCloudVisionV1p1beta1OutputConfig;
}
