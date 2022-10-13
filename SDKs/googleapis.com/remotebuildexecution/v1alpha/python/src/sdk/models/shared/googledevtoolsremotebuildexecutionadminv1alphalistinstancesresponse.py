from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googledevtoolsremotebuildexecutionadminv1alphainstance


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse:
    instances: Optional[List[googledevtoolsremotebuildexecutionadminv1alphainstance.GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
