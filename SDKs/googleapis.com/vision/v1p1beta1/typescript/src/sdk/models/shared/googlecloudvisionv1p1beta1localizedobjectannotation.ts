import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";



// GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation
/** 
 * Set of detected objects with bounding boxes.
**/
export class GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=mid" })
  mid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
