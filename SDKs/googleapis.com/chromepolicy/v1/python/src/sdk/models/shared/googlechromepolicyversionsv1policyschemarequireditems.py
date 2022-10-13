from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1PolicySchemaRequiredItems:
    field_conditions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldConditions' }})
    required_fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredFields' }})
    
