from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayPal:
    cancel_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancel_url' }})
    redirect_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_url' }})
    usd: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usd' }})
    
