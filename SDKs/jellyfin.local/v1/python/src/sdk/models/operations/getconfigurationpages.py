from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetConfigurationPagesQueryParams:
    enable_in_main_menu: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableInMainMenu', 'style': 'form', 'explode': True }})
    page_type: Optional[shared.ConfigurationPageTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'pageType', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConfigurationPagesRequest:
    query_params: GetConfigurationPagesQueryParams = field(default=None)
    

@dataclass
class GetConfigurationPagesResponse:
    configuration_page_infos: Optional[List[shared.ConfigurationPageInfo]] = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
