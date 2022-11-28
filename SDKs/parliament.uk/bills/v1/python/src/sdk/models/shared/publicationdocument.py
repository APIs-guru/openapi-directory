from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PublicationDocument:
    content_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentLength') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentType') }})
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
