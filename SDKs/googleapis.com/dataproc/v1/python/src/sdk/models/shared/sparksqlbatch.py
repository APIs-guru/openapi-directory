from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SparkSQLBatch:
    jar_file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jarFileUris' }})
    query_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryFileUri' }})
    query_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryVariables' }})
    
