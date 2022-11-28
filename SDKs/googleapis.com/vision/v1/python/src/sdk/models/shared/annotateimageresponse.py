from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnnotateImageResponse:
    r"""AnnotateImageResponse
    Response to an image annotation request.
    """
    
    context: Optional[ImageAnnotationContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    crop_hints_annotation: Optional[CropHintsAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cropHintsAnnotation') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    face_annotations: Optional[List[FaceAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faceAnnotations') }})
    full_text_annotation: Optional[TextAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullTextAnnotation') }})
    image_properties_annotation: Optional[ImageProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePropertiesAnnotation') }})
    label_annotations: Optional[List[EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelAnnotations') }})
    landmark_annotations: Optional[List[EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landmarkAnnotations') }})
    localized_object_annotations: Optional[List[LocalizedObjectAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localizedObjectAnnotations') }})
    logo_annotations: Optional[List[EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoAnnotations') }})
    product_search_results: Optional[ProductSearchResults] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productSearchResults') }})
    safe_search_annotation: Optional[SafeSearchAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safeSearchAnnotation') }})
    text_annotations: Optional[List[EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textAnnotations') }})
    web_detection: Optional[WebDetection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webDetection') }})
    
