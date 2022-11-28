from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentPageMatrix:
    r"""GoogleCloudDocumentaiV1DocumentPageMatrix
    Representation for transformation matrix, intended to be compatible and used with OpenCV format for image manipulation.
    """
    
    cols: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cols') }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
