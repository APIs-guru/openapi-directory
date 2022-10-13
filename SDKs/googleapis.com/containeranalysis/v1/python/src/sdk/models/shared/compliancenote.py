from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cisbenchmark
from . import complianceversion


@dataclass_json
@dataclass
class ComplianceNote:
    cis_benchmark: Optional[cisbenchmark.CisBenchmark] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cisBenchmark' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    rationale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rationale' }})
    remediation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remediation' }})
    scan_instructions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scanInstructions' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    version: Optional[List[complianceversion.ComplianceVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
