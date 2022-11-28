import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1BoundingPoly } from "./googleclouddatalabelingv1beta1boundingpoly";
import { GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly } from "./googleclouddatalabelingv1beta1normalizedboundingpoly";



// GoogleCloudDatalabelingV1beta1ObjectTrackingFrame
/** 
 * Video frame level annotation for object detection and tracking.
**/
export class GoogleCloudDatalabelingV1beta1ObjectTrackingFrame extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: GoogleCloudDatalabelingV1beta1BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=normalizedBoundingPoly" })
  normalizedBoundingPoly?: GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=timeOffset" })
  timeOffset?: string;
}
