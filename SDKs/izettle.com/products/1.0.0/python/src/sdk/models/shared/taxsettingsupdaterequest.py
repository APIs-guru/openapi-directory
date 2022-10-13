from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class TaxSettingsUpdateRequestTaxationModeEnum(str, Enum):
    EXCLUSIVE = "EXCLUSIVE"
    INCLUSIVE = "INCLUSIVE"


@dataclass_json
@dataclass
class TaxSettingsUpdateRequest:
    taxation_mode: TaxSettingsUpdateRequestTaxationModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxationMode' }})
    
