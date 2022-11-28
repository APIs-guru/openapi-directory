from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ObTransactionCardInstrument1AuthorisationTypeEnum(str, Enum):
    CONSUMER_DEVICE = "ConsumerDevice"
    CONTACTLESS = "Contactless"
    NONE = "None"
    PIN = "PIN"

class ObTransactionCardInstrument1CardSchemeNameEnum(str, Enum):
    AMERICAN_EXPRESS = "AmericanExpress"
    DINERS = "Diners"
    DISCOVER = "Discover"
    MASTER_CARD = "MasterCard"
    VISA = "VISA"


@dataclass_json
@dataclass
class ObTransactionCardInstrument1:
    r"""ObTransactionCardInstrument1
    Set of elements to describe the card instrument used in the transaction.
    """
    
    card_scheme_name: ObTransactionCardInstrument1CardSchemeNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CardSchemeName') }})
    authorisation_type: Optional[ObTransactionCardInstrument1AuthorisationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AuthorisationType') }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identification') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
