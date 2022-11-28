from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Cve:
    r"""Cve
    CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org
    """
    
    cvssv3: Optional[Cvssv3] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cvssv3') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    references: Optional[List[Reference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    upstream_fix_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upstreamFixAvailable') }})
    
