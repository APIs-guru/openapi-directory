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
class LaunchFlexTemplateParameter:
    r"""LaunchFlexTemplateParameter
    Launch FlexTemplate Parameter.
    """
    
    container_spec: Optional[ContainerSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerSpec') }})
    container_spec_gcs_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerSpecGcsPath') }})
    environment: Optional[FlexTemplateRuntimeEnvironment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    job_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    launch_options: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('launchOptions') }})
    parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    transform_name_mappings: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transformNameMappings') }})
    update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update') }})
    
