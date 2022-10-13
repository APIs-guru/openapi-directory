from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2alphabigquerysource


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaCompletionDataInputConfig:
    big_query_source: Optional[googlecloudretailv2alphabigquerysource.GoogleCloudRetailV2alphaBigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQuerySource' }})
    
