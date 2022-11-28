from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunQueryRequest:
    r"""RunQueryRequest
    The request for Datastore.RunQuery.
    """
    
    database_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseId') }})
    gql_query: Optional[GqlQuery] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gqlQuery') }})
    partition_id: Optional[PartitionID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partitionId') }})
    query: Optional[Query] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    read_options: Optional[ReadOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOptions') }})
    
