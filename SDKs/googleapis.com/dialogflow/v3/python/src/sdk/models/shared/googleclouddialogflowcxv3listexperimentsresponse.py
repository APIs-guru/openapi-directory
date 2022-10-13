from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3experiment


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ListExperimentsResponse:
    experiments: Optional[List[googleclouddialogflowcxv3experiment.GoogleCloudDialogflowCxV3Experiment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'experiments' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
