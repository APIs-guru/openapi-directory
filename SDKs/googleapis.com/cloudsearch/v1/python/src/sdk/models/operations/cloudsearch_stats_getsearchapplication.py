from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CloudsearchStatsGetSearchapplicationQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    end_date_day: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endDate.day', 'style': 'form', 'explode': True }})
    end_date_month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endDate.month', 'style': 'form', 'explode': True }})
    end_date_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'endDate.year', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    start_date_day: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startDate.day', 'style': 'form', 'explode': True }})
    start_date_month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startDate.month', 'style': 'form', 'explode': True }})
    start_date_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startDate.year', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class CloudsearchStatsGetSearchapplicationSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudsearchStatsGetSearchapplicationSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudsearchStatsGetSearchapplicationSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudsearchStatsGetSearchapplicationSecurity:
    option1: Optional[CloudsearchStatsGetSearchapplicationSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloudsearchStatsGetSearchapplicationSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[CloudsearchStatsGetSearchapplicationSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloudsearchStatsGetSearchapplicationRequest:
    query_params: CloudsearchStatsGetSearchapplicationQueryParams = field()
    security: CloudsearchStatsGetSearchapplicationSecurity = field()
    

@dataclass
class CloudsearchStatsGetSearchapplicationResponse:
    content_type: str = field()
    status_code: int = field()
    get_customer_search_application_stats_response: Optional[shared.GetCustomerSearchApplicationStatsResponse] = field(default=None)
    
