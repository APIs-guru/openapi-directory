from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AndroidAppAsset:
    r"""AndroidAppAsset
    Describes an android app asset.
    """
    
    certificate: Optional[CertificateInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    
