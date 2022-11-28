from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RestoreDomainRequest:
    r"""RestoreDomainRequest
    RestoreDomainRequest is the request received by RestoreDomain rpc
    """
    
    backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupId') }})
    
