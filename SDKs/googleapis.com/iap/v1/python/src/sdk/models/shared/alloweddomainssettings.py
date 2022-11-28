from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AllowedDomainsSettings:
    r"""AllowedDomainsSettings
    Configuration for IAP allowed domains. Lets you to restrict access to an app and allow access to only the domains that you list.
    """
    
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    enable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enable') }})
    
