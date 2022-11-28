from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SandboxRequest:
    r"""SandboxRequest
    Request to create a new sandbox
    """
    
    sandbox_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sandboxId') }})
    
