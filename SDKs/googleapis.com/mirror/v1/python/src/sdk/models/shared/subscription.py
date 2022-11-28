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
class Subscription:
    r"""Subscription
    A subscription to events on a collection.
    """
    
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callbackUrl') }})
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    notification: Optional[Notification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    operation: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userToken') }})
    verify_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifyToken') }})
    
