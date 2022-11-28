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
class UpdateTransferJobRequestInput:
    r"""UpdateTransferJobRequestInput
    Request passed to UpdateTransferJob.
    """
    
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    transfer_job: Optional[TransferJobInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferJob') }})
    update_transfer_job_field_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTransferJobFieldMask') }})
    
