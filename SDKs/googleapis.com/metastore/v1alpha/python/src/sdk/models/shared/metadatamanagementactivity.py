from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetadataManagementActivity:
    r"""MetadataManagementActivity
    The metadata management activities of the metastore service.
    """
    
    metadata_exports: Optional[List[MetadataExport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataExports') }})
    restores: Optional[List[Restore]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restores') }})
    
