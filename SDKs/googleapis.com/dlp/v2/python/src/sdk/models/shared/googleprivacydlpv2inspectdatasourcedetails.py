from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InspectDataSourceDetails:
    r"""GooglePrivacyDlpV2InspectDataSourceDetails
    The results of an inspect DataSource job.
    """
    
    requested_options: Optional[GooglePrivacyDlpV2RequestedOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedOptions') }})
    result: Optional[GooglePrivacyDlpV2Result] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
