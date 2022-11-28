from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1FieldTypeEnumType:
    allowed_values: Optional[List[GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedValues') }})
    
