from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2EntityTypeBatch:
    r"""GoogleCloudDialogflowV2EntityTypeBatch
    This message is a wrapper around a collection of entity types.
    """
    
    entity_types: Optional[List[GoogleCloudDialogflowV2EntityType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityTypes') }})
    
