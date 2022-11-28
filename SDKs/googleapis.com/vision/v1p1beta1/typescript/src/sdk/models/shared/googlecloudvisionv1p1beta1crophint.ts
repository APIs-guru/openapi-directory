import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";



// GoogleCloudVisionV1p1beta1CropHint
/** 
 * Single crop hint that is used to generate a new crop when serving an image.
**/
export class GoogleCloudVisionV1p1beta1CropHint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=importanceFraction" })
  importanceFraction?: number;
}
