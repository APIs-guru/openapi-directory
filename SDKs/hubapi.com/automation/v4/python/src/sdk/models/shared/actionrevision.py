from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActionRevision:
    r"""ActionRevision
    A revision of this custom action.
    """
    
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    definition: ExtensionActionDefinition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    revision_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
