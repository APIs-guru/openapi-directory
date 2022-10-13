from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import annotationsource
from . import imageannotation
from . import resourceannotation
from . import sensitivetextannotation


@dataclass_json
@dataclass
class Annotation:
    annotation_source: Optional[annotationsource.AnnotationSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationSource' }})
    custom_data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customData' }})
    image_annotation: Optional[imageannotation.ImageAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageAnnotation' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_annotation: Optional[resourceannotation.ResourceAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceAnnotation' }})
    text_annotation: Optional[sensitivetextannotation.SensitiveTextAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textAnnotation' }})
    
