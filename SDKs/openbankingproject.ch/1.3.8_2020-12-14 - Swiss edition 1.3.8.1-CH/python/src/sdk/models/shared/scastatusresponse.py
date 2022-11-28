from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScaStatusResponse:
    r"""ScaStatusResponse
    Body of the JSON response with SCA Status.
    """
    
    sca_status: ScaStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaStatus') }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuMessage') }})
    trusted_beneficiary_flag: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trustedBeneficiaryFlag') }})
    
