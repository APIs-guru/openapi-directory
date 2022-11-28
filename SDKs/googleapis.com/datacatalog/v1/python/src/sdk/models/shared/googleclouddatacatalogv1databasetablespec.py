from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum(str, Enum):
    TABLE_TYPE_UNSPECIFIED = "TABLE_TYPE_UNSPECIFIED"
    NATIVE = "NATIVE"
    EXTERNAL = "EXTERNAL"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1DatabaseTableSpec:
    r"""GoogleCloudDatacatalogV1DatabaseTableSpec
    Specification that applies to a table resource. Valid only for entries with the `TABLE` type.
    """
    
    dataplex_table: Optional[GoogleCloudDatacatalogV1DataplexTableSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataplexTable') }})
    type: Optional[GoogleCloudDatacatalogV1DatabaseTableSpecTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
