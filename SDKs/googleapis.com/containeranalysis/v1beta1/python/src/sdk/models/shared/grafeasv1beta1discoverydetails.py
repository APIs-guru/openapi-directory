from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrafeasV1beta1DiscoveryDetails:
    r"""GrafeasV1beta1DiscoveryDetails
    Details of a discovery occurrence.
    """
    
    discovered: Optional[Discovered] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discovered') }})
    
