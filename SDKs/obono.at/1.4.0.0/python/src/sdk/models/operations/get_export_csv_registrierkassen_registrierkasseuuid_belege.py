from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegePathParams:
    registrierkasse_uuid: str = field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    posten: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'posten', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeRequest:
    path_params: GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegePathParams = field()
    query_params: GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeQueryParams = field()
    

@dataclass
class GetExportCsvRegistrierkassenRegistrierkasseUUIDBelegeResponse:
    content_type: str = field()
    status_code: int = field()
    
