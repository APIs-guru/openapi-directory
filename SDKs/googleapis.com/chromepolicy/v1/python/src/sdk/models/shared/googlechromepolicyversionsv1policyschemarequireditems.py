from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1PolicySchemaRequiredItems:
    r"""GoogleChromePolicyVersionsV1PolicySchemaRequiredItems
    The fields that will become required based on the value of this field.
    """
    
    field_conditions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldConditions') }})
    required_fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiredFields') }})
    
