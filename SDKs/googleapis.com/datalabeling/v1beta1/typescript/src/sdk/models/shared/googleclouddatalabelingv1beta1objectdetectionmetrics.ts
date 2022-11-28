import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1PrCurve } from "./googleclouddatalabelingv1beta1prcurve";



// GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics
/** 
 * Metrics calculated for an image object detection (bounding box) model.
**/
export class GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=prCurve" })
  prCurve?: GoogleCloudDatalabelingV1beta1PrCurve;
}
