from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SigningBasketResponse200:
    r"""SigningBasketResponse200
    Body of the JSON response for a successful get signing basket request.
    
      * 'payments': payment initiations which shall be authorised through this signing basket.
      * 'consents': consent objects which shall be authorised through this signing basket.
      * 'transactionStatus': Only the codes RCVD, ACTC, RJCT are used.
      * '_links': The ASPSP might integrate hyperlinks to indicate next (authorisation) steps to be taken.
    
    """
    
    transaction_status: TransactionStatusSbsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionStatus') }})
    links: Optional[LinksSigningBasket] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    consents: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consents') }})
    payments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    
