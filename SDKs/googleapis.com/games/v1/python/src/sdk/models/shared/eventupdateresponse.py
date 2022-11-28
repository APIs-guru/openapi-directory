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
class EventUpdateResponse:
    r"""EventUpdateResponse
    An event period update resource.
    """
    
    batch_failures: Optional[List[EventBatchRecordFailure]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('batchFailures') }})
    event_failures: Optional[List[EventRecordFailure]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventFailures') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    player_events: Optional[List[PlayerEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerEvents') }})
    
