from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2fulfillmentfeature
from . import googleclouddialogflowv2fulfillmentgenericwebservice


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2Fulfillment:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    features: Optional[List[googleclouddialogflowv2fulfillmentfeature.GoogleCloudDialogflowV2FulfillmentFeature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    generic_web_service: Optional[googleclouddialogflowv2fulfillmentgenericwebservice.GoogleCloudDialogflowV2FulfillmentGenericWebService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genericWebService' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
