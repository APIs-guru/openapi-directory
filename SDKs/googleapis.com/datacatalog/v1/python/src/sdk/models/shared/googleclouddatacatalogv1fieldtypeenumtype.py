from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1fieldtypeenumtypeenumvalue


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1FieldTypeEnumType:
    allowed_values: Optional[List[googleclouddatacatalogv1fieldtypeenumtypeenumvalue.GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedValues' }})
    
