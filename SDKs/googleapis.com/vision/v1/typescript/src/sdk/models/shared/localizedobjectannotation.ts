import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";



// LocalizedObjectAnnotation
/** 
 * Set of detected objects with bounding boxes.
**/
export class LocalizedObjectAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=mid" })
  mid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;
}
