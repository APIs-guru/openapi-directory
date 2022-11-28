from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudContactcenterinsightsV1IssueModelStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    UNDEPLOYED = "UNDEPLOYED"
    DEPLOYING = "DEPLOYING"
    DEPLOYED = "DEPLOYED"
    UNDEPLOYING = "UNDEPLOYING"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1IssueModel:
    r"""GoogleCloudContactcenterinsightsV1IssueModel
    The issue model resource.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    input_data_config: Optional[GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDataConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleCloudContactcenterinsightsV1IssueModelStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    training_stats: Optional[GoogleCloudContactcenterinsightsV1IssueModelLabelStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingStats') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1IssueModelInput:
    r"""GoogleCloudContactcenterinsightsV1IssueModelInput
    The issue model resource.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    input_data_config: Optional[GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDataConfig') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    training_stats: Optional[GoogleCloudContactcenterinsightsV1IssueModelLabelStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingStats') }})
    
