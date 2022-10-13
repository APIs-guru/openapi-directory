from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class QualityGetDailyDataQualityForSitePathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class QualityGetDailyDataQualityForSiteQueryParams:
    end_date: str = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    site_id: str = field(default=None, metadata={'query_param': { 'field_name': 'siteId', 'style': 'form', 'explode': True }})
    start_date: str = field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclass
class QualityGetDailyDataQualityForSiteRequest:
    path_params: QualityGetDailyDataQualityForSitePathParams = field(default=None)
    query_params: QualityGetDailyDataQualityForSiteQueryParams = field(default=None)
    

@dataclass
class QualityGetDailyDataQualityForSiteResponse:
    content_type: str = field(default=None)
    daily_quality_response: Optional[shared.DailyQualityResponse] = field(default=None)
    status_code: int = field(default=None)
    
