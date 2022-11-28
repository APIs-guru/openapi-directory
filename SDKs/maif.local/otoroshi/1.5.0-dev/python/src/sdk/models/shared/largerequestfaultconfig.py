from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LargeRequestFaultConfig:
    r"""LargeRequestFaultConfig
    Config for large request injection fault
    """
    
    additional_request_size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalRequestSize') }})
    ratio: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratio') }})
    
