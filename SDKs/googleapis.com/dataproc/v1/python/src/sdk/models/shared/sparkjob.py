from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SparkJob:
    r"""SparkJob
    A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN.
    """
    
    archive_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveUris') }})
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileUris') }})
    jar_file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jarFileUris') }})
    logging_config: Optional[LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    main_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainClass') }})
    main_jar_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainJarFileUri') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
