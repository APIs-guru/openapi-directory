from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConfigManagementBinauthzVersion:
    r"""ConfigManagementBinauthzVersion
    The version of binauthz.
    """
    
    webhook_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookVersion') }})
    
