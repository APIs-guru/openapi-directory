from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UploadItemRef:
    r"""UploadItemRef
    Represents an upload session reference. This reference is created via upload method. This reference is valid for 30 days after its creation. Updating of item content may refer to this uploaded content via contentDataRef.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
