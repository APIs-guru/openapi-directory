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
class Deployment:
    r"""Deployment
    Representation of a single script deployment.
    """
    
    deployment_config: Optional[DeploymentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfig') }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentId') }})
    entry_points: Optional[List[EntryPoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryPoints') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
