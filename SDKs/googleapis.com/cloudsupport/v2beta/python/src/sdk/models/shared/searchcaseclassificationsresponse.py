from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchCaseClassificationsResponse:
    r"""SearchCaseClassificationsResponse
    The response message for SearchCaseClassifications endpoint.
    """
    
    case_classifications: Optional[List[CaseClassification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caseClassifications') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
