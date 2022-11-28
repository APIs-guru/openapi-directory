import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1Feature } from "./googlecloudvisionv1p1beta1feature";
import { GoogleCloudVisionV1p1beta1ImageContext } from "./googlecloudvisionv1p1beta1imagecontext";
import { GoogleCloudVisionV1p1beta1InputConfig } from "./googlecloudvisionv1p1beta1inputconfig";
/**
 * A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
**/
export declare class GoogleCloudVisionV1p1beta1AnnotateFileRequest extends SpeakeasyBase {
    features?: GoogleCloudVisionV1p1beta1Feature[];
    imageContext?: GoogleCloudVisionV1p1beta1ImageContext;
    inputConfig?: GoogleCloudVisionV1p1beta1InputConfig;
    pages?: number[];
}
