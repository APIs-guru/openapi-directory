from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import institutionalidentification2


@dataclass_json
@dataclass
class DebtorAgent7Ch:
    bic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bic' }})
    iid: Optional[institutionalidentification2.InstitutionalIdentification2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iid' }})
    
