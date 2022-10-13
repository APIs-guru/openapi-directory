from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies:
    source_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceField' }})
    source_field_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceFieldValue' }})
    
