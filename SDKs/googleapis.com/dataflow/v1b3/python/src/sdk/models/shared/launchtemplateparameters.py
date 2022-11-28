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
class LaunchTemplateParameters:
    r"""LaunchTemplateParameters
    Parameters to provide to the template being launched. Note that the [metadata in the pipeline code] (https://cloud.google.com/dataflow/docs/guides/templates/creating-templates#metadata) determines which runtime parameters are valid.
    """
    
    environment: Optional[RuntimeEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    transform_name_mapping: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformNameMapping') }})
    update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update') }})
    
