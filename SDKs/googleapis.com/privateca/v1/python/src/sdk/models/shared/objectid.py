from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObjectID:
    r"""ObjectID
    An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
    """
    
    object_id_path: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectIdPath') }})
    
