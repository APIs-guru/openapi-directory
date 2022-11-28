from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LettingsLandlordDocument:
    r"""LettingsLandlordDocument
    Document details.
    """
    
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileName') }})
    file_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FileSize') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ID') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MIMEType') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Note') }})
    
