from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AchievementResetResponse:
    r"""AchievementResetResponse
    An achievement reset response.
    """
    
    current_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentState') }})
    definition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definitionId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    update_occurred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateOccurred') }})
    
