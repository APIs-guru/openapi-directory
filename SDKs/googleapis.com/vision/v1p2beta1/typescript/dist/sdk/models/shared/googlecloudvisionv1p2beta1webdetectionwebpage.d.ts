import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1WebDetectionWebImage } from "./googlecloudvisionv1p2beta1webdetectionwebimage";
/**
 * Metadata for web pages.
**/
export declare class GoogleCloudVisionV1p2beta1WebDetectionWebPage extends SpeakeasyBase {
    fullMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    pageTitle?: string;
    partialMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    score?: number;
    url?: string;
}
