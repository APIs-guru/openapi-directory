import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1CropHintsParams } from "./googlecloudvisionv1p2beta1crophintsparams";
import { GoogleCloudVisionV1p2beta1LatLongRect } from "./googlecloudvisionv1p2beta1latlongrect";
import { GoogleCloudVisionV1p2beta1ProductSearchParams } from "./googlecloudvisionv1p2beta1productsearchparams";
import { GoogleCloudVisionV1p2beta1TextDetectionParams } from "./googlecloudvisionv1p2beta1textdetectionparams";
import { GoogleCloudVisionV1p2beta1WebDetectionParams } from "./googlecloudvisionv1p2beta1webdetectionparams";
/**
 * Image context and/or feature-specific parameters.
**/
export declare class GoogleCloudVisionV1p2beta1ImageContext extends SpeakeasyBase {
    cropHintsParams?: GoogleCloudVisionV1p2beta1CropHintsParams;
    languageHints?: string[];
    latLongRect?: GoogleCloudVisionV1p2beta1LatLongRect;
    productSearchParams?: GoogleCloudVisionV1p2beta1ProductSearchParams;
    textDetectionParams?: GoogleCloudVisionV1p2beta1TextDetectionParams;
    webDetectionParams?: GoogleCloudVisionV1p2beta1WebDetectionParams;
}
