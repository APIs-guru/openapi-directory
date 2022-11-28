from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentStyleFontSize:
    r"""GoogleCloudDocumentaiV1beta3DocumentStyleFontSize
    Font size with unit.
    """
    
    size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
