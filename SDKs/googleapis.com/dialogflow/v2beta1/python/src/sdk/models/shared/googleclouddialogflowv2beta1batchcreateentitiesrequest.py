from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest:
    r"""GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest
    The request message for EntityTypes.BatchCreateEntities.
    """
    
    entities: Optional[List[GoogleCloudDialogflowV2beta1EntityTypeEntity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    
