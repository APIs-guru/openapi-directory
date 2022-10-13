from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegePathParams:
    registrierkasse_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeRequest:
    path_params: GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegePathParams = field(default=None)
    query_params: GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeQueryParams = field(default=None)
    

@dataclass
class GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
