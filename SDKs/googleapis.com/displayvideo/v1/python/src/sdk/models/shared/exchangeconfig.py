from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExchangeConfig:
    r"""ExchangeConfig
    Settings that control which exchanges are enabled for a partner.
    """
    
    enabled_exchanges: Optional[List[ExchangeConfigEnabledExchange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledExchanges') }})
    
