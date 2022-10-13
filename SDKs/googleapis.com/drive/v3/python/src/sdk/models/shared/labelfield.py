from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import user


@dataclass_json
@dataclass
class LabelField:
    date_string: Optional[List[datetime]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateString' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    integer: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integer' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    selection: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selection' }})
    text: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    user: Optional[List[user.User]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    value_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueType' }})
    
