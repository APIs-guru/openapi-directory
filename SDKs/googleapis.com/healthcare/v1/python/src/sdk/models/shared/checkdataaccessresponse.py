from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import consentevaluation


@dataclass_json
@dataclass
class CheckDataAccessResponse:
    consent_details: Optional[dict[str, consentevaluation.ConsentEvaluation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentDetails' }})
    consented: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consented' }})
    
