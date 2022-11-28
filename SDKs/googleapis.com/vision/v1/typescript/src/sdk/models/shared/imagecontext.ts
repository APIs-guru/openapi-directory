import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CropHintsParams } from "./crophintsparams";
import { LatLongRect } from "./latlongrect";
import { ProductSearchParams } from "./productsearchparams";
import { TextDetectionParams } from "./textdetectionparams";
import { WebDetectionParams } from "./webdetectionparams";



// ImageContext
/** 
 * Image context and/or feature-specific parameters.
**/
export class ImageContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cropHintsParams" })
  cropHintsParams?: CropHintsParams;

  @SpeakeasyMetadata({ data: "json, name=languageHints" })
  languageHints?: string[];

  @SpeakeasyMetadata({ data: "json, name=latLongRect" })
  latLongRect?: LatLongRect;

  @SpeakeasyMetadata({ data: "json, name=productSearchParams" })
  productSearchParams?: ProductSearchParams;

  @SpeakeasyMetadata({ data: "json, name=textDetectionParams" })
  textDetectionParams?: TextDetectionParams;

  @SpeakeasyMetadata({ data: "json, name=webDetectionParams" })
  webDetectionParams?: WebDetectionParams;
}
