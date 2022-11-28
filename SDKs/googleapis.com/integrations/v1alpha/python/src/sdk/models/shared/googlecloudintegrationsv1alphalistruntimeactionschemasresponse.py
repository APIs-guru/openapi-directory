from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse:
    r"""GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse
    Response for listing RuntimeActionSchemas for a specific Connection.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    runtime_action_schemas: Optional[List[GoogleCloudIntegrationsV1alphaRuntimeActionSchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeActionSchemas') }})
    
