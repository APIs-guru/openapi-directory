import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";


// GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation
/** 
 * Set of detected objects with bounding boxes.
**/
export class GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=mid" })
  mid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;
}
