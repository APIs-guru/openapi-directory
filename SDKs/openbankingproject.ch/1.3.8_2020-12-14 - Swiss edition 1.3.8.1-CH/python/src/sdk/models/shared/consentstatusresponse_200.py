from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import consentstatus_enum


@dataclass_json
@dataclass
class ConsentStatusResponse200:
    consent_status: consentstatus_enum.ConsentStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentStatus' }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'psuMessage' }})
    
