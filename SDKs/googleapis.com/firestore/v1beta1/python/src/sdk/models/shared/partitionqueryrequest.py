from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PartitionQueryRequest:
    r"""PartitionQueryRequest
    The request for Firestore.PartitionQuery.
    """
    
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    partition_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionCount') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    structured_query: Optional[StructuredQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structuredQuery') }})
    
