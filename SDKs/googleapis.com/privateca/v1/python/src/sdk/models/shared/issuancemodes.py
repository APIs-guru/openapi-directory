from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IssuanceModes:
    allow_config_based_issuance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowConfigBasedIssuance' }})
    allow_csr_based_issuance: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowCsrBasedIssuance' }})
    
