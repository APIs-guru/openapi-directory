from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1TagTemplateFieldInput:
    r"""GoogleCloudDatacatalogV1TagTemplateFieldInput
    The template for an individual field within a tag template.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    is_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRequired') }})
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    type: Optional[GoogleCloudDatacatalogV1FieldType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1TagTemplateField:
    r"""GoogleCloudDatacatalogV1TagTemplateField
    The template for an individual field within a tag template.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    is_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isRequired') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    type: Optional[GoogleCloudDatacatalogV1FieldType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
