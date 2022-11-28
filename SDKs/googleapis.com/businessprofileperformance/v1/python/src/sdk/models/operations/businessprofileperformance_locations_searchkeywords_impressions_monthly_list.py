from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams:
    parent: str = field(metadata={'path_param': { 'field_name': 'parent', 'style': 'simple', 'explode': False }})
    

@dataclass
class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    monthly_range_end_month_day: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'monthlyRange.endMonth.day', 'style': 'form', 'explode': True }})
    monthly_range_end_month_month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'monthlyRange.endMonth.month', 'style': 'form', 'explode': True }})
    monthly_range_end_month_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'monthlyRange.endMonth.year', 'style': 'form', 'explode': True }})
    monthly_range_start_month_day: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'monthlyRange.startMonth.day', 'style': 'form', 'explode': True }})
    monthly_range_start_month_month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'monthlyRange.startMonth.month', 'style': 'form', 'explode': True }})
    monthly_range_start_month_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'monthlyRange.startMonth.year', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pageToken', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListRequest:
    path_params: BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListPathParams = field()
    query_params: BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListQueryParams = field()
    

@dataclass
class BusinessprofileperformanceLocationsSearchkeywordsImpressionsMonthlyListResponse:
    content_type: str = field()
    status_code: int = field()
    list_search_keyword_impressions_monthly_response: Optional[shared.ListSearchKeywordImpressionsMonthlyResponse] = field(default=None)
    
