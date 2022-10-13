from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudcontactcenterinsightsv1dialogflowsource
from . import googlecloudcontactcenterinsightsv1gcssource


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationDataSource:
    dialogflow_source: Optional[googlecloudcontactcenterinsightsv1dialogflowsource.GoogleCloudContactcenterinsightsV1DialogflowSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dialogflowSource' }})
    gcs_source: Optional[googlecloudcontactcenterinsightsv1gcssource.GoogleCloudContactcenterinsightsV1GcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    
