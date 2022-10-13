from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecTypeEnum(str, Enum):
    LOOKER_COLUMN_TYPE_UNSPECIFIED = "LOOKER_COLUMN_TYPE_UNSPECIFIED"
    DIMENSION = "DIMENSION"
    DIMENSION_GROUP = "DIMENSION_GROUP"
    FILTER = "FILTER"
    MEASURE = "MEASURE"
    PAREMETER = "PAREMETER"


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec:
    type: Optional[GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpecTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
