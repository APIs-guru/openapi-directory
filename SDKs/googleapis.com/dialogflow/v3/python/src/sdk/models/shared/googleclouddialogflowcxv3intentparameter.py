from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3IntentParameter:
    r"""GoogleCloudDialogflowCxV3IntentParameter
    Represents an intent parameter.
    """
    
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityType') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isList') }})
    redact: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redact') }})
    
