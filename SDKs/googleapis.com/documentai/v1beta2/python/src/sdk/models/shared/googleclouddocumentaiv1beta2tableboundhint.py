from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta2TableBoundHint:
    r"""GoogleCloudDocumentaiV1beta2TableBoundHint
    A hint for a table bounding box on the page for table parsing.
    """
    
    bounding_box: Optional[GoogleCloudDocumentaiV1beta2BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBox') }})
    page_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    
