from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DownloadUsageHistoryPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclass
class DownloadUsageHistoryQueryParams:
    end: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    licensee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'licensee', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class DownloadUsageHistorySecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    user_token: shared.SchemeUserToken = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class DownloadUsageHistoryRequest:
    path_params: DownloadUsageHistoryPathParams = field()
    query_params: DownloadUsageHistoryQueryParams = field()
    security: DownloadUsageHistorySecurity = field()
    

@dataclass
class DownloadUsageHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    download_usage_history_200_text_csv_string: Optional[str] = field(default=None)
    error_response_schema: Optional[shared.ErrorResponseSchema] = field(default=None)
    
