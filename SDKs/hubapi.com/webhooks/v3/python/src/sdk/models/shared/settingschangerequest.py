from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SettingsChangeRequest:
    r"""SettingsChangeRequest
    New or updated webhook settings for an app.
    """
    
    target_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUrl') }})
    throttling: ThrottlingSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttling') }})
    
