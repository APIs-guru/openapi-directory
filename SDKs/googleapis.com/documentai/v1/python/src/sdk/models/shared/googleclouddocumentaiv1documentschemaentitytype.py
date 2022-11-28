from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentSchemaEntityType:
    r"""GoogleCloudDocumentaiV1DocumentSchemaEntityType
    EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.
    """
    
    base_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseTypes') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    enum_values: Optional[GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumValues') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    properties: Optional[List[GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
