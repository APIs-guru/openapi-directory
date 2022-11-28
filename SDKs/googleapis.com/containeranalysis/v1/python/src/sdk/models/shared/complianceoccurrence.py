from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComplianceOccurrence:
    r"""ComplianceOccurrence
    An indication that the compliance checks in the associated ComplianceNote were not satisfied for particular resources or a specified reason.
    """
    
    non_compliance_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonComplianceReason') }})
    non_compliant_files: Optional[List[NonCompliantFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonCompliantFiles') }})
    
