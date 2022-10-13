from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import loggingconfig
from . import querylist


@dataclass_json
@dataclass
class TrinoJob:
    client_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientTags' }})
    continue_on_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continueOnFailure' }})
    logging_config: Optional[loggingconfig.LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfig' }})
    output_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputFormat' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    query_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryFileUri' }})
    query_list: Optional[querylist.QueryList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryList' }})
    
