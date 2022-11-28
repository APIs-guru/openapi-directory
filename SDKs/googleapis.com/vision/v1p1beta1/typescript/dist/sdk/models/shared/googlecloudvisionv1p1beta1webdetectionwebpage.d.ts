import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1WebDetectionWebImage } from "./googlecloudvisionv1p1beta1webdetectionwebimage";
/**
 * Metadata for web pages.
**/
export declare class GoogleCloudVisionV1p1beta1WebDetectionWebPage extends SpeakeasyBase {
    fullMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    pageTitle?: string;
    partialMatchingImages?: GoogleCloudVisionV1p1beta1WebDetectionWebImage[];
    score?: number;
    url?: string;
}
