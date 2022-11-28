from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SparkBatch:
    r"""SparkBatch
    A configuration for running an Apache Spark (https://spark.apache.org/) batch workload.
    """
    
    archive_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveUris') }})
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('args') }})
    file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileUris') }})
    jar_file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jarFileUris') }})
    main_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainClass') }})
    main_jar_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainJarFileUri') }})
    
