from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LargeResponseFaultConfig:
    r"""LargeResponseFaultConfig
    Config for large response injection fault
    """
    
    ratio: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratio') }})
    additional_request_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalRequestSize') }})
    
