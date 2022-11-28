from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskSparkTaskConfig:
    r"""GoogleCloudDataplexV1TaskSparkTaskConfig
    User-specified config for running a Spark task.
    """
    
    archive_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveUris') }})
    file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileUris') }})
    infrastructure_spec: Optional[GoogleCloudDataplexV1TaskInfrastructureSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infrastructureSpec') }})
    main_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainClass') }})
    main_jar_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainJarFileUri') }})
    python_script_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pythonScriptFile') }})
    sql_script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlScript') }})
    sql_script_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlScriptFile') }})
    
