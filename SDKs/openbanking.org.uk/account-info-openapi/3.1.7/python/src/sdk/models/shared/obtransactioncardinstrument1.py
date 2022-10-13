from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    authorisation_type: Optional[ObTransactionCardInstrument1AuthorisationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorisationType' }})
    card_scheme_name: ObTransactionCardInstrument1CardSchemeNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CardSchemeName' }})
    identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identification' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
