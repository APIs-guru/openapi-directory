from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAlertsPathParams:
    analysis_id: str = field(metadata={'path_param': { 'field_name': 'analysis-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlertsQueryParams:
    excluded_files: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'excluded-files', 'style': 'form', 'explode': True }})
    sarif_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sarif-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAlertsSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAlertsRequest:
    path_params: GetAlertsPathParams = field()
    query_params: GetAlertsQueryParams = field()
    security: GetAlertsSecurity = field()
    

@dataclass
class GetAlertsResponse:
    content_type: str = field()
    status_code: int = field()
    get_alerts_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    get_alerts_200_application_sarif_plus_json_object: Optional[dict[str, Any]] = field(default=None)
    get_alerts_200_text_csv_string: Optional[str] = field(default=None)
    
