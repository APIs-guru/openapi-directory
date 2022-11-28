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
class DateShiftConfig:
    r"""DateShiftConfig
    Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination.
    """
    
    crypto_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKey') }})
    kms_wrapped: Optional[KmsWrappedCryptoKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsWrapped') }})
    
