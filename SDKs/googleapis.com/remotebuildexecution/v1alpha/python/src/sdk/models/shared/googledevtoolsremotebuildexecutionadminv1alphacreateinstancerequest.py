from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googledevtoolsremotebuildexecutionadminv1alphainstance


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest:
    instance: Optional[googledevtoolsremotebuildexecutionadminv1alphainstance.GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceId' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    
