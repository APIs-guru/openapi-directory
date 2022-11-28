from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Table:
    r"""GooglePrivacyDlpV2Table
    Structured content to inspect. Up to 50,000 `Value`s per request allowed. See https://cloud.google.com/dlp/docs/inspecting-structured-text#inspecting_a_table to learn more.
    """
    
    headers: Optional[List[GooglePrivacyDlpV2FieldID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    rows: Optional[List[GooglePrivacyDlpV2Row]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
