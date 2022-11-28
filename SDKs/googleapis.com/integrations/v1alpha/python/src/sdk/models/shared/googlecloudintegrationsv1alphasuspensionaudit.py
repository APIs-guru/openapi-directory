from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSuspensionAudit:
    r"""GoogleCloudIntegrationsV1alphaSuspensionAudit
    Contains when and by whom the suspension was resolved.
    """
    
    resolve_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolveTime') }})
    resolver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolver') }})
    
