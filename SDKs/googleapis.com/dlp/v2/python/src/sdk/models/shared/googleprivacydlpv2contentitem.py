from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ContentItem:
    byte_item: Optional[GooglePrivacyDlpV2ByteContentItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byteItem') }})
    table: Optional[GooglePrivacyDlpV2Table] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
