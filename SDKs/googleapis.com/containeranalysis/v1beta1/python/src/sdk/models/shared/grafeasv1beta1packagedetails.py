from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GrafeasV1beta1PackageDetailsInput:
    r"""GrafeasV1beta1PackageDetailsInput
    Details of a package occurrence.
    """
    
    installation: Optional[InstallationInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installation') }})
    

@dataclass_json
@dataclass
class GrafeasV1beta1PackageDetails:
    r"""GrafeasV1beta1PackageDetails
    Details of a package occurrence.
    """
    
    installation: Optional[Installation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installation') }})
    
