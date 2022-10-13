from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attributevaluemetadata

class AttributeMetadataValueTypeEnum(str, Enum):
    ATTRIBUTE_VALUE_TYPE_UNSPECIFIED = "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
    BOOL = "BOOL"
    ENUM = "ENUM"
    URL = "URL"
    REPEATED_ENUM = "REPEATED_ENUM"


@dataclass_json
@dataclass
class AttributeMetadata:
    deprecated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deprecated' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    group_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupDisplayName' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    repeatable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repeatable' }})
    value_metadata: Optional[List[attributevaluemetadata.AttributeValueMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueMetadata' }})
    value_type: Optional[AttributeMetadataValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valueType' }})
    
