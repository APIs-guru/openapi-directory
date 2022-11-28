from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest:
    r"""GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest
    The request message for EntityTypes.BatchUpdateEntityTypes.
    """
    
    entity_type_batch_inline: Optional[GoogleCloudDialogflowV2beta1EntityTypeBatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityTypeBatchInline') }})
    entity_type_batch_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entityTypeBatchUri') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
