from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddatalabelingv1beta1imageboundingpolyannotation
from . import googleclouddatalabelingv1beta1imageclassificationannotation
from . import googleclouddatalabelingv1beta1imagepolylineannotation
from . import googleclouddatalabelingv1beta1imagesegmentationannotation
from . import googleclouddatalabelingv1beta1textclassificationannotation
from . import googleclouddatalabelingv1beta1textentityextractionannotation
from . import googleclouddatalabelingv1beta1videoclassificationannotation
from . import googleclouddatalabelingv1beta1videoeventannotation
from . import googleclouddatalabelingv1beta1videoobjecttrackingannotation


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1AnnotationValue:
    image_bounding_poly_annotation: Optional[googleclouddatalabelingv1beta1imageboundingpolyannotation.GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageBoundingPolyAnnotation' }})
    image_classification_annotation: Optional[googleclouddatalabelingv1beta1imageclassificationannotation.GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageClassificationAnnotation' }})
    image_polyline_annotation: Optional[googleclouddatalabelingv1beta1imagepolylineannotation.GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePolylineAnnotation' }})
    image_segmentation_annotation: Optional[googleclouddatalabelingv1beta1imagesegmentationannotation.GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageSegmentationAnnotation' }})
    text_classification_annotation: Optional[googleclouddatalabelingv1beta1textclassificationannotation.GoogleCloudDatalabelingV1beta1TextClassificationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textClassificationAnnotation' }})
    text_entity_extraction_annotation: Optional[googleclouddatalabelingv1beta1textentityextractionannotation.GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textEntityExtractionAnnotation' }})
    video_classification_annotation: Optional[googleclouddatalabelingv1beta1videoclassificationannotation.GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoClassificationAnnotation' }})
    video_event_annotation: Optional[googleclouddatalabelingv1beta1videoeventannotation.GoogleCloudDatalabelingV1beta1VideoEventAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoEventAnnotation' }})
    video_object_tracking_annotation: Optional[googleclouddatalabelingv1beta1videoobjecttrackingannotation.GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoObjectTrackingAnnotation' }})
    
