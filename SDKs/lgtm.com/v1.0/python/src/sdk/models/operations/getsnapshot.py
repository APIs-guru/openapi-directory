from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class GetSnapshotPathParams:
    language: str = field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    project_id: int = field(metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSnapshotSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetSnapshotRequest:
    path_params: GetSnapshotPathParams = field()
    security: GetSnapshotSecurity = field()
    

@dataclass
class GetSnapshotResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
