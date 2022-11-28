from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DomainJoinMachineRequest:
    r"""DomainJoinMachineRequest
    DomainJoinMachineRequest is the request message for DomainJoinMachine method
    """
    
    ou_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ouName') }})
    vm_id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmIdToken') }})
    
