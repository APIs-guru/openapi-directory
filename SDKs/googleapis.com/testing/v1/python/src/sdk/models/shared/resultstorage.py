from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResultStorage:
    r"""ResultStorage
    Locations where the results of running the test are stored.
    """
    
    google_cloud_storage: Optional[GoogleCloudStorage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleCloudStorage') }})
    results_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultsUrl') }})
    tool_results_execution: Optional[ToolResultsExecution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolResultsExecution') }})
    tool_results_history: Optional[ToolResultsHistory] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolResultsHistory') }})
    
