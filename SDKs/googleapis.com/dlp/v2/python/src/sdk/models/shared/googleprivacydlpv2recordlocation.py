from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2RecordLocation:
    r"""GooglePrivacyDlpV2RecordLocation
    Location of a finding within a row or record.
    """
    
    field_id: Optional[GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldId') }})
    record_key: Optional[GooglePrivacyDlpV2RecordKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordKey') }})
    table_location: Optional[GooglePrivacyDlpV2TableLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableLocation') }})
    
