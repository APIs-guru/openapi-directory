import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation } from "./googleclouddatalabelingv1beta1imageboundingpolyannotation";
import { GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation } from "./googleclouddatalabelingv1beta1imageclassificationannotation";
import { GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation } from "./googleclouddatalabelingv1beta1imagepolylineannotation";
import { GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation } from "./googleclouddatalabelingv1beta1imagesegmentationannotation";
import { GoogleCloudDatalabelingV1beta1TextClassificationAnnotation } from "./googleclouddatalabelingv1beta1textclassificationannotation";
import { GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation } from "./googleclouddatalabelingv1beta1textentityextractionannotation";
import { GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation } from "./googleclouddatalabelingv1beta1videoclassificationannotation";
import { GoogleCloudDatalabelingV1beta1VideoEventAnnotation } from "./googleclouddatalabelingv1beta1videoeventannotation";
import { GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation } from "./googleclouddatalabelingv1beta1videoobjecttrackingannotation";
/**
 * Annotation value for an example.
**/
export declare class GoogleCloudDatalabelingV1beta1AnnotationValue extends SpeakeasyBase {
    imageBoundingPolyAnnotation?: GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation;
    imageClassificationAnnotation?: GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation;
    imagePolylineAnnotation?: GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation;
    imageSegmentationAnnotation?: GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation;
    textClassificationAnnotation?: GoogleCloudDatalabelingV1beta1TextClassificationAnnotation;
    textEntityExtractionAnnotation?: GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation;
    videoClassificationAnnotation?: GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation;
    videoEventAnnotation?: GoogleCloudDatalabelingV1beta1VideoEventAnnotation;
    videoObjectTrackingAnnotation?: GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation;
}
