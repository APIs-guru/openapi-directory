import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
import { GoogleCloudVisionV1p1beta1LocationInfo } from "./googlecloudvisionv1p1beta1locationinfo";
import { GoogleCloudVisionV1p1beta1Property } from "./googlecloudvisionv1p1beta1property";



// GoogleCloudVisionV1p1beta1EntityAnnotation
/** 
 * Set of detected entity features.
**/
export class GoogleCloudVisionV1p1beta1EntityAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=confidence" })
  confidence?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=locations", elemType: GoogleCloudVisionV1p1beta1LocationInfo })
  locations?: GoogleCloudVisionV1p1beta1LocationInfo[];

  @SpeakeasyMetadata({ data: "json, name=mid" })
  mid?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleCloudVisionV1p1beta1Property })
  properties?: GoogleCloudVisionV1p1beta1Property[];

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=topicality" })
  topicality?: number;
}
