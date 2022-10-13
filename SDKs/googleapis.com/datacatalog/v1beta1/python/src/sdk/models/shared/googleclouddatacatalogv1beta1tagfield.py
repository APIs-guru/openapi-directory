from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddatacatalogv1beta1tagfieldenumvalue


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1beta1TagField:
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boolValue' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    double_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValue' }})
    enum_value: Optional[googleclouddatacatalogv1beta1tagfieldenumvalue.GoogleCloudDatacatalogV1beta1TagFieldEnumValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumValue' }})
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    timestamp_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampValue' }})
    
