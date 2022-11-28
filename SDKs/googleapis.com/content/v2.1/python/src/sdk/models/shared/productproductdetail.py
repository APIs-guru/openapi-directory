from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProductProductDetail:
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeName') }})
    attribute_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributeValue') }})
    section_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionName') }})
    
