from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationDataSource:
    r"""GoogleCloudContactcenterinsightsV1ConversationDataSource
    The conversation source, which is a combination of transcript and audio.
    """
    
    dialogflow_source: Optional[GoogleCloudContactcenterinsightsV1DialogflowSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogflowSource') }})
    gcs_source: Optional[GoogleCloudContactcenterinsightsV1GcsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    

@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1ConversationDataSourceInput:
    r"""GoogleCloudContactcenterinsightsV1ConversationDataSourceInput
    The conversation source, which is a combination of transcript and audio.
    """
    
    dialogflow_source: Optional[GoogleCloudContactcenterinsightsV1DialogflowSourceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogflowSource') }})
    gcs_source: Optional[GoogleCloudContactcenterinsightsV1GcsSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsSource') }})
    
