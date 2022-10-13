from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scastatus_enum


@dataclass_json
@dataclass
class ScaStatusResponse:
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'psuMessage' }})
    sca_status: scastatus_enum.ScaStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaStatus' }})
    trusted_beneficiary_flag: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trustedBeneficiaryFlag' }})
    
