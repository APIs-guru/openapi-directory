from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SlsaCompleteness:
    r"""SlsaCompleteness
    Indicates that the builder claims certain fields in this message to be complete.
    """
    
    arguments: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arguments') }})
    environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    materials: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    
