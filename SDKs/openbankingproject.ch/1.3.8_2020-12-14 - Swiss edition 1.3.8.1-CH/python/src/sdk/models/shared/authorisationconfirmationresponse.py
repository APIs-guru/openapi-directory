from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuthorisationConfirmationResponse:
    r"""AuthorisationConfirmationResponse
    Body of the JSON response for an authorisation confirmation request.
    """
    
    links: dict[str, HrefType] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    sca_status: ScaStatusAuthorisationConfirmationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaStatus') }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuMessage') }})
    
