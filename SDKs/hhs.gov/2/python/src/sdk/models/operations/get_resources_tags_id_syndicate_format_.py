from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetResourcesTagsIDSyndicateFormatPathParams:
    format: str = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesTagsIDSyndicateFormatQueryParams:
    display_method: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'displayMethod', 'style': 'form', 'explode': False }})
    

@dataclass
class GetResourcesTagsIDSyndicateFormatRequest:
    path_params: GetResourcesTagsIDSyndicateFormatPathParams = field()
    query_params: GetResourcesTagsIDSyndicateFormatQueryParams = field()
    

@dataclass
class GetResourcesTagsIDSyndicateFormatResponse:
    content_type: str = field()
    status_code: int = field()
    get_resources_tags_id_syndicate_format_200_application_json_string: Optional[str] = field(default=None)
    
