import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BoundingPoly } from "./boundingpoly";
import { LocationInfo } from "./locationinfo";
import { Property } from "./property";


// EntityAnnotation
/** 
 * Set of detected entity features.
**/
export class EntityAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: BoundingPoly;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=locations", elemType: shared.LocationInfo })
  locations?: LocationInfo[];

  @Metadata({ data: "json, name=mid" })
  mid?: string;

  @Metadata({ data: "json, name=properties", elemType: shared.Property })
  properties?: Property[];

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=topicality" })
  topicality?: number;
}
