import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";
import { LocationInfo } from "./locationinfo";
import { Property } from "./property";



// EntityAnnotation
/** 
 * Set of detected entity features.
**/
export class EntityAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=locations", elemType: LocationInfo })
  locations?: LocationInfo[];

  @SpeakeasyMetadata({ data: "json, name=mid" })
  mid?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: Property })
  properties?: Property[];

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=topicality" })
  topicality?: number;
}
