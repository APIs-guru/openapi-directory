from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BulkMuteFindingsRequest:
    r"""BulkMuteFindingsRequest
    Request message for bulk findings update. Note: 1. If multiple bulk update requests match the same resource, the order in which they get executed is not defined. 2. Once a bulk operation is started, there is no way to stop it.
    """
    
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    mute_annotation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('muteAnnotation') }})
    
