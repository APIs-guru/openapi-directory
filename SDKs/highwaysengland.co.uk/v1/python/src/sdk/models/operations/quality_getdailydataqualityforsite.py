from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class QualityGetDailyDataQualityForSitePathParams:
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class QualityGetDailyDataQualityForSiteQueryParams:
    end_date: str = field(metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    site_id: str = field(metadata={'query_param': { 'field_name': 'siteId', 'style': 'form', 'explode': True }})
    start_date: str = field(metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclass
class QualityGetDailyDataQualityForSiteRequest:
    path_params: QualityGetDailyDataQualityForSitePathParams = field()
    query_params: QualityGetDailyDataQualityForSiteQueryParams = field()
    

@dataclass
class QualityGetDailyDataQualityForSiteResponse:
    content_type: str = field()
    status_code: int = field()
    daily_quality_response: Optional[shared.DailyQualityResponse] = field(default=None)
    
