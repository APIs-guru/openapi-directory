from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription:
    r"""GoogleChromePolicyVersionsV1PolicySchemaFieldKnownValueDescription
    Provides detailed information about a known value that is allowed for a particular field in a PolicySchema.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
