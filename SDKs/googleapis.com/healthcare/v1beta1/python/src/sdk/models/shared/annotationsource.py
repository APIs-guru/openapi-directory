from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudhealthcaresource


@dataclass_json
@dataclass
class AnnotationSource:
    cloud_healthcare_source: Optional[cloudhealthcaresource.CloudHealthcareSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudHealthcareSource' }})
    
