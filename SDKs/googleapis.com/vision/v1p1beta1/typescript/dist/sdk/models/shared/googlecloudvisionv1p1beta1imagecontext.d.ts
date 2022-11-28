import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1CropHintsParams } from "./googlecloudvisionv1p1beta1crophintsparams";
import { GoogleCloudVisionV1p1beta1LatLongRect } from "./googlecloudvisionv1p1beta1latlongrect";
import { GoogleCloudVisionV1p1beta1ProductSearchParams } from "./googlecloudvisionv1p1beta1productsearchparams";
import { GoogleCloudVisionV1p1beta1TextDetectionParams } from "./googlecloudvisionv1p1beta1textdetectionparams";
import { GoogleCloudVisionV1p1beta1WebDetectionParams } from "./googlecloudvisionv1p1beta1webdetectionparams";
/**
 * Image context and/or feature-specific parameters.
**/
export declare class GoogleCloudVisionV1p1beta1ImageContext extends SpeakeasyBase {
    cropHintsParams?: GoogleCloudVisionV1p1beta1CropHintsParams;
    languageHints?: string[];
    latLongRect?: GoogleCloudVisionV1p1beta1LatLongRect;
    productSearchParams?: GoogleCloudVisionV1p1beta1ProductSearchParams;
    textDetectionParams?: GoogleCloudVisionV1p1beta1TextDetectionParams;
    webDetectionParams?: GoogleCloudVisionV1p1beta1WebDetectionParams;
}
