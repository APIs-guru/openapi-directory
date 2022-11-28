import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1BoundingPolyConfig } from "./googleclouddatalabelingv1beta1boundingpolyconfig";
import { GoogleCloudDatalabelingV1beta1EventConfig } from "./googleclouddatalabelingv1beta1eventconfig";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1ImageClassificationConfig } from "./googleclouddatalabelingv1beta1imageclassificationconfig";
import { GoogleCloudDatalabelingV1beta1ObjectDetectionConfig } from "./googleclouddatalabelingv1beta1objectdetectionconfig";
import { GoogleCloudDatalabelingV1beta1ObjectTrackingConfig } from "./googleclouddatalabelingv1beta1objecttrackingconfig";
import { GoogleCloudDatalabelingV1beta1PolylineConfig } from "./googleclouddatalabelingv1beta1polylineconfig";
import { GoogleCloudDatalabelingV1beta1SegmentationConfig } from "./googleclouddatalabelingv1beta1segmentationconfig";
import { GoogleCloudDatalabelingV1beta1TextClassificationConfig } from "./googleclouddatalabelingv1beta1textclassificationconfig";
import { GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig } from "./googleclouddatalabelingv1beta1textentityextractionconfig";
import { GoogleCloudDatalabelingV1beta1VideoClassificationConfig } from "./googleclouddatalabelingv1beta1videoclassificationconfig";



// GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata
/** 
 * Metadata on AnnotatedDataset.
**/
export class GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPolyConfig" })
  boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;

  @SpeakeasyMetadata({ data: "json, name=eventConfig" })
  eventConfig?: GoogleCloudDatalabelingV1beta1EventConfig;

  @SpeakeasyMetadata({ data: "json, name=humanAnnotationConfig" })
  humanAnnotationConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;

  @SpeakeasyMetadata({ data: "json, name=imageClassificationConfig" })
  imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;

  @SpeakeasyMetadata({ data: "json, name=objectDetectionConfig" })
  objectDetectionConfig?: GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;

  @SpeakeasyMetadata({ data: "json, name=objectTrackingConfig" })
  objectTrackingConfig?: GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;

  @SpeakeasyMetadata({ data: "json, name=polylineConfig" })
  polylineConfig?: GoogleCloudDatalabelingV1beta1PolylineConfig;

  @SpeakeasyMetadata({ data: "json, name=segmentationConfig" })
  segmentationConfig?: GoogleCloudDatalabelingV1beta1SegmentationConfig;

  @SpeakeasyMetadata({ data: "json, name=textClassificationConfig" })
  textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;

  @SpeakeasyMetadata({ data: "json, name=textEntityExtractionConfig" })
  textEntityExtractionConfig?: GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;

  @SpeakeasyMetadata({ data: "json, name=videoClassificationConfig" })
  videoClassificationConfig?: GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
}
