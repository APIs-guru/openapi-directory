from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AppliedLabelChangeDetailTypesEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    LABEL_ADDED = "LABEL_ADDED"
    LABEL_REMOVED = "LABEL_REMOVED"
    LABEL_FIELD_VALUE_CHANGED = "LABEL_FIELD_VALUE_CHANGED"
    LABEL_APPLIED_BY_ITEM_CREATE = "LABEL_APPLIED_BY_ITEM_CREATE"


@dataclass_json
@dataclass
class AppliedLabelChangeDetail:
    r"""AppliedLabelChangeDetail
    A change made to a Label on the Target.
    """
    
    field_changes: Optional[List[FieldValueChange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldChanges') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    types: Optional[List[AppliedLabelChangeDetailTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('types') }})
    
