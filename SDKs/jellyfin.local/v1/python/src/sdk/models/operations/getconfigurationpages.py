from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetConfigurationPagesQueryParams:
    enable_in_main_menu: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableInMainMenu', 'style': 'form', 'explode': True }})
    page_type: Optional[shared.ConfigurationPageTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'pageType', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConfigurationPagesRequest:
    query_params: GetConfigurationPagesQueryParams = field()
    

@dataclass
class GetConfigurationPagesResponse:
    content_type: str = field()
    status_code: int = field()
    configuration_page_infos: Optional[List[shared.ConfigurationPageInfo]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
