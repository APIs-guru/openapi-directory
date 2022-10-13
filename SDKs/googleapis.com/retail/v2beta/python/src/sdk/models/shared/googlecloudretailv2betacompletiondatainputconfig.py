from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudretailv2betabigquerysource


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaCompletionDataInputConfig:
    big_query_source: Optional[googlecloudretailv2betabigquerysource.GoogleCloudRetailV2betaBigQuerySource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bigQuerySource' }})
    
