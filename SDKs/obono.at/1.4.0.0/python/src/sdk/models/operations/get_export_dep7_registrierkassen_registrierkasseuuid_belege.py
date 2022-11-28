from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegePathParams:
    registrierkasse_uuid: str = field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeRequest:
    path_params: GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegePathParams = field()
    query_params: GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeQueryParams = field()
    

@dataclass
class GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeResponse:
    content_type: str = field()
    status_code: int = field()
    
