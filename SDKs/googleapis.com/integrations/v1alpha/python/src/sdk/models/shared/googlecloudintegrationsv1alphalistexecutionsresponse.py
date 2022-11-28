from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListExecutionsResponse:
    r"""GoogleCloudIntegrationsV1alphaListExecutionsResponse
    Response for listing the integration execution data.
    """
    
    execution_infos: Optional[List[EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionInfos') }})
    executions: Optional[List[GoogleCloudIntegrationsV1alphaExecution]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executions') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
