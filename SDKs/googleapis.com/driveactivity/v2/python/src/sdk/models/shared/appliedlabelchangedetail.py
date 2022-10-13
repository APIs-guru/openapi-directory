from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import fieldvaluechange

class AppliedLabelChangeDetailTypesEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    LABEL_ADDED = "LABEL_ADDED"
    LABEL_REMOVED = "LABEL_REMOVED"
    LABEL_FIELD_VALUE_CHANGED = "LABEL_FIELD_VALUE_CHANGED"
    LABEL_APPLIED_BY_ITEM_CREATE = "LABEL_APPLIED_BY_ITEM_CREATE"


@dataclass_json
@dataclass
class AppliedLabelChangeDetail:
    field_changes: Optional[List[fieldvaluechange.FieldValueChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldChanges' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    types: Optional[List[AppliedLabelChangeDetailTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    
