from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class CloudsearchStatsGetIndexQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    from_date_day: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'fromDate.day', 'style': 'form', 'explode': True }})
    from_date_month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'fromDate.month', 'style': 'form', 'explode': True }})
    from_date_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'fromDate.year', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    to_date_day: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'toDate.day', 'style': 'form', 'explode': True }})
    to_date_month: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'toDate.month', 'style': 'form', 'explode': True }})
    to_date_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'toDate.year', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class CloudsearchStatsGetIndexSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudsearchStatsGetIndexSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudsearchStatsGetIndexSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CloudsearchStatsGetIndexSecurity:
    option1: Optional[CloudsearchStatsGetIndexSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CloudsearchStatsGetIndexSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[CloudsearchStatsGetIndexSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CloudsearchStatsGetIndexRequest:
    query_params: CloudsearchStatsGetIndexQueryParams = field(default=None)
    security: CloudsearchStatsGetIndexSecurity = field(default=None)
    

@dataclass
class CloudsearchStatsGetIndexResponse:
    content_type: str = field(default=None)
    get_customer_index_stats_response: Optional[shared.GetCustomerIndexStatsResponse] = field(default=None)
    status_code: int = field(default=None)
    
