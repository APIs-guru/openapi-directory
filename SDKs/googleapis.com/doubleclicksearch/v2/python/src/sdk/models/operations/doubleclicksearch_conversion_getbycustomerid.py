from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DoubleclicksearchConversionGetByCustomerIDPathParams:
    customer_id: str = field(metadata={'path_param': { 'field_name': 'customerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DoubleclicksearchConversionGetByCustomerIDQueryParams:
    end_date: int = field(metadata={'query_param': { 'field_name': 'endDate', 'style': 'form', 'explode': True }})
    row_count: int = field(metadata={'query_param': { 'field_name': 'rowCount', 'style': 'form', 'explode': True }})
    start_date: int = field(metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    start_row: int = field(metadata={'query_param': { 'field_name': 'startRow', 'style': 'form', 'explode': True }})
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    ad_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'adGroupId', 'style': 'form', 'explode': True }})
    ad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'adId', 'style': 'form', 'explode': True }})
    advertiser_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'advertiserId', 'style': 'form', 'explode': True }})
    agency_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'agencyId', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    campaign_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'campaignId', 'style': 'form', 'explode': True }})
    criterion_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'criterionId', 'style': 'form', 'explode': True }})
    engine_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'engineAccountId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class DoubleclicksearchConversionGetByCustomerIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DoubleclicksearchConversionGetByCustomerIDRequest:
    path_params: DoubleclicksearchConversionGetByCustomerIDPathParams = field()
    query_params: DoubleclicksearchConversionGetByCustomerIDQueryParams = field()
    security: DoubleclicksearchConversionGetByCustomerIDSecurity = field()
    

@dataclass
class DoubleclicksearchConversionGetByCustomerIDResponse:
    content_type: str = field()
    status_code: int = field()
    conversion_list: Optional[shared.ConversionList] = field(default=None)
    
