from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchDeleteContactsRequest:
    r"""BatchDeleteContactsRequest
    A request to delete a batch of existing contacts.
    """
    
    resource_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceNames') }})
    
