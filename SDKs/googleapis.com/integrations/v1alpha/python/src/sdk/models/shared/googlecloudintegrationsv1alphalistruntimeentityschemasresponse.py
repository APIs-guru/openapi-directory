from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse:
    r"""GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse
    Response for listing RuntimeEntitySchemas for a specific Connection.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    runtime_entity_schemas: Optional[List[GoogleCloudIntegrationsV1alphaRuntimeEntitySchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeEntitySchemas') }})
    
