from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import imageannotationcontext
from . import crophintsannotation
from . import status
from . import faceannotation
from . import textannotation
from . import imageproperties
from . import entityannotation
from . import entityannotation
from . import localizedobjectannotation
from . import entityannotation
from . import productsearchresults
from . import safesearchannotation
from . import entityannotation
from . import webdetection


@dataclass_json
@dataclass
class AnnotateImageResponse:
    context: Optional[imageannotationcontext.ImageAnnotationContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    crop_hints_annotation: Optional[crophintsannotation.CropHintsAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cropHintsAnnotation' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    face_annotations: Optional[List[faceannotation.FaceAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faceAnnotations' }})
    full_text_annotation: Optional[textannotation.TextAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullTextAnnotation' }})
    image_properties_annotation: Optional[imageproperties.ImageProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imagePropertiesAnnotation' }})
    label_annotations: Optional[List[entityannotation.EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelAnnotations' }})
    landmark_annotations: Optional[List[entityannotation.EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'landmarkAnnotations' }})
    localized_object_annotations: Optional[List[localizedobjectannotation.LocalizedObjectAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizedObjectAnnotations' }})
    logo_annotations: Optional[List[entityannotation.EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logoAnnotations' }})
    product_search_results: Optional[productsearchresults.ProductSearchResults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productSearchResults' }})
    safe_search_annotation: Optional[safesearchannotation.SafeSearchAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safeSearchAnnotation' }})
    text_annotations: Optional[List[entityannotation.EntityAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAnnotations' }})
    web_detection: Optional[webdetection.WebDetection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webDetection' }})
    
