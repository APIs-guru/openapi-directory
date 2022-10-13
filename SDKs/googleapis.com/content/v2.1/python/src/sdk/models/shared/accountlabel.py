from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AccountLabelLabelTypeEnum(str, Enum):
    LABEL_TYPE_UNSPECIFIED = "LABEL_TYPE_UNSPECIFIED"
    MANUAL = "MANUAL"
    AUTOMATIC = "AUTOMATIC"


@dataclass_json
@dataclass
class AccountLabel:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    label_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelId' }})
    label_type: Optional[AccountLabelLabelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
