from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class SlidesPresentationsPagesGetThumbnailPathParams:
    page_object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'pageObjectId', 'style': 'simple', 'explode': False }})
    presentation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'presentationId', 'style': 'simple', 'explode': False }})
    
class SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum(str, Enum):
    PNG = "PNG"

class SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum(str, Enum):
    THUMBNAIL_SIZE_UNSPECIFIED = "THUMBNAIL_SIZE_UNSPECIFIED"
    LARGE = "LARGE"
    MEDIUM = "MEDIUM"
    SMALL = "SMALL"


@dataclass
class SlidesPresentationsPagesGetThumbnailQueryParams:
    dollar_xgafv: Optional[shared.XgafvEnum] = field(default=None, metadata={'query_param': { 'field_name': '$.xgafv', 'style': 'form', 'explode': True }})
    access_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'access_token', 'style': 'form', 'explode': True }})
    alt: Optional[shared.AltEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    thumbnail_properties_mime_type: Optional[SlidesPresentationsPagesGetThumbnailThumbnailPropertiesMimeTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'thumbnailProperties.mimeType', 'style': 'form', 'explode': True }})
    thumbnail_properties_thumbnail_size: Optional[SlidesPresentationsPagesGetThumbnailThumbnailPropertiesThumbnailSizeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'thumbnailProperties.thumbnailSize', 'style': 'form', 'explode': True }})
    upload_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uploadType', 'style': 'form', 'explode': True }})
    upload_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'upload_protocol', 'style': 'form', 'explode': True }})
    

@dataclass
class SlidesPresentationsPagesGetThumbnailSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsPagesGetThumbnailSecurityOption2:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsPagesGetThumbnailSecurityOption3:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsPagesGetThumbnailSecurityOption4:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsPagesGetThumbnailSecurityOption5:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2c: shared.SchemeOauth2c = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SlidesPresentationsPagesGetThumbnailSecurity:
    option1: Optional[SlidesPresentationsPagesGetThumbnailSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[SlidesPresentationsPagesGetThumbnailSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[SlidesPresentationsPagesGetThumbnailSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    option4: Optional[SlidesPresentationsPagesGetThumbnailSecurityOption4] = field(default=None, metadata={'security': { 'option': True }})
    option5: Optional[SlidesPresentationsPagesGetThumbnailSecurityOption5] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class SlidesPresentationsPagesGetThumbnailRequest:
    path_params: SlidesPresentationsPagesGetThumbnailPathParams = field(default=None)
    query_params: SlidesPresentationsPagesGetThumbnailQueryParams = field(default=None)
    security: SlidesPresentationsPagesGetThumbnailSecurity = field(default=None)
    

@dataclass
class SlidesPresentationsPagesGetThumbnailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    thumbnail: Optional[shared.Thumbnail] = field(default=None)
    
