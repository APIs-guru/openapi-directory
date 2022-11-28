from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudHealthcareV1beta1DeidentifyOptions:
    r"""GoogleCloudHealthcareV1beta1DeidentifyOptions
    Specifies additional options to apply to the base `profile`.
    """
    
    character_mask_config: Optional[CharacterMaskConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('characterMaskConfig') }})
    contextual_deid: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contextualDeid') }})
    crypto_hash_config: Optional[CryptoHashConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoHashConfig') }})
    date_shift_config: Optional[DateShiftConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateShiftConfig') }})
    keep_extensions: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepExtensions') }})
    
