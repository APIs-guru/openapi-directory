from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import links
from . import meta


@dataclass_json
@dataclass
class ObReadOffer1DataOfferAmount:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    

@dataclass_json
@dataclass
class ObReadOffer1DataOfferFee:
    amount: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Currency' }})
    
class ObReadOffer1DataOfferOfferTypeEnum(str, Enum):
    BALANCE_TRANSFER = "BalanceTransfer"
    LIMIT_INCREASE = "LimitIncrease"
    MONEY_TRANSFER = "MoneyTransfer"
    OTHER = "Other"
    PROMOTIONAL_RATE = "PromotionalRate"


@dataclass_json
@dataclass
class ObReadOffer1DataOffer:
    account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    amount: Optional[ObReadOffer1DataOfferAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    end_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fee: Optional[ObReadOffer1DataOfferFee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Fee' }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OfferId' }})
    offer_type: Optional[ObReadOffer1DataOfferOfferTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OfferType' }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rate' }})
    start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Term' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'URL' }})
    value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    

@dataclass_json
@dataclass
class ObReadOffer1Data:
    offer: Optional[List[ObReadOffer1DataOffer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Offer' }})
    

@dataclass_json
@dataclass
class ObReadOffer1:
    data: ObReadOffer1Data = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    links: Optional[links.Links] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Links' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Meta' }})
    
