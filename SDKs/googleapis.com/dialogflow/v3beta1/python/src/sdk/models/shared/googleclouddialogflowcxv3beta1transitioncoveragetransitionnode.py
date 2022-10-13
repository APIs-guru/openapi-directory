from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1flow
from . import googleclouddialogflowcxv3beta1page


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode:
    flow: Optional[googleclouddialogflowcxv3beta1flow.GoogleCloudDialogflowCxV3beta1Flow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flow' }})
    page: Optional[googleclouddialogflowcxv3beta1page.GoogleCloudDialogflowCxV3beta1Page] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    
