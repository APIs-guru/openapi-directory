import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1WebDetectionWebLabel } from "./googlecloudvisionv1p2beta1webdetectionweblabel";
import { GoogleCloudVisionV1p2beta1WebDetectionWebImage } from "./googlecloudvisionv1p2beta1webdetectionwebimage";
import { GoogleCloudVisionV1p2beta1WebDetectionWebPage } from "./googlecloudvisionv1p2beta1webdetectionwebpage";
import { GoogleCloudVisionV1p2beta1WebDetectionWebEntity } from "./googlecloudvisionv1p2beta1webdetectionwebentity";
/**
 * Relevant information for the image from the Internet.
**/
export declare class GoogleCloudVisionV1p2beta1WebDetection extends SpeakeasyBase {
    bestGuessLabels?: GoogleCloudVisionV1p2beta1WebDetectionWebLabel[];
    fullMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    pagesWithMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebPage[];
    partialMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    visuallySimilarImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    webEntities?: GoogleCloudVisionV1p2beta1WebDetectionWebEntity[];
}
