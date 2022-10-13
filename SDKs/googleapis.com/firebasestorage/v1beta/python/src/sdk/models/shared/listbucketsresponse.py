from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bucket


@dataclass_json
@dataclass
class ListBucketsResponse:
    buckets: Optional[List[bucket.Bucket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buckets' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
