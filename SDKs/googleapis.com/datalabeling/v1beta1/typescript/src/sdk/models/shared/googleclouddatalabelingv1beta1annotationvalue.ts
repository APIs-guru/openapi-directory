import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation } from "./googleclouddatalabelingv1beta1imageboundingpolyannotation";
import { GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation } from "./googleclouddatalabelingv1beta1imageclassificationannotation";
import { GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation } from "./googleclouddatalabelingv1beta1imagepolylineannotation";
import { GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation } from "./googleclouddatalabelingv1beta1imagesegmentationannotation";
import { GoogleCloudDatalabelingV1beta1TextClassificationAnnotation } from "./googleclouddatalabelingv1beta1textclassificationannotation";
import { GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation } from "./googleclouddatalabelingv1beta1textentityextractionannotation";
import { GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation } from "./googleclouddatalabelingv1beta1videoclassificationannotation";
import { GoogleCloudDatalabelingV1beta1VideoEventAnnotation } from "./googleclouddatalabelingv1beta1videoeventannotation";
import { GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation } from "./googleclouddatalabelingv1beta1videoobjecttrackingannotation";



// GoogleCloudDatalabelingV1beta1AnnotationValue
/** 
 * Annotation value for an example.
**/
export class GoogleCloudDatalabelingV1beta1AnnotationValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageBoundingPolyAnnotation" })
  imageBoundingPolyAnnotation?: GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation;

  @SpeakeasyMetadata({ data: "json, name=imageClassificationAnnotation" })
  imageClassificationAnnotation?: GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation;

  @SpeakeasyMetadata({ data: "json, name=imagePolylineAnnotation" })
  imagePolylineAnnotation?: GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation;

  @SpeakeasyMetadata({ data: "json, name=imageSegmentationAnnotation" })
  imageSegmentationAnnotation?: GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation;

  @SpeakeasyMetadata({ data: "json, name=textClassificationAnnotation" })
  textClassificationAnnotation?: GoogleCloudDatalabelingV1beta1TextClassificationAnnotation;

  @SpeakeasyMetadata({ data: "json, name=textEntityExtractionAnnotation" })
  textEntityExtractionAnnotation?: GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation;

  @SpeakeasyMetadata({ data: "json, name=videoClassificationAnnotation" })
  videoClassificationAnnotation?: GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation;

  @SpeakeasyMetadata({ data: "json, name=videoEventAnnotation" })
  videoEventAnnotation?: GoogleCloudDatalabelingV1beta1VideoEventAnnotation;

  @SpeakeasyMetadata({ data: "json, name=videoObjectTrackingAnnotation" })
  videoObjectTrackingAnnotation?: GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation;
}
