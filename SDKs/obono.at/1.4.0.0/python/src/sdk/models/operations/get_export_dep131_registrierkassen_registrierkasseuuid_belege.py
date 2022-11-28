from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegePathParams:
    registrierkasse_uuid: str = field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeRequest:
    path_params: GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegePathParams = field()
    query_params: GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeQueryParams = field()
    

@dataclass
class GetExportDep131RegistrierkassenRegistrierkasseUUIDBelegeResponse:
    content_type: str = field()
    status_code: int = field()
    
