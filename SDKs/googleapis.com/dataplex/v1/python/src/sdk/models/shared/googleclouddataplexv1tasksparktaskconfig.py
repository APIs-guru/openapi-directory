from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1taskinfrastructurespec


@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskSparkTaskConfig:
    archive_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archiveUris' }})
    file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileUris' }})
    infrastructure_spec: Optional[googleclouddataplexv1taskinfrastructurespec.GoogleCloudDataplexV1TaskInfrastructureSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infrastructureSpec' }})
    main_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainClass' }})
    main_jar_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainJarFileUri' }})
    python_script_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pythonScriptFile' }})
    sql_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqlScript' }})
    sql_script_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqlScriptFile' }})
    
