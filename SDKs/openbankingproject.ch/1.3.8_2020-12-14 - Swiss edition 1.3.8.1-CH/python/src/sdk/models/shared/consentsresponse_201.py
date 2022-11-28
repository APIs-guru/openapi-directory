from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ConsentsResponse201:
    r"""ConsentsResponse201
    Body of the JSON response for a successful consent request.
    """
    
    links: dict[str, HrefType] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentId') }})
    consent_status: ConsentStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentStatus') }})
    challenge_data: Optional[ChallengeData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challengeData') }})
    chosen_sca_method: Optional[ChosenScaMethod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chosenScaMethod') }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuMessage') }})
    sca_methods: Optional[List[AuthenticationObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaMethods') }})
    
