from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import structuredquery


@dataclass_json
@dataclass
class PartitionQueryRequest:
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    partition_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionCount' }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readTime' }})
    structured_query: Optional[structuredquery.StructuredQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'structuredQuery' }})
    
