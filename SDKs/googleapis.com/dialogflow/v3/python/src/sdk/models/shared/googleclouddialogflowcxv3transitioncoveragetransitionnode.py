from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3flow
from . import googleclouddialogflowcxv3page


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode:
    flow: Optional[googleclouddialogflowcxv3flow.GoogleCloudDialogflowCxV3Flow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flow' }})
    page: Optional[googleclouddialogflowcxv3page.GoogleCloudDialogflowCxV3Page] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    
