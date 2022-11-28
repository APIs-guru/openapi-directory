from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SigningBasketResponse201:
    r"""SigningBasketResponse201
    Body of the JSON response for a successful create signing basket request.
    """
    
    links: LinksSigningBasket = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    basket_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('basketId') }})
    transaction_status: TransactionStatusSbsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionStatus') }})
    challenge_data: Optional[ChallengeData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challengeData') }})
    chosen_sca_method: Optional[ChosenScaMethod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chosenScaMethod') }})
    psu_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('psuMessage') }})
    sca_methods: Optional[List[AuthenticationObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scaMethods') }})
    tpp_messages: Optional[List[TppMessage2Xx]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tppMessages') }})
    
