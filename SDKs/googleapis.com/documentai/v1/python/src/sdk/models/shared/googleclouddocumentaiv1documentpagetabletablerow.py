from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentPageTableTableRow:
    r"""GoogleCloudDocumentaiV1DocumentPageTableTableRow
    A row of table cells.
    """
    
    cells: Optional[List[GoogleCloudDocumentaiV1DocumentPageTableTableCell]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cells') }})
    
