from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2KeyValuePairHint:
    r"""GoogleCloudDocumentaiV1beta2KeyValuePairHint
    Reserved for future use.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueTypes') }})
    
