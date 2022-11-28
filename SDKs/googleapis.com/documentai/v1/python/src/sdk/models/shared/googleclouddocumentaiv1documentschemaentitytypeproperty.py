from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudDocumentaiV1DocumentSchemaEntityTypePropertyOccurrenceTypeEnum(str, Enum):
    OCCURRENCE_TYPE_UNSPECIFIED = "OCCURRENCE_TYPE_UNSPECIFIED"
    OPTIONAL_ONCE = "OPTIONAL_ONCE"
    OPTIONAL_MULTIPLE = "OPTIONAL_MULTIPLE"
    REQUIRED_ONCE = "REQUIRED_ONCE"
    REQUIRED_MULTIPLE = "REQUIRED_MULTIPLE"


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty:
    r"""GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty
    Defines properties that can be part of the entity type.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    occurrence_type: Optional[GoogleCloudDocumentaiV1DocumentSchemaEntityTypePropertyOccurrenceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occurrenceType') }})
    value_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueType') }})
    
