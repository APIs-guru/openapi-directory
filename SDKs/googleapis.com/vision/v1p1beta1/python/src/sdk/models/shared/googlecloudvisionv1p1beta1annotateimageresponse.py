from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudvisionv1p1beta1imageannotationcontext
from . import googlecloudvisionv1p1beta1crophintsannotation
from . import status
from . import googlecloudvisionv1p1beta1faceannotation
from . import googlecloudvisionv1p1beta1textannotation
from . import googlecloudvisionv1p1beta1imageproperties
from . import googlecloudvisionv1p1beta1entityannotation
from . import googlecloudvisionv1p1beta1entityannotation
from . import googlecloudvisionv1p1beta1localizedobjectannotation
from . import googlecloudvisionv1p1beta1entityannotation
from . import googlecloudvisionv1p1beta1productsearchresults
from . import googlecloudvisionv1p1beta1safesearchannotation
from . import googlecloudvisionv1p1beta1entityannotation
from . import googlecloudvisionv1p1beta1webdetection


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1AnnotateImageResponse:
    context: Optional[googlecloudvisionv1p1beta1imageannotationcontext.GoogleCloudVisionV1p1beta1ImageAnnotationContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    crop_hints_annotation: Optional[googlecloudvisionv1p1beta1crophintsannotation.GoogleCloudVisionV1p1beta1CropHintsAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cropHintsAnnotation' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    face_annotations: Optional[List[googlecloudvisionv1p1beta1faceannotation.GoogleCloudVisionV1p1beta1FaceAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faceAnnotations' }})
    full_text_annotation: Optional[googlecloudvisionv1p1beta1textannotation.GoogleCloudVisionV1p1beta1TextAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullTextAnnotation' }})
    image_properties_annotation: Optional[googlecloudvisionv1p1beta1imageproperties.GoogleCloudVisionV1p1beta1ImageProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePropertiesAnnotation' }})
    label_annotations: Optional[List[googlecloudvisionv1p1beta1entityannotation.GoogleCloudVisionV1p1beta1EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelAnnotations' }})
    landmark_annotations: Optional[List[googlecloudvisionv1p1beta1entityannotation.GoogleCloudVisionV1p1beta1EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'landmarkAnnotations' }})
    localized_object_annotations: Optional[List[googlecloudvisionv1p1beta1localizedobjectannotation.GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizedObjectAnnotations' }})
    logo_annotations: Optional[List[googlecloudvisionv1p1beta1entityannotation.GoogleCloudVisionV1p1beta1EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logoAnnotations' }})
    product_search_results: Optional[googlecloudvisionv1p1beta1productsearchresults.GoogleCloudVisionV1p1beta1ProductSearchResults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productSearchResults' }})
    safe_search_annotation: Optional[googlecloudvisionv1p1beta1safesearchannotation.GoogleCloudVisionV1p1beta1SafeSearchAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safeSearchAnnotation' }})
    text_annotations: Optional[List[googlecloudvisionv1p1beta1entityannotation.GoogleCloudVisionV1p1beta1EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAnnotations' }})
    web_detection: Optional[googlecloudvisionv1p1beta1webdetection.GoogleCloudVisionV1p1beta1WebDetection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webDetection' }})
    
