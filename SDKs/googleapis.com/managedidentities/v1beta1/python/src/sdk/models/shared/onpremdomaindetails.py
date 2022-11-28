from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OnPremDomainDetails:
    r"""OnPremDomainDetails
    OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.
    """
    
    disable_sid_filtering: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableSidFiltering') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainName') }})
    
