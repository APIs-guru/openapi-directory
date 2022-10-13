from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import noncompliantfile


@dataclass_json
@dataclass
class ComplianceOccurrence:
    non_compliance_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonComplianceReason' }})
    non_compliant_files: Optional[List[noncompliantfile.NonCompliantFile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonCompliantFiles' }})
    
