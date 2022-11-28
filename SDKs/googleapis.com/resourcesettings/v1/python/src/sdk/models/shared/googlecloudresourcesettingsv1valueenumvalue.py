from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudResourcesettingsV1ValueEnumValue:
    r"""GoogleCloudResourcesettingsV1ValueEnumValue
    A enum value that can hold any enum type setting values. Each enum type is represented by a number, this representation is stored in the definitions.
    """
    
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
