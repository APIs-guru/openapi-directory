import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1Feature } from "./googlecloudvisionv1p2beta1feature";
import { GoogleCloudVisionV1p2beta1ImageContext } from "./googlecloudvisionv1p2beta1imagecontext";
import { GoogleCloudVisionV1p2beta1InputConfig } from "./googlecloudvisionv1p2beta1inputconfig";
/**
 * A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
**/
export declare class GoogleCloudVisionV1p2beta1AnnotateFileRequest extends SpeakeasyBase {
    features?: GoogleCloudVisionV1p2beta1Feature[];
    imageContext?: GoogleCloudVisionV1p2beta1ImageContext;
    inputConfig?: GoogleCloudVisionV1p2beta1InputConfig;
    pages?: number[];
}
