import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1WebDetectionWebLabel } from "./googlecloudvisionv1p1beta1webdetectionweblabel";
import { GoogleCloudVisionV1p1beta1WebDetectionWebImage } from "./googlecloudvisionv1p1beta1webdetectionwebimage";
import { GoogleCloudVisionV1p1beta1WebDetectionWebPage } from "./googlecloudvisionv1p1beta1webdetectionwebpage";
import { GoogleCloudVisionV1p1beta1WebDetectionWebEntity } from "./googlecloudvisionv1p1beta1webdetectionwebentity";
/**
 * Relevant information for the image from the Internet.
**/
export declare class GoogleCloudVisionV1p1beta1WebDetection extends SpeakeasyBase {
    bestGuessLabels?: GoogleCloudVisionV1p1beta1WebDetectionWebLabel[];
    fullMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    pagesWithMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebPage[];
    partialMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    visuallySimilarImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    webEntities?: GoogleCloudVisionV1p1beta1WebDetectionWebEntity[];
}
