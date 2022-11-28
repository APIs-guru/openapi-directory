from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest:
    r"""GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest
    The request message for TestCases.ImportTestCases.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsUri') }})
    
