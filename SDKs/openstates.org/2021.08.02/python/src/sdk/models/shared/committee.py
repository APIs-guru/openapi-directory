from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Committee:
    classification: CommitteeClassificationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    extras: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('extras') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_id') }})
    links: Optional[List[Link]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    memberships: Optional[List[CommitteeMembership]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberships') }})
    other_names: Optional[List[AltName]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('other_names') }})
    sources: Optional[List[Link]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sources') }})
    
