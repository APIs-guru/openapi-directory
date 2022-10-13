from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import classificationcategory


@dataclass_json
@dataclass
class ClassifyTextResponse:
    categories: Optional[List[classificationcategory.ClassificationCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    
