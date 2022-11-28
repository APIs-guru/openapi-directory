from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DomainJoinMachineResponse:
    r"""DomainJoinMachineResponse
    DomainJoinMachineResponse is the response message for DomainJoinMachine method
    """
    
    domain_join_blob: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainJoinBlob') }})
    
