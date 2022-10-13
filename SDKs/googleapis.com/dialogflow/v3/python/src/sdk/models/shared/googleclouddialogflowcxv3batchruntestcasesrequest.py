from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3BatchRunTestCasesRequest:
    environment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    test_cases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testCases' }})
    
