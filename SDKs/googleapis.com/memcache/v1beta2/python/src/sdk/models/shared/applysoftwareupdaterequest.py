from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApplySoftwareUpdateRequest:
    r"""ApplySoftwareUpdateRequest
    Request for ApplySoftwareUpdate.
    """
    
    apply_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyAll') }})
    node_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeIds') }})
    
