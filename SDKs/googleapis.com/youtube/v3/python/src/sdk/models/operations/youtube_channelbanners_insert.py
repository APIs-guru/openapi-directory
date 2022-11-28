from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class YoutubeChannelBannersInsertQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    channel_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'channelId', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    on_behalf_of_content_owner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOfContentOwner', 'style': 'form', 'explode': True }})
    on_behalf_of_content_owner_channel: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'onBehalfOfContentOwnerChannel', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class YoutubeChannelBannersInsertRequests:
    application_octet_stream: bytes = field(metadata={'request': { 'media_type': 'application/octet-stream' }})
    image_jpeg: bytes = field(metadata={'request': { 'media_type': 'image/jpeg' }})
    image_png: bytes = field(metadata={'request': { 'media_type': 'image/png' }})
    

@dataclass
class YoutubeChannelBannersInsertSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeChannelBannersInsertSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeChannelBannersInsertSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class YoutubeChannelBannersInsertSecurity:
    option1: Optional[YoutubeChannelBannersInsertSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[YoutubeChannelBannersInsertSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[YoutubeChannelBannersInsertSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class YoutubeChannelBannersInsertRequest:
    query_params: YoutubeChannelBannersInsertQueryParams = field()
    security: YoutubeChannelBannersInsertSecurity = field()
    request: Optional[YoutubeChannelBannersInsertRequests] = field(default=None)
    

@dataclass
class YoutubeChannelBannersInsertResponse:
    content_type: str = field()
    status_code: int = field()
    channel_banner_resource: Optional[shared.ChannelBannerResource] = field(default=None)
    
