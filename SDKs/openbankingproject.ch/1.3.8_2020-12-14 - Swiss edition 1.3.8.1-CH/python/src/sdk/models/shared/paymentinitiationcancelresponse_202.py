from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hreftype
from . import challengedata
from . import chosenscamethod
from . import authenticationobject
from . import transactionstatus_enum


@dataclass_json
@dataclass
class PaymentInitiationCancelResponse202:
    links: Optional[dict[str, hreftype.HrefType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    challenge_data: Optional[challengedata.ChallengeData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challengeData' }})
    chosen_sca_method: Optional[chosenscamethod.ChosenScaMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chosenScaMethod' }})
    sca_methods: Optional[List[authenticationobject.AuthenticationObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaMethods' }})
    transaction_status: transactionstatus_enum.TransactionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionStatus' }})
    
