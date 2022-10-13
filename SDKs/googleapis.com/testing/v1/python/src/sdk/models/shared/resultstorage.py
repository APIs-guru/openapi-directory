from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudstorage
from . import toolresultsexecution
from . import toolresultshistory


@dataclass_json
@dataclass
class ResultStorage:
    google_cloud_storage: Optional[googlecloudstorage.GoogleCloudStorage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleCloudStorage' }})
    results_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultsUrl' }})
    tool_results_execution: Optional[toolresultsexecution.ToolResultsExecution] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toolResultsExecution' }})
    tool_results_history: Optional[toolresultshistory.ToolResultsHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toolResultsHistory' }})
    
