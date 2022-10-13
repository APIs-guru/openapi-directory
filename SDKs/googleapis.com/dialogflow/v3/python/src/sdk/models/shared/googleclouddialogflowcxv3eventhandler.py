from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3fulfillment


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3EventHandler:
    event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    target_flow: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetFlow' }})
    target_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetPage' }})
    trigger_fulfillment: Optional[googleclouddialogflowcxv3fulfillment.GoogleCloudDialogflowCxV3Fulfillment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggerFulfillment' }})
    
