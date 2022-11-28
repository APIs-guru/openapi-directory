from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class UpdateNetworkApplianceContentFilteringPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnum(str, Enum):
    TOP_SITES = "topSites"
    FULL_LIST = "fullList"


@dataclass_json
@dataclass
class UpdateNetworkApplianceContentFilteringRequestBody:
    allowed_url_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedUrlPatterns') }})
    blocked_url_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedUrlCategories') }})
    blocked_url_patterns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockedUrlPatterns') }})
    url_category_list_size: Optional[UpdateNetworkApplianceContentFilteringRequestBodyURLCategoryListSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlCategoryListSize') }})
    

@dataclass
class UpdateNetworkApplianceContentFilteringRequest:
    path_params: UpdateNetworkApplianceContentFilteringPathParams = field()
    request: Optional[UpdateNetworkApplianceContentFilteringRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkApplianceContentFilteringResponse:
    content_type: str = field()
    status_code: int = field()
    update_network_appliance_content_filtering_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
