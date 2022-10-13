from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSeriesIDMetadataPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSeriesIDMetadataQueryParams:
    expand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSeriesIDMetadataRequest:
    path_params: GetSeriesIDMetadataPathParams = field(default=None)
    query_params: GetSeriesIDMetadataQueryParams = field(default=None)
    

@dataclass
class GetSeriesIDMetadataResponse:
    content_type: str = field(default=None)
    get_series_id_metadata_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
