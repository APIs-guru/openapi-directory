from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Write:
    r"""Write
    A write on a document.
    """
    
    current_document: Optional[Precondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentDocument') }})
    delete: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    transform: Optional[DocumentTransform] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transform') }})
    update: Optional[Document] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update') }})
    update_mask: Optional[DocumentMask] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    update_transforms: Optional[List[FieldTransform]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTransforms') }})
    
