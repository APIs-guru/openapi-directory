from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import challengedata
from . import chosenscamethod
from . import authenticationobject
from . import scastatus_enum


@dataclass_json
@dataclass
class StartScaprocessResponse:
    links: dict[str, hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    authorisation_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorisationId' }})
    challenge_data: Optional[challengedata.ChallengeData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challengeData' }})
    chosen_sca_method: Optional[chosenscamethod.ChosenScaMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chosenScaMethod' }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'psuMessage' }})
    sca_methods: Optional[List[authenticationobject.AuthenticationObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaMethods' }})
    sca_status: scastatus_enum.ScaStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaStatus' }})
    
