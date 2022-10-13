from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2bigquerysource
from . import googlecloudretailv2gcssource
from . import googlecloudretailv2usereventinlinesource


@dataclass_json
@dataclass
class GoogleCloudRetailV2UserEventInputConfig:
    big_query_source: Optional[googlecloudretailv2bigquerysource.GoogleCloudRetailV2BigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQuerySource' }})
    gcs_source: Optional[googlecloudretailv2gcssource.GoogleCloudRetailV2GcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    user_event_inline_source: Optional[googlecloudretailv2usereventinlinesource.GoogleCloudRetailV2UserEventInlineSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEventInlineSource' }})
    
