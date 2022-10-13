from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkApplianceContentFilteringPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnum(str, Enum):
    TOP_SITES = "topSites"
    FULL_LIST = "fullList"


@dataclass_json
@dataclass
class UpdateNetworkApplianceContentFilteringRequestBody:
    allowed_url_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedUrlPatterns' }})
    blocked_url_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockedUrlCategories' }})
    blocked_url_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockedUrlPatterns' }})
    url_category_list_size: Optional[UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlCategoryListSize' }})
    

@dataclass
class UpdateNetworkApplianceContentFilteringRequest:
    path_params: UpdateNetworkApplianceContentFilteringPathParams = field(default=None)
    request: Optional[UpdateNetworkApplianceContentFilteringRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceContentFilteringResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_appliance_content_filtering_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
