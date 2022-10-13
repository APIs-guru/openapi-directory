from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import querylist


@dataclass_json
@dataclass
class HiveJob:
    continue_on_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continueOnFailure' }})
    jar_file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jarFileUris' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    query_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryFileUri' }})
    query_list: Optional[querylist.QueryList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryList' }})
    script_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scriptVariables' }})
    
