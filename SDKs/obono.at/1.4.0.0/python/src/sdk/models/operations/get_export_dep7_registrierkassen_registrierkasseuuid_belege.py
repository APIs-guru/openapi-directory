from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegePathParams:
    registrierkasse_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeRequest:
    path_params: GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegePathParams = field(default=None)
    query_params: GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeQueryParams = field(default=None)
    

@dataclass
class GetExportDep7RegistrierkassenRegistrierkasseUUIDBelegeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
