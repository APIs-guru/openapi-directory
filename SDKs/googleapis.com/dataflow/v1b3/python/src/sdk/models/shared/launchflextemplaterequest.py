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
class LaunchFlexTemplateRequest:
    r"""LaunchFlexTemplateRequest
    A request to launch a Cloud Dataflow job from a FlexTemplate.
    """
    
    launch_parameter: Optional[LaunchFlexTemplateParameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchParameter') }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateOnly') }})
    
