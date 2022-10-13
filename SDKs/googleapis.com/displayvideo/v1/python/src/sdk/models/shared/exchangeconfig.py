from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import exchangeconfigenabledexchange


@dataclass_json
@dataclass
class ExchangeConfig:
    enabled_exchanges: Optional[List[exchangeconfigenabledexchange.ExchangeConfigEnabledExchange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledExchanges' }})
    
