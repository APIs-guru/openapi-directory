from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TaxSettingsResponseTaxationModeEnum(str, Enum):
    EXCLUSIVE = "EXCLUSIVE"
    INCLUSIVE = "INCLUSIVE"

class TaxSettingsResponseTaxationTypeEnum(str, Enum):
    NONE = "NONE"
    SALES_TAX = "SALES_TAX"
    VAT = "VAT"


@dataclass_json
@dataclass
class TaxSettingsResponse:
    organization_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationUuid' }})
    taxation_mode: Optional[TaxSettingsResponseTaxationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxationMode' }})
    taxation_type: Optional[TaxSettingsResponseTaxationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxationType' }})
    
