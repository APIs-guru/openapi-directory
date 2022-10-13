from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import loggingconfig


@dataclass_json
@dataclass
class SparkJob:
    archive_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archiveUris' }})
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileUris' }})
    jar_file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jarFileUris' }})
    logging_config: Optional[loggingconfig.LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfig' }})
    main_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainClass' }})
    main_jar_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainJarFileUri' }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    
