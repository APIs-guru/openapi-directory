from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import structureddataobject


@dataclass_json
@dataclass
class ObjectValues:
    values: Optional[List[structureddataobject.StructuredDataObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    
