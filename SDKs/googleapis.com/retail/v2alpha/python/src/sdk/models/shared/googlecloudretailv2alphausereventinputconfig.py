from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphabigquerysource
from . import googlecloudretailv2alphagcssource
from . import googlecloudretailv2alphausereventinlinesource


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaUserEventInputConfig:
    big_query_source: Optional[googlecloudretailv2alphabigquerysource.GoogleCloudRetailV2alphaBigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQuerySource' }})
    gcs_source: Optional[googlecloudretailv2alphagcssource.GoogleCloudRetailV2alphaGcsSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcsSource' }})
    user_event_inline_source: Optional[googlecloudretailv2alphausereventinlinesource.GoogleCloudRetailV2alphaUserEventInlineSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEventInlineSource' }})
    
