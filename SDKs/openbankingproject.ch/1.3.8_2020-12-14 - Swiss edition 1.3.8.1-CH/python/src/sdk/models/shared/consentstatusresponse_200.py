from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConsentStatusResponse200:
    r"""ConsentStatusResponse200
    Body of the JSON response for a successful get status request for a consent.
    """
    
    consent_status: ConsentStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentStatus') }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuMessage') }})
    
