from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2bigquerysource


@dataclass_json
@dataclass
class GoogleCloudRetailV2CompletionDataInputConfig:
    big_query_source: Optional[googlecloudretailv2bigquerysource.GoogleCloudRetailV2BigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQuerySource' }})
    
