from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SavedQuery:
    r"""SavedQuery
    The definition of a saved query. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    matter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matterId') }})
    query: Optional[Query] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    saved_query_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savedQueryId') }})
    
