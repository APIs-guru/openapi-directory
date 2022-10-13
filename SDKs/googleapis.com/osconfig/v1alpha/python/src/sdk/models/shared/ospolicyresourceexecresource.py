from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ospolicyresourceexecresourceexec
from . import ospolicyresourceexecresourceexec


@dataclass_json
@dataclass
class OsPolicyResourceExecResource:
    enforce: Optional[ospolicyresourceexecresourceexec.OsPolicyResourceExecResourceExec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforce' }})
    validate: Optional[ospolicyresourceexecresourceexec.OsPolicyResourceExecResourceExec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validate' }})
    
