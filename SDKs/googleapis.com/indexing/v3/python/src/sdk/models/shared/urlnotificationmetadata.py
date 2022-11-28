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
class URLNotificationMetadata:
    r"""URLNotificationMetadata
    Summary of the most recent Indexing API notifications successfully received, for a given URL.
    """
    
    latest_remove: Optional[URLNotification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestRemove') }})
    latest_update: Optional[URLNotification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestUpdate') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
