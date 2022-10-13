from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConfigSettings:
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    emulated_form_factor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emulatedFormFactor' }})
    form_factor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formFactor' }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    only_categories: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onlyCategories' }})
    
