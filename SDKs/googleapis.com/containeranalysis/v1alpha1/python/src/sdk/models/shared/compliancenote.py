from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComplianceNote:
    r"""ComplianceNote
    ComplianceNote encapsulates all information about a specific compliance check.
    """
    
    cis_benchmark: Optional[CisBenchmark] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cisBenchmark') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    rationale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rationale') }})
    remediation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remediation') }})
    scan_instructions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scanInstructions') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    version: Optional[List[ComplianceVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
