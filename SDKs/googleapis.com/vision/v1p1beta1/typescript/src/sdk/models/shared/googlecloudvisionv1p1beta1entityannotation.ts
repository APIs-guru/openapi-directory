import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
import { GoogleCloudVisionV1p1beta1LocationInfo } from "./googlecloudvisionv1p1beta1locationinfo";
import { GoogleCloudVisionV1p1beta1Property } from "./googlecloudvisionv1p1beta1property";


// GoogleCloudVisionV1p1beta1EntityAnnotation
/** 
 * Set of detected entity features.
**/
export class GoogleCloudVisionV1p1beta1EntityAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

  @Metadata({ data: "json, name=confidence" })
  confidence?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=locations", elemType: shared.GoogleCloudVisionV1p1beta1LocationInfo })
  locations?: GoogleCloudVisionV1p1beta1LocationInfo[];

  @Metadata({ data: "json, name=mid" })
  mid?: string;

  @Metadata({ data: "json, name=properties", elemType: shared.GoogleCloudVisionV1p1beta1Property })
  properties?: GoogleCloudVisionV1p1beta1Property[];

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=topicality" })
  topicality?: number;
}
