from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3BatchDeleteTestCasesRequest:
    r"""GoogleCloudDialogflowCxV3BatchDeleteTestCasesRequest
    The request message for TestCases.BatchDeleteTestCases.
    """
    
    names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    
