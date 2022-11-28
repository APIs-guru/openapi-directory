from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PigJob:
    r"""PigJob
    A Dataproc job for running Apache Pig (https://pig.apache.org/) queries on YARN.
    """
    
    continue_on_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continueOnFailure') }})
    jar_file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jarFileUris') }})
    logging_config: Optional[LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    query_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryFileUri') }})
    query_list: Optional[QueryList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryList') }})
    script_variables: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptVariables') }})
    
