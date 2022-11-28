from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDashboardConfigurationPageQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDashboardConfigurationPageRequest:
    query_params: GetDashboardConfigurationPageQueryParams = field()
    

@dataclass
class GetDashboardConfigurationPageResponse:
    content_type: str = field()
    status_code: int = field()
    get_dashboard_configuration_page_200_application_x_javascript_binary_string: Optional[bytes] = field(default=None)
    get_dashboard_configuration_page_200_text_html_binary_string: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
