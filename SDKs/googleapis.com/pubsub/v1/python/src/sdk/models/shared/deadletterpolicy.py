from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeadLetterPolicy:
    r"""DeadLetterPolicy
    Dead lettering is done on a best effort basis. The same message might be dead lettered multiple times. If validation on any of the fields fails at subscription creation/updation, the create/update subscription request will fail.
    """
    
    dead_letter_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deadLetterTopic') }})
    max_delivery_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDeliveryAttempts') }})
    
