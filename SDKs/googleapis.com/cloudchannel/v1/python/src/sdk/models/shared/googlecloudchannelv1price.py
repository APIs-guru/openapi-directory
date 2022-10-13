from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypemoney
from . import googletypemoney


@dataclass_json
@dataclass
class GoogleCloudChannelV1Price:
    base_price: Optional[googletypemoney.GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basePrice' }})
    discount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount' }})
    effective_price: Optional[googletypemoney.GoogleTypeMoney] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectivePrice' }})
    external_price_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalPriceUri' }})
    
