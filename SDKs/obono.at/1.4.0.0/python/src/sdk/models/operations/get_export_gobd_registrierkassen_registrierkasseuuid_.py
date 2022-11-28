from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetExportGobdRegistrierkassenRegistrierkasseUUIDPathParams:
    registrierkasse_uuid: str = field(metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportGobdRegistrierkassenRegistrierkasseUUIDQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExportGobdRegistrierkassenRegistrierkasseUUIDRequest:
    path_params: GetExportGobdRegistrierkassenRegistrierkasseUUIDPathParams = field()
    query_params: GetExportGobdRegistrierkassenRegistrierkasseUUIDQueryParams = field()
    

@dataclass
class GetExportGobdRegistrierkassenRegistrierkasseUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    
