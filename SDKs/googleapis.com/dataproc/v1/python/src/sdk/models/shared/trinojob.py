from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TrinoJob:
    r"""TrinoJob
    A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster.
    """
    
    client_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientTags') }})
    continue_on_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continueOnFailure') }})
    logging_config: Optional[LoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loggingConfig') }})
    output_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputFormat') }})
    properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    query_file_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryFileUri') }})
    query_list: Optional[QueryList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryList') }})
    
