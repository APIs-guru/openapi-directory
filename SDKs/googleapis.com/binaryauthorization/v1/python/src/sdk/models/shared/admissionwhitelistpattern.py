from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdmissionWhitelistPattern:
    r"""AdmissionWhitelistPattern
    An admission allowlist pattern exempts images from checks by admission rules.
    """
    
    name_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namePattern') }})
    
