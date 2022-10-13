from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import _linkssigningbasket
from . import challengedata
from . import chosenscamethod
from . import authenticationobject
from . import tppmessage2xx
from . import transactionstatus_sbs_enum


@dataclass_json
@dataclass
class SigningBasketResponse201:
    links: _linkssigningbasket.LinksSigningBasket = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    basket_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basketId' }})
    challenge_data: Optional[challengedata.ChallengeData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challengeData' }})
    chosen_sca_method: Optional[chosenscamethod.ChosenScaMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chosenScaMethod' }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'psuMessage' }})
    sca_methods: Optional[List[authenticationobject.AuthenticationObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaMethods' }})
    tpp_messages: Optional[List[tppmessage2xx.TppMessage2Xx]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tppMessages' }})
    transaction_status: transactionstatus_sbs_enum.TransactionStatusSbsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionStatus' }})
    
