from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FlowValidationResult:
    r"""GoogleCloudDialogflowCxV3FlowValidationResult
    The response message for Flows.GetFlowValidationResult.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    validation_messages: Optional[List[GoogleCloudDialogflowCxV3ValidationMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationMessages') }})
    
