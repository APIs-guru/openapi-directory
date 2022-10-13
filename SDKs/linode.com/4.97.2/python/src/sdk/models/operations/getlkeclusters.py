from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLkeClustersSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLkeClustersSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLkeClustersSecurity:
    option1: Optional[GetLkeClustersSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLkeClustersSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLkeClustersRequest:
    security: GetLkeClustersSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLkeClusters200ApplicationJSON:
    data: Optional[List[shared.LkeCluster]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetLkeClustersDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLkeClustersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_lke_clusters_200_application_json_object: Optional[GetLkeClusters200ApplicationJSON] = field(default=None)
    get_lke_clusters_default_application_json_object: Optional[GetLkeClustersDefaultApplicationJSON] = field(default=None)
    
