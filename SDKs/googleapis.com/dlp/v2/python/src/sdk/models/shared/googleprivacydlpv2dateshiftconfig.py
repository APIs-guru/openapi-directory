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
class GooglePrivacyDlpV2DateShiftConfig:
    r"""GooglePrivacyDlpV2DateShiftConfig
    Shifts dates by random number of days, with option to be consistent for the same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting to learn more.
    """
    
    context: Optional[GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    crypto_key: Optional[GooglePrivacyDlpV2CryptoKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKey') }})
    lower_bound_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowerBoundDays') }})
    upper_bound_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upperBoundDays') }})
    
