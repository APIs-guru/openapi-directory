from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GooglePrivacyDlpV2BoundingBox:
    r"""GooglePrivacyDlpV2BoundingBox
    Bounding box encompassing detected text within an image.
    """
    
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    left: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('left') }})
    top: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('top') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
