from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import expr
from . import feedoutputconfig

class FeedContentTypeEnum(str, Enum):
    CONTENT_TYPE_UNSPECIFIED = "CONTENT_TYPE_UNSPECIFIED"
    RESOURCE = "RESOURCE"
    IAM_POLICY = "IAM_POLICY"
    ORG_POLICY = "ORG_POLICY"
    ACCESS_POLICY = "ACCESS_POLICY"
    OS_INVENTORY = "OS_INVENTORY"
    RELATIONSHIP = "RELATIONSHIP"


@dataclass_json
@dataclass
class Feed:
    asset_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetNames' }})
    asset_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetTypes' }})
    condition: Optional[expr.Expr] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    content_type: Optional[FeedContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentType' }})
    feed_output_config: Optional[feedoutputconfig.FeedOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedOutputConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    relationship_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationshipTypes' }})
    
