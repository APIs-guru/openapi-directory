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
class LabelModification:
    r"""LabelModification
    A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.
    """
    
    field_modifications: Optional[List[LabelFieldModification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldModifications') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    label_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelId') }})
    remove_label: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeLabel') }})
    
