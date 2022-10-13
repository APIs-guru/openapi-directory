from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetExportGobdRegistrierkassenRegistrierkasseUUIDPathParams:
    registrierkasse_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'registrierkasseUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportGobdRegistrierkassenRegistrierkasseUUIDQueryParams:
    after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    

@dataclass
class GetExportGobdRegistrierkassenRegistrierkasseUUIDRequest:
    path_params: GetExportGobdRegistrierkassenRegistrierkasseUUIDPathParams = field(default=None)
    query_params: GetExportGobdRegistrierkassenRegistrierkasseUUIDQueryParams = field(default=None)
    

@dataclass
class GetExportGobdRegistrierkassenRegistrierkasseUUIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
