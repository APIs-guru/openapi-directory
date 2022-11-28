from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListMetadataImportsResponse:
    r"""ListMetadataImportsResponse
    Response message for DataprocMetastore.ListMetadataImports.
    """
    
    metadata_imports: Optional[List[MetadataImport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataImports') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
