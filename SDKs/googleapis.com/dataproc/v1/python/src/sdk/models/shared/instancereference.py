from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InstanceReference:
    r"""InstanceReference
    A reference to a Compute Engine instance.
    """
    
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    public_ecies_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicEciesKey') }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKey') }})
    
