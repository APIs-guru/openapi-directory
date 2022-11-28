from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse:
    r"""GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse
    Response to list SfdcInstances.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    sfdc_instances: Optional[List[GoogleCloudIntegrationsV1alphaSfdcInstance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sfdcInstances') }})
    
