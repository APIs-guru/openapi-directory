from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum(str, Enum):
    ENTITY_OVERRIDE_MODE_UNSPECIFIED = "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    ENTITY_OVERRIDE_MODE_OVERRIDE = "ENTITY_OVERRIDE_MODE_OVERRIDE"
    ENTITY_OVERRIDE_MODE_SUPPLEMENT = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SessionEntityType:
    r"""GoogleCloudDialogflowV2SessionEntityType
    A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session).
    """
    
    entities: Optional[List[GoogleCloudDialogflowV2EntityTypeEntity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    entity_override_mode: Optional[GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityOverrideMode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
