from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ComplianceVersion:
    r"""ComplianceVersion
    Describes the CIS benchmark version that is applicable to a given OS and os version.
    """
    
    benchmark_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('benchmarkDocument') }})
    cpe_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpeUri') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
