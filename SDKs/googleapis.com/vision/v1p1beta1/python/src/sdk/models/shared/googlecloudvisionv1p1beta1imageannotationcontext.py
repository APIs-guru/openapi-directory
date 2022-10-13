from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1ImageAnnotationContext:
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNumber' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
