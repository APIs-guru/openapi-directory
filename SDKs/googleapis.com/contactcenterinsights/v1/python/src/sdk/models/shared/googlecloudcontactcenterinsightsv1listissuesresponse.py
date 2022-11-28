from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ListIssuesResponse:
    r"""GoogleCloudContactcenterinsightsV1ListIssuesResponse
    The response of listing issues.
    """
    
    issues: Optional[List[GoogleCloudContactcenterinsightsV1Issue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    
