from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InfoTypeTransformation:
    r"""InfoTypeTransformation
    A transformation to apply to text that is identified as a specific info_type.
    """
    
    character_mask_config: Optional[CharacterMaskConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('characterMaskConfig') }})
    crypto_hash_config: Optional[CryptoHashConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoHashConfig') }})
    date_shift_config: Optional[DateShiftConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateShiftConfig') }})
    info_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoTypes') }})
    redact_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redactConfig') }})
    replace_with_info_type_config: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replaceWithInfoTypeConfig') }})
    
