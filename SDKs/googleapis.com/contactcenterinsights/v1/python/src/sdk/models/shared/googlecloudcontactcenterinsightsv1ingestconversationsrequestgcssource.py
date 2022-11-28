from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource:
    r"""GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource
    Configuration for Cloud Storage bucket sources.
    """
    
    bucket_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketUri') }})
    
