from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1issuemodelinputdataconfig
from . import googlecloudcontactcenterinsightsv1issuemodellabelstats

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
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    input_data_config: Optional[googlecloudcontactcenterinsightsv1issuemodelinputdataconfig.GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputDataConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[GoogleCloudContactcenterinsightsV1IssueModelStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    training_stats: Optional[googlecloudcontactcenterinsightsv1issuemodellabelstats.GoogleCloudContactcenterinsightsV1IssueModelLabelStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trainingStats' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
