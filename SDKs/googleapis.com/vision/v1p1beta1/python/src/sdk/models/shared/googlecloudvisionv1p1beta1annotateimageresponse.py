from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1AnnotateImageResponse:
    r"""GoogleCloudVisionV1p1beta1AnnotateImageResponse
    Response to an image annotation request.
    """
    
    context: Optional[GoogleCloudVisionV1p1beta1ImageAnnotationContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    crop_hints_annotation: Optional[GoogleCloudVisionV1p1beta1CropHintsAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cropHintsAnnotation') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    face_annotations: Optional[List[GoogleCloudVisionV1p1beta1FaceAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faceAnnotations') }})
    full_text_annotation: Optional[GoogleCloudVisionV1p1beta1TextAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullTextAnnotation') }})
    image_properties_annotation: Optional[GoogleCloudVisionV1p1beta1ImageProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePropertiesAnnotation') }})
    label_annotations: Optional[List[GoogleCloudVisionV1p1beta1EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelAnnotations') }})
    landmark_annotations: Optional[List[GoogleCloudVisionV1p1beta1EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landmarkAnnotations') }})
    localized_object_annotations: Optional[List[GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedObjectAnnotations') }})
    logo_annotations: Optional[List[GoogleCloudVisionV1p1beta1EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoAnnotations') }})
    product_search_results: Optional[GoogleCloudVisionV1p1beta1ProductSearchResults] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSearchResults') }})
    safe_search_annotation: Optional[GoogleCloudVisionV1p1beta1SafeSearchAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safeSearchAnnotation') }})
    text_annotations: Optional[List[GoogleCloudVisionV1p1beta1EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textAnnotations') }})
    web_detection: Optional[GoogleCloudVisionV1p1beta1WebDetection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webDetection') }})
    
