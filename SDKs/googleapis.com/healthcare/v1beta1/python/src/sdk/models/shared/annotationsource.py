from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnnotationSource:
    r"""AnnotationSource
    AnnotationSource holds the source information of the annotation.
    """
    
    cloud_healthcare_source: Optional[CloudHealthcareSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudHealthcareSource') }})
    
