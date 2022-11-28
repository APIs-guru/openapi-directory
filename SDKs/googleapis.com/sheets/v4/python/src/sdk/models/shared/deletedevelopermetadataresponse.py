from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteDeveloperMetadataResponse:
    r"""DeleteDeveloperMetadataResponse
    The response from deleting developer metadata.
    """
    
    deleted_developer_metadata: Optional[List[DeveloperMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedDeveloperMetadata') }})
    
