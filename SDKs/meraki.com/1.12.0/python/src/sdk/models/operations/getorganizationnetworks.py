from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional


@dataclass
class GetOrganizationNetworksPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class GetOrganizationNetworksTagsFilterTypeEnum(str, Enum):
    WITH_ANY_TAGS = "withAnyTags"
    WITH_ALL_TAGS = "withAllTags"


@dataclass
class GetOrganizationNetworksQueryParams:
    config_template_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'configTemplateId', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    tags: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': False }})
    tags_filter_type: Optional[GetOrganizationNetworksTagsFilterTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'tagsFilterType', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationNetworksRequest:
    path_params: GetOrganizationNetworksPathParams = field(default=None)
    query_params: GetOrganizationNetworksQueryParams = field(default=None)
    

@dataclass
class GetOrganizationNetworksResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    get_organization_networks_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
