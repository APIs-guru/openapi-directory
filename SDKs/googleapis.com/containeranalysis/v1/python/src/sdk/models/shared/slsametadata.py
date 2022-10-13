from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import slsacompleteness


@dataclass_json
@dataclass
class SlsaMetadata:
    build_finished_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildFinishedOn' }})
    build_invocation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildInvocationId' }})
    build_started_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildStartedOn' }})
    completeness: Optional[slsacompleteness.SlsaCompleteness] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completeness' }})
    reproducible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reproducible' }})
    
