from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3eventhandler
from . import googleclouddialogflowcxv3transitioncoveragetransitionnode
from . import googleclouddialogflowcxv3transitioncoveragetransitionnode
from . import googleclouddialogflowcxv3transitionroute


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3TransitionCoverageTransition:
    covered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'covered' }})
    event_handler: Optional[googleclouddialogflowcxv3eventhandler.GoogleCloudDialogflowCxV3EventHandler] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventHandler' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    source: Optional[googleclouddialogflowcxv3transitioncoveragetransitionnode.GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    target: Optional[googleclouddialogflowcxv3transitioncoveragetransitionnode.GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    transition_route: Optional[googleclouddialogflowcxv3transitionroute.GoogleCloudDialogflowCxV3TransitionRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionRoute' }})
    
