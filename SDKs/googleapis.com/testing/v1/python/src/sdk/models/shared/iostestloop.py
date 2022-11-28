from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IosTestLoop:
    r"""IosTestLoop
    A test of an iOS application that implements one or more game loop scenarios. This test type accepts an archived application (.ipa file) and a list of integer scenarios that will be executed on the app sequentially.
    """
    
    app_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appBundleId') }})
    app_ipa: Optional[FileReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appIpa') }})
    scenarios: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scenarios') }})
    
