from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetResourcesTagsIDSyndicateFormatPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesTagsIDSyndicateFormatQueryParams:
    display_method: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'displayMethod', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesTagsIDSyndicateFormatRequest:
    path_params: GetResourcesTagsIDSyndicateFormatPathParams = field(default=None)
    query_params: GetResourcesTagsIDSyndicateFormatQueryParams = field(default=None)
    

@dataclass
class GetResourcesTagsIDSyndicateFormatResponse:
    content_type: str = field(default=None)
    get_resources_tags_id_syndicate_format_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
