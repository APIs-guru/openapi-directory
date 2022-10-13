from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import loggingconfig


@dataclass_json
@dataclass
class SparkRJob:
    archive_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archiveUris' }})
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileUris' }})
    logging_config: Optional[loggingconfig.LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfig' }})
    main_r_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainRFileUri' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
