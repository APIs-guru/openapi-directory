from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LabelFieldModification:
    field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    set_date_values: Optional[List[datetime]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setDateValues' }})
    set_integer_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setIntegerValues' }})
    set_selection_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setSelectionValues' }})
    set_text_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setTextValues' }})
    set_user_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setUserValues' }})
    unset_values: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unsetValues' }})
    
