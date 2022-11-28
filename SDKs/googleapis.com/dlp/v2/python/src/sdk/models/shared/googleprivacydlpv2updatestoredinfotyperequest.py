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
class GooglePrivacyDlpV2UpdateStoredInfoTypeRequest:
    r"""GooglePrivacyDlpV2UpdateStoredInfoTypeRequest
    Request message for UpdateStoredInfoType.
    """
    
    config: Optional[GooglePrivacyDlpV2StoredInfoTypeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
