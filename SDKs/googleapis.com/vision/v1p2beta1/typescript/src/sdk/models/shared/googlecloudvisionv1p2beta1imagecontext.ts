import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVisionV1p2beta1CropHintsParams } from "./googlecloudvisionv1p2beta1crophintsparams";
import { GoogleCloudVisionV1p2beta1LatLongRect } from "./googlecloudvisionv1p2beta1latlongrect";
import { GoogleCloudVisionV1p2beta1ProductSearchParams } from "./googlecloudvisionv1p2beta1productsearchparams";
import { GoogleCloudVisionV1p2beta1TextDetectionParams } from "./googlecloudvisionv1p2beta1textdetectionparams";
import { GoogleCloudVisionV1p2beta1WebDetectionParams } from "./googlecloudvisionv1p2beta1webdetectionparams";


// GoogleCloudVisionV1p2beta1ImageContext
/** 
 * Image context and/or feature-specific parameters.
**/
export class GoogleCloudVisionV1p2beta1ImageContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=cropHintsParams" })
  cropHintsParams?: GoogleCloudVisionV1p2beta1CropHintsParams;

  @Metadata({ data: "json, name=languageHints" })
  languageHints?: string[];

  @Metadata({ data: "json, name=latLongRect" })
  latLongRect?: GoogleCloudVisionV1p2beta1LatLongRect;

  @Metadata({ data: "json, name=productSearchParams" })
  productSearchParams?: GoogleCloudVisionV1p2beta1ProductSearchParams;

  @Metadata({ data: "json, name=textDetectionParams" })
  textDetectionParams?: GoogleCloudVisionV1p2beta1TextDetectionParams;

  @Metadata({ data: "json, name=webDetectionParams" })
  webDetectionParams?: GoogleCloudVisionV1p2beta1WebDetectionParams;
}
