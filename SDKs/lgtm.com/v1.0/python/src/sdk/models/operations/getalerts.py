from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAlertsPathParams:
    analysis_id: str = field(default=None, metadata={'path_param': { 'field_name': 'analysis-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlertsQueryParams:
    excluded_files: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'excluded-files', 'style': 'form', 'explode': True }})
    sarif_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sarif-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAlertsSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAlertsRequest:
    path_params: GetAlertsPathParams = field(default=None)
    query_params: GetAlertsQueryParams = field(default=None)
    security: GetAlertsSecurity = field(default=None)
    

@dataclass
class GetAlertsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_alerts_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    get_alerts_200_application_sarif_plus_json_object: Optional[dict[str, Any]] = field(default=None)
    
