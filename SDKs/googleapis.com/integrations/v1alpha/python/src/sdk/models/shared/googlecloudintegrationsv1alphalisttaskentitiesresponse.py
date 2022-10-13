from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import enterprisecrmfrontendseventbusprototaskentity


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListTaskEntitiesResponse:
    task_entities: Optional[List[enterprisecrmfrontendseventbusprototaskentity.EnterpriseCrmFrontendsEventbusProtoTaskEntity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskEntities' }})
    
