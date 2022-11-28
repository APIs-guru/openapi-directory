from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies:
    r"""GoogleChromePolicyVersionsV1PolicySchemaFieldDependencies
    The field and the value it must have for another field to be allowed to be set.
    """
    
    source_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceField') }})
    source_field_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceFieldValue') }})
    
