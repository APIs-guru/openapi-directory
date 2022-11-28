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
class ConversionsBatchUpdateRequest:
    r"""ConversionsBatchUpdateRequest
    Update Conversions Request.
    """
    
    conversions: Optional[List[Conversion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversions') }})
    encryption_info: Optional[EncryptionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionInfo') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
