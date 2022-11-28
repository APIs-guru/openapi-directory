from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DocumentTransform:
    r"""DocumentTransform
    A transformation of a document.
    """
    
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    field_transforms: Optional[List[FieldTransform]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldTransforms') }})
    
