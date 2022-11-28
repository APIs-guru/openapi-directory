from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskNotebookTaskConfig:
    r"""GoogleCloudDataplexV1TaskNotebookTaskConfig
    Config for running scheduled notebooks.
    """
    
    archive_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archiveUris') }})
    file_uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileUris') }})
    infrastructure_spec: Optional[GoogleCloudDataplexV1TaskInfrastructureSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infrastructureSpec') }})
    notebook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notebook') }})
    
