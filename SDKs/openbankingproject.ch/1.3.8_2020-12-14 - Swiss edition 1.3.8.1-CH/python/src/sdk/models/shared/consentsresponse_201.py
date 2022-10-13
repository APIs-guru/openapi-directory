from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import challengedata
from . import chosenscamethod
from . import consentstatus_enum
from . import authenticationobject


@dataclass_json
@dataclass
class ConsentsResponse201:
    links: dict[str, hreftype.HrefType] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    challenge_data: Optional[challengedata.ChallengeData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challengeData' }})
    chosen_sca_method: Optional[chosenscamethod.ChosenScaMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chosenScaMethod' }})
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentId' }})
    consent_status: consentstatus_enum.ConsentStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentStatus' }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'psuMessage' }})
    sca_methods: Optional[List[authenticationobject.AuthenticationObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaMethods' }})
    
