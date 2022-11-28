from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum(str, Enum):
    ENTITY_OVERRIDE_MODE_UNSPECIFIED = "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
    ENTITY_OVERRIDE_MODE_OVERRIDE = "ENTITY_OVERRIDE_MODE_OVERRIDE"
    ENTITY_OVERRIDE_MODE_SUPPLEMENT = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1SessionEntityType:
    r"""GoogleCloudDialogflowCxV3beta1SessionEntityType
    Session entity types are referred to as **User** entity types and are entities that are built for an individual user such as favorites, preferences, playlists, and so on. You can redefine a session entity type at the session level to extend or replace a custom entity type at the user session level (we refer to the entity types defined at the agent level as \"custom entity types\"). Note: session entity types apply to all queries, regardless of the language. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview).
    """
    
    entities: Optional[List[GoogleCloudDialogflowCxV3beta1EntityTypeEntity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    entity_override_mode: Optional[GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityOverrideMode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
