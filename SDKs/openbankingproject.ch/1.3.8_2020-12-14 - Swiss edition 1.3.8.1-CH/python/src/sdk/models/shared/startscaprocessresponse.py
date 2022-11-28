from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartScaprocessResponse:
    r"""StartScaprocessResponse
    Body of the JSON response for a Start SCA authorisation request.
    """
    
    links: dict[str, HrefType] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    authorisation_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorisationId') }})
    sca_status: ScaStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaStatus') }})
    challenge_data: Optional[ChallengeData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challengeData') }})
    chosen_sca_method: Optional[ChosenScaMethod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chosenScaMethod') }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuMessage') }})
    sca_methods: Optional[List[AuthenticationObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaMethods') }})
    
