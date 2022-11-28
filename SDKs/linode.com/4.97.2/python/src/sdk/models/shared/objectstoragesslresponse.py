from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObjectStorageSslResponse:
    r"""ObjectStorageSslResponse
    If this Object Storage bucket has a corresponding TLS/SSL Certificate.
    
    """
    
    ssl: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssl') }})
    
