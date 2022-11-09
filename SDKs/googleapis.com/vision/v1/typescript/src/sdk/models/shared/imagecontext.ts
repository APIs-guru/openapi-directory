import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=cropHintsParams" })
  cropHintsParams?: CropHintsParams;

  @Metadata({ data: "json, name=languageHints" })
  languageHints?: string[];

  @Metadata({ data: "json, name=latLongRect" })
  latLongRect?: LatLongRect;

  @Metadata({ data: "json, name=productSearchParams" })
  productSearchParams?: ProductSearchParams;

  @Metadata({ data: "json, name=textDetectionParams" })
  textDetectionParams?: TextDetectionParams;

  @Metadata({ data: "json, name=webDetectionParams" })
  webDetectionParams?: WebDetectionParams;
}
