from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import caseclassification


@dataclass_json
@dataclass
class SearchCaseClassificationsResponse:
    case_classifications: Optional[List[caseclassification.CaseClassification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseClassifications' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
