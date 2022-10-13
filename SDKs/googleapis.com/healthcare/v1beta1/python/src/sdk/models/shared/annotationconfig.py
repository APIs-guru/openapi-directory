from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AnnotationConfig:
    annotation_store_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationStoreName' }})
    store_quote: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeQuote' }})
    
