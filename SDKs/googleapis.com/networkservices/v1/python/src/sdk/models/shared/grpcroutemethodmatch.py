from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GrpcRouteMethodMatchTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    EXACT = "EXACT"
    REGULAR_EXPRESSION = "REGULAR_EXPRESSION"


@dataclass_json
@dataclass
class GrpcRouteMethodMatch:
    case_sensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseSensitive' }})
    grpc_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpcMethod' }})
    grpc_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpcService' }})
    type: Optional[GrpcRouteMethodMatchTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
