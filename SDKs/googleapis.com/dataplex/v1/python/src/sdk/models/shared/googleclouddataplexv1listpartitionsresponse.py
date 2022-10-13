from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1partition


@dataclass_json
@dataclass
class GoogleCloudDataplexV1ListPartitionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    partitions: Optional[List[googleclouddataplexv1partition.GoogleCloudDataplexV1Partition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitions' }})
    
