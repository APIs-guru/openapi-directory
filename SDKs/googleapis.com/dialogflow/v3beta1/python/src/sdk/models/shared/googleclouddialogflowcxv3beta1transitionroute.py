from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1fulfillment


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1TransitionRoute:
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    intent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intent' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    target_flow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetFlow' }})
    target_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetPage' }})
    trigger_fulfillment: Optional[googleclouddialogflowcxv3beta1fulfillment.GoogleCloudDialogflowCxV3beta1Fulfillment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerFulfillment' }})
    
