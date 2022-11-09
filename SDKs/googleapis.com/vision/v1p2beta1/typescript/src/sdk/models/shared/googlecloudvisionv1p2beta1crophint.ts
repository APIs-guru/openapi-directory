import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";


// GoogleCloudVisionV1p2beta1CropHint
/** 
 * Single crop hint that is used to generate a new crop when serving an image.
**/
export class GoogleCloudVisionV1p2beta1CropHint extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=importanceFraction" })
  importanceFraction?: number;
}
