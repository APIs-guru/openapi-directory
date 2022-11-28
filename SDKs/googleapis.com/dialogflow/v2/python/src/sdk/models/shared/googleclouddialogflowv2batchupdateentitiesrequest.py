from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2BatchUpdateEntitiesRequest:
    r"""GoogleCloudDialogflowV2BatchUpdateEntitiesRequest
    The request message for EntityTypes.BatchUpdateEntities.
    """
    
    entities: Optional[List[GoogleCloudDialogflowV2EntityTypeEntity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entities') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
