from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObjectID:
    r"""ObjectID
    # gdata.* are outside protos with mising documentation
    """
    
    bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketName') }})
    generation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('generation') }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectName') }})
    
