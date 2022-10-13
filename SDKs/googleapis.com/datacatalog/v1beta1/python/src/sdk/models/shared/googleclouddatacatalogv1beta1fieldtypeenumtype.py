from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1fieldtypeenumtypeenumvalue


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1FieldTypeEnumType:
    allowed_values: Optional[List[googleclouddatacatalogv1beta1fieldtypeenumtypeenumvalue.GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedValues' }})
    
