import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=boundingPolyConfig" })
  boundingPolyConfig?: GoogleCloudDatalabelingV1beta1BoundingPolyConfig;

  @Metadata({ data: "json, name=eventConfig" })
  eventConfig?: GoogleCloudDatalabelingV1beta1EventConfig;

  @Metadata({ data: "json, name=humanAnnotationConfig" })
  humanAnnotationConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;

  @Metadata({ data: "json, name=imageClassificationConfig" })
  imageClassificationConfig?: GoogleCloudDatalabelingV1beta1ImageClassificationConfig;

  @Metadata({ data: "json, name=objectDetectionConfig" })
  objectDetectionConfig?: GoogleCloudDatalabelingV1beta1ObjectDetectionConfig;

  @Metadata({ data: "json, name=objectTrackingConfig" })
  objectTrackingConfig?: GoogleCloudDatalabelingV1beta1ObjectTrackingConfig;

  @Metadata({ data: "json, name=polylineConfig" })
  polylineConfig?: GoogleCloudDatalabelingV1beta1PolylineConfig;

  @Metadata({ data: "json, name=segmentationConfig" })
  segmentationConfig?: GoogleCloudDatalabelingV1beta1SegmentationConfig;

  @Metadata({ data: "json, name=textClassificationConfig" })
  textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;

  @Metadata({ data: "json, name=textEntityExtractionConfig" })
  textEntityExtractionConfig?: GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;

  @Metadata({ data: "json, name=videoClassificationConfig" })
  videoClassificationConfig?: GoogleCloudDatalabelingV1beta1VideoClassificationConfig;
}
