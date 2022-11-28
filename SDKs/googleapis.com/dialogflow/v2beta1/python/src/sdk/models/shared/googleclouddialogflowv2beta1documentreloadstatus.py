from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1DocumentReloadStatus:
    r"""GoogleCloudDialogflowV2beta1DocumentReloadStatus
    The status of a reload attempt.
    """
    
    status: Optional[GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    
