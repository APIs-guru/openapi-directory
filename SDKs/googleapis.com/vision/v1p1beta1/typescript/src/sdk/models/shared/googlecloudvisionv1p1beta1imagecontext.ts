import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1CropHintsParams } from "./googlecloudvisionv1p1beta1crophintsparams";
import { GoogleCloudVisionV1p1beta1LatLongRect } from "./googlecloudvisionv1p1beta1latlongrect";
import { GoogleCloudVisionV1p1beta1ProductSearchParams } from "./googlecloudvisionv1p1beta1productsearchparams";
import { GoogleCloudVisionV1p1beta1TextDetectionParams } from "./googlecloudvisionv1p1beta1textdetectionparams";
import { GoogleCloudVisionV1p1beta1WebDetectionParams } from "./googlecloudvisionv1p1beta1webdetectionparams";



// GoogleCloudVisionV1p1beta1ImageContext
/** 
 * Image context and/or feature-specific parameters.
**/
export class GoogleCloudVisionV1p1beta1ImageContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cropHintsParams" })
  cropHintsParams?: GoogleCloudVisionV1p1beta1CropHintsParams;

  @SpeakeasyMetadata({ data: "json, name=languageHints" })
  languageHints?: string[];

  @SpeakeasyMetadata({ data: "json, name=latLongRect" })
  latLongRect?: GoogleCloudVisionV1p1beta1LatLongRect;

  @SpeakeasyMetadata({ data: "json, name=productSearchParams" })
  productSearchParams?: GoogleCloudVisionV1p1beta1ProductSearchParams;

  @SpeakeasyMetadata({ data: "json, name=textDetectionParams" })
  textDetectionParams?: GoogleCloudVisionV1p1beta1TextDetectionParams;

  @SpeakeasyMetadata({ data: "json, name=webDetectionParams" })
  webDetectionParams?: GoogleCloudVisionV1p1beta1WebDetectionParams;
}
