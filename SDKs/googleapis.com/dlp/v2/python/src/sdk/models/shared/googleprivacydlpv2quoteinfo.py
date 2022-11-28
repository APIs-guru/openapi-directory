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
class GooglePrivacyDlpV2QuoteInfo:
    r"""GooglePrivacyDlpV2QuoteInfo
    Message for infoType-dependent details parsed from quote.
    """
    
    date_time: Optional[GooglePrivacyDlpV2DateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTime') }})
    
