from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grpcroute


@dataclass_json
@dataclass
class ListGrpcRoutesResponse:
    grpc_routes: Optional[List[grpcroute.GrpcRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpcRoutes' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
