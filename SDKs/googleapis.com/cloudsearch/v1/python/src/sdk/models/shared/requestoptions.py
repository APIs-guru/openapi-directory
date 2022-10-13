from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import debugoptions


@dataclass_json
@dataclass
class RequestOptions:
    debug_options: Optional[debugoptions.DebugOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugOptions' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    search_application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchApplicationId' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    
