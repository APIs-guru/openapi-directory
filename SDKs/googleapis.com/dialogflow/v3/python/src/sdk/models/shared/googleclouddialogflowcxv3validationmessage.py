from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum(str, Enum):
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

class GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum(str, Enum):
    SEVERITY_UNSPECIFIED = "SEVERITY_UNSPECIFIED"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ValidationMessage:
    r"""GoogleCloudDialogflowCxV3ValidationMessage
    Agent/flow validation message.
    """
    
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    resource_names: Optional[List[GoogleCloudDialogflowCxV3ResourceName]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceNames') }})
    resource_type: Optional[GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    resources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    severity: Optional[GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
