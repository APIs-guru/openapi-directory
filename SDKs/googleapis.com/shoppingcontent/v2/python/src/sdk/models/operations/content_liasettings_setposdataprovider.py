from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class ContentLiasettingsSetposdataproviderPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    merchant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'merchantId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentLiasettingsSetposdataproviderQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    country: str = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pos_data_provider_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'posDataProviderId', 'style': 'form', 'explode': True }})
    pos_external_account_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'posExternalAccountId', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class ContentLiasettingsSetposdataproviderSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ContentLiasettingsSetposdataproviderRequest:
    path_params: ContentLiasettingsSetposdataproviderPathParams = field(default=None)
    query_params: ContentLiasettingsSetposdataproviderQueryParams = field(default=None)
    security: ContentLiasettingsSetposdataproviderSecurity = field(default=None)
    

@dataclass
class ContentLiasettingsSetposdataproviderResponse:
    content_type: str = field(default=None)
    liasettings_set_pos_data_provider_response: Optional[shared.LiasettingsSetPosDataProviderResponse] = field(default=None)
    status_code: int = field(default=None)
    
