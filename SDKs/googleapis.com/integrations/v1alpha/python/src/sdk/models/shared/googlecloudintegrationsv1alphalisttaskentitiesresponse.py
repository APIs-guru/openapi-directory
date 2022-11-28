from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListTaskEntitiesResponse:
    r"""GoogleCloudIntegrationsV1alphaListTaskEntitiesResponse
    This is a UI only method and will be moved away. Response for ListTaskEntities.
    """
    
    task_entities: Optional[List[EnterpriseCrmFrontendsEventbusProtoTaskEntity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskEntities') }})
    
