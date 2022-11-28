from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListGrpcRoutesResponse:
    r"""ListGrpcRoutesResponse
    Response returned by the ListGrpcRoutes method.
    """
    
    grpc_routes: Optional[List[GrpcRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcRoutes') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
