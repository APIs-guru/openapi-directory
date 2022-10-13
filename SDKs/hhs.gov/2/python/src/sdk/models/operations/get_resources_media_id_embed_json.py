from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetResourcesMediaIDEmbedJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesMediaIDEmbedJSONQueryParams:
    display_method: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'displayMethod', 'style': 'form', 'explode': False }})
    div_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'divId', 'style': 'form', 'explode': False }})
    exclude_div: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'excludeDiv', 'style': 'form', 'explode': False }})
    exclude_jquery: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'excludeJquery', 'style': 'form', 'explode': False }})
    flavor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'flavor', 'style': 'form', 'explode': False }})
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': False }})
    iframe_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'iframeName', 'style': 'form', 'explode': False }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesMediaIDEmbedJSONRequest:
    path_params: GetResourcesMediaIDEmbedJSONPathParams = field(default=None)
    query_params: GetResourcesMediaIDEmbedJSONQueryParams = field(default=None)
    

@dataclass
class GetResourcesMediaIDEmbedJSONResponse:
    content_type: str = field(default=None)
    get_resources_media_id_embed_json_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
