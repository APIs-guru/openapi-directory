from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Webhook:
    r"""Webhook
    A callback URL where events are posted
    """
    
    headers: dict[str, str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
