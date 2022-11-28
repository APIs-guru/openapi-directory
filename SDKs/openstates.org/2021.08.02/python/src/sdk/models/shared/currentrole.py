from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CurrentRole:
    org_classification: OrgClassificationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('org_classification') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    district: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('district') }})
    division_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('division_id') }})
    
