from dataclasses import dataclass, field
from typing import List


@dataclass
class GetSnapshotPathParams:
    language: str = field(default=None, metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSnapshotSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetSnapshotRequest:
    path_params: GetSnapshotPathParams = field(default=None)
    security: GetSnapshotSecurity = field(default=None)
    

@dataclass
class GetSnapshotResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
