from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegePathParams:
    registrierkasse_uuid: str = field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeRequest:
    path_params: GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegePathParams = field()
    query_params: GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeQueryParams = field()
    

@dataclass
class GetExportXlsRegistrierkassenRegistrierkasseUUIDBelegeResponse:
    content_type: str = field()
    status_code: int = field()
    
