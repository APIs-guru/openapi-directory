from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Location:
    r"""GooglePrivacyDlpV2Location
    Specifies the location of the finding.
    """
    
    byte_range: Optional[GooglePrivacyDlpV2Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byteRange') }})
    codepoint_range: Optional[GooglePrivacyDlpV2Range] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codepointRange') }})
    container: Optional[GooglePrivacyDlpV2Container] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    content_locations: Optional[List[GooglePrivacyDlpV2ContentLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentLocations') }})
    
