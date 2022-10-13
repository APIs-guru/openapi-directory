from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betabigquerysource
from . import googlecloudretailv2betagcssource
from . import googlecloudretailv2betausereventinlinesource


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaUserEventInputConfig:
    big_query_source: Optional[googlecloudretailv2betabigquerysource.GoogleCloudRetailV2betaBigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQuerySource' }})
    gcs_source: Optional[googlecloudretailv2betagcssource.GoogleCloudRetailV2betaGcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    user_event_inline_source: Optional[googlecloudretailv2betausereventinlinesource.GoogleCloudRetailV2betaUserEventInlineSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEventInlineSource' }})
    
