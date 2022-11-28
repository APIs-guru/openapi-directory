import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1Feature } from "./googlecloudvisionv1p2beta1feature";
import { GoogleCloudVisionV1p2beta1ImageContext } from "./googlecloudvisionv1p2beta1imagecontext";
import { GoogleCloudVisionV1p2beta1InputConfig } from "./googlecloudvisionv1p2beta1inputconfig";
import { GoogleCloudVisionV1p2beta1OutputConfig } from "./googlecloudvisionv1p2beta1outputconfig";
/**
 * An offline file annotation request.
**/
export declare class GoogleCloudVisionV1p2beta1AsyncAnnotateFileRequest extends SpeakeasyBase {
    features?: GoogleCloudVisionV1p2beta1Feature[];
    imageContext?: GoogleCloudVisionV1p2beta1ImageContext;
    inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;
    outputConfig?: GoogleCloudVisionV1p2beta1OutputConfig;
}
