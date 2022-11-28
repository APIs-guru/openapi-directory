from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Session:
    r"""Session
    A session in the Cloud Spanner API.
    """
    
    approximate_last_use_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approximateLastUseTime') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorRole') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class SessionInput:
    r"""SessionInput
    A session in the Cloud Spanner API.
    """
    
    creator_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorRole') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    
