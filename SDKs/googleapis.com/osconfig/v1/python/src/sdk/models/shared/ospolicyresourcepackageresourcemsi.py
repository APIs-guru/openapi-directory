from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OsPolicyResourcePackageResourceMsi:
    r"""OsPolicyResourcePackageResourceMsi
    An MSI package. MSI packages only support INSTALLED state.
    """
    
    properties: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    source: Optional[OsPolicyResourceFile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
