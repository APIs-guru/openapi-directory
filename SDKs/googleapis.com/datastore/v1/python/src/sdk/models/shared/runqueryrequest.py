from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gqlquery
from . import partitionid
from . import query
from . import readoptions


@dataclass_json
@dataclass
class RunQueryRequest:
    database_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseId' }})
    gql_query: Optional[gqlquery.GqlQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gqlQuery' }})
    partition_id: Optional[partitionid.PartitionID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionId' }})
    query: Optional[query.Query] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    read_options: Optional[readoptions.ReadOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOptions' }})
    
