from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ListIssueModelsResponse:
    r"""GoogleCloudContactcenterinsightsV1ListIssueModelsResponse
    The response of listing issue models.
    """
    
    issue_models: Optional[List[GoogleCloudContactcenterinsightsV1IssueModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueModels') }})
    
