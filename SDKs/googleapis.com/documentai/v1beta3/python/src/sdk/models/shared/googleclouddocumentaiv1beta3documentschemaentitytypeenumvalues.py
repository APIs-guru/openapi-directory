from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues:
    r"""GoogleCloudDocumentaiV1beta3DocumentSchemaEntityTypeEnumValues
    Defines the a list of enum values.
    """
    
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
