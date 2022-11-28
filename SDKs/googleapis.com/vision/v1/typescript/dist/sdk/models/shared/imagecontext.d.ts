import { SpeakeasyBase } from "../../../internal/utils";
import { CropHintsParams } from "./crophintsparams";
import { LatLongRect } from "./latlongrect";
import { ProductSearchParams } from "./productsearchparams";
import { TextDetectionParams } from "./textdetectionparams";
import { WebDetectionParams } from "./webdetectionparams";
/**
 * Image context and/or feature-specific parameters.
**/
export declare class ImageContext extends SpeakeasyBase {
    cropHintsParams?: CropHintsParams;
    languageHints?: string[];
    latLongRect?: LatLongRect;
    productSearchParams?: ProductSearchParams;
    textDetectionParams?: TextDetectionParams;
    webDetectionParams?: WebDetectionParams;
}
