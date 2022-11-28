from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Annotation:
    r"""Annotation
    An annotation record.
    """
    
    annotation_source: Optional[AnnotationSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSource') }})
    custom_data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customData') }})
    image_annotation: Optional[ImageAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageAnnotation') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_annotation: Optional[ResourceAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceAnnotation') }})
    text_annotation: Optional[SensitiveTextAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textAnnotation') }})
    
