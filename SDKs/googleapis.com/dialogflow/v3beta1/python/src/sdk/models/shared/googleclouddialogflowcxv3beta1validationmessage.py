from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1resourcename

class GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum(str, Enum):
    RESOURCE_TYPE_UNSPECIFIED = "RESOURCE_TYPE_UNSPECIFIED"
    AGENT = "AGENT"
    INTENT = "INTENT"
    INTENT_TRAINING_PHRASE = "INTENT_TRAINING_PHRASE"
    INTENT_PARAMETER = "INTENT_PARAMETER"
    INTENTS = "INTENTS"
    INTENT_TRAINING_PHRASES = "INTENT_TRAINING_PHRASES"
    ENTITY_TYPE = "ENTITY_TYPE"
    ENTITY_TYPES = "ENTITY_TYPES"
    WEBHOOK = "WEBHOOK"
    FLOW = "FLOW"
    PAGE = "PAGE"
    PAGES = "PAGES"
    TRANSITION_ROUTE_GROUP = "TRANSITION_ROUTE_GROUP"

class GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ValidationMessage:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    resource_names: Optional[List[googleclouddialogflowcxv3beta1resourcename.GoogleCloudDialogflowCxV3beta1ResourceName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceNames' }})
    resource_type: Optional[GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    severity: Optional[GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    
