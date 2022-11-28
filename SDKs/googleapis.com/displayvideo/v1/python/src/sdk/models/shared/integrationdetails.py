from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IntegrationDetails:
    r"""IntegrationDetails
    Integration details of an entry.
    """
    
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    integration_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrationCode') }})
    
