from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1eventhandler
from . import googleclouddialogflowcxv3beta1transitioncoveragetransitionnode
from . import googleclouddialogflowcxv3beta1transitioncoveragetransitionnode
from . import googleclouddialogflowcxv3beta1transitionroute


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition:
    covered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'covered' }})
    event_handler: Optional[googleclouddialogflowcxv3beta1eventhandler.GoogleCloudDialogflowCxV3beta1EventHandler] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventHandler' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    source: Optional[googleclouddialogflowcxv3beta1transitioncoveragetransitionnode.GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    target: Optional[googleclouddialogflowcxv3beta1transitioncoveragetransitionnode.GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    transition_route: Optional[googleclouddialogflowcxv3beta1transitionroute.GoogleCloudDialogflowCxV3beta1TransitionRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitionRoute' }})
    
